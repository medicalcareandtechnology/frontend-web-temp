import { useState } from 'react';

const loadScript = (src) => {
    return new Promise((resolve) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => {
            resolve(true);
        };
        script.onerror = () => {
            resolve(false);
        };
        document.body.appendChild(script);
    });
};

const useRazorpay = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    const displayRazorpay = async (orderData, onSuccess, onFailure) => {
        // Mock order bypass for development
        if (orderData && orderData.id && orderData.id.startsWith('order_mock_')) {
            console.log('[MOCK] Bypassing Razorpay SDK for mock order:', orderData.id);
            setTimeout(() => {
                if (onSuccess) {
                    onSuccess({
                        razorpay_order_id: orderData.id,
                        razorpay_payment_id: `pay_mock_${Date.now()}`,
                        razorpay_signature: `sign_mock_${Date.now()}`
                    });
                }
            }, 1000); // Simulate network delay
            return;
        }

        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js');

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?');
            return;
        }

        setIsLoaded(true);

        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
            amount: orderData.amount,
            currency: orderData.currency,
            name: "Ease Band",
            description: "Transaction",
            // image: "/logo.png", // Add logo URL if available
            order_id: orderData.id,
            handler: async function (response) {
                // Determine if the backend sends data wrapped in a "data" object or directly
                const paymentId = response.razorpay_payment_id;
                const orderId = response.razorpay_order_id;
                const signature = response.razorpay_signature;

                const data = {
                    razorpay_order_id: orderId,
                    razorpay_payment_id: paymentId,
                    razorpay_signature: signature,
                };

                if (onSuccess) onSuccess(data);
            },
            prefill: {
                // We can pass user details here if we have them
                name: "Ease Band User",
                email: "user@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Ease Band Corporate Office",
            },
            theme: {
                color: "#1a1a1a", // Matching the dark aesthetic
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.on('payment.failed', function (response) {
            if (onFailure) onFailure(response.error);
        });
        paymentObject.open();
    };

    return { displayRazorpay, isLoaded };
};

export default useRazorpay;
