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
  email: 'support@yourcompany.com',
  phone: '+1 (555) 123-4567',
  name: 'Customer Support Team'
};

// System prompt for the chatbot
const SYSTEM_PROMPT = `You are a helpful medical assistant chatbot for a Medical Care and Technology company. 
Your role is to answer questions about medical devices, healthcare solutions, appointments, and general health-related inquiries.
Be friendly, professional, empathetic, and concise in your responses.

If a customer asks about something you cannot help with (like specific medical diagnoses, prescriptions, or emergency situations), 
respond with: "I apologize, but I'm not able to assist with that specific issue. Please contact our ${CONTACT_INFO.name} at ${CONTACT_INFO.email} or call ${CONTACT_INFO.phone} for personalized medical assistance. For emergencies, please call your local emergency services immediately."

Keep your responses brief, helpful, and professional.`;

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
