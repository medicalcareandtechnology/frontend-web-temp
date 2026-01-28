import Groq from 'groq-sdk';

const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY;

// Initialize Groq client with browser configuration
let groq;
try {
  groq = new Groq({
    apiKey: GROQ_API_KEY,
    dangerouslyAllowBrowser: true // Enable client-side usage
  });
  console.log('Groq client initialized successfully');
} catch (error) {
  console.error('Failed to initialize Groq client:', error);
}

// Contact information for fallback
const CONTACT_INFO = {
  email: 'mct.medtech@gmail.com',
  phone: '8699715686',
  name: 'MCT Support Team'
};

// System prompt for the chatbot
const SYSTEM_PROMPT = `You are a helpful medical assistant chatbot for MCT (Medical Care and Technology), a company dedicated to improving women's health through innovative medical devices.

Our flagship product is the Ease Band - a wearable device designed to provide relief from menstrual cramps using:
- Advanced heat therapy (heats up to 45°C in 15 seconds)
- Precision massage technology (3 distinct vibration patterns)
- Medical-grade materials that are skin-safe and breathable
- Ultra-thin, discreet design that's unnoticeable under clothes
- 8-hour battery life for all-day relief

Your role is to:
- Answer questions about the Ease Band's features, benefits, and how it works
- Provide information about menstrual pain relief
- Direct users to purchase or contact channels
- Be empathetic, professional, and supportive

Key messaging:
- Ease Band provides clinically-proven relief for period cramps
- It's designed to be invisible under clothes but powerful when needed
- Combines medical-grade effectiveness with beautiful, thoughtful design
- Helps women feel their best every day of the month

If asked about medical diagnoses, prescriptions, or emergencies, respond with: 
"I apologize, but I'm not able to provide medical advice. For personal medical concerns, please consult with your healthcare provider. For questions about the Ease Band, feel free to contact us at ${CONTACT_INFO.email} or call ${CONTACT_INFO.phone}. For emergencies, please call your local emergency services immediately."

Keep responses brief, warm, empathetic, and professional.`;

export const sendChatMessage = async (messages) => {
  try {
    // Check if API key is configured
    if (!GROQ_API_KEY) {
      console.error('GROQ_API_KEY is not configured');
      return {
        success: false,
        message: 'Chatbot is not configured. Please add VITE_GROQ_API_KEY to your .env file.'
      };
    }

    console.log('Sending message to Groq API...');
    const response = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        ...messages
      ],
      model: 'llama-3.3-70b-versatile', // Using Llama 3.3 70B model from Groq
      temperature: 0.7,
      max_tokens: 500,
    });

    return {
      success: true,
      message: response.choices[0]?.message?.content || 'Sorry, I could not generate a response.'
    };
  } catch (error) {
    console.error('Error sending chat message:', error);
    console.error('Error details:', {
      message: error.message,
      status: error.status,
      error: error.error
    });

    // Handle specific API errors
    if (error.status === 401) {
      return {
        success: false,
        message: 'Invalid API key. Please check your Groq API configuration.'
      };
    }

    if (error.status === 429) {
      return {
        success: false,
        message: 'Rate limit exceeded. Please try again in a moment.'
      };
    }

    // Handle API key errors
    if (error.message?.includes('API key') || error.message?.includes('api_key')) {
      return {
        success: false,
        message: 'Chatbot configuration error. Please contact support.'
      };
    }

    return {
      success: false,
      message: 'Sorry, I encountered an error. Please try again later.'
    };
  }
};

export const getContactInfo = () => CONTACT_INFO;
