import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const createOrder = async (amount) => {
    try {
        const response = await axios.post(`${API_URL}/payment/create-order`, { amount });
        return response.data;
    } catch (error) {
        console.error("Error creating order:", error);
        throw error;
    }
};

export const verifyPayment = async (paymentData) => {
    try {
        const response = await axios.post(`${API_URL}/payment/verify-payment`, paymentData);
        return response.data;
    } catch (error) {
        console.error("Error verifying payment:", error);
        throw error;
    }
};
