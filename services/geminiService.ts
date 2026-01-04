import { GoogleGenerativeAI } from "@google/generative-ai";
import { GeneratedCurriculum } from '../types';

// Initialize the Google Generative AI SDK
const genAI = new GoogleGenerativeAI(process.env.API_KEY || '');

export const generateCurriculum = async (role: string, experience: string, focusArea: string): Promise<GeneratedCurriculum> => {
  // Use gemini-1.5-flash for speed and efficiency with this SDK
  const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash",
    generationConfig: {
      responseMimeType: "application/json"
    }
  });

  const prompt = `
    Create a custom AI learning path for a professional in the Indian BFSI (Banking, Financial Services, Insurance) sector.
    Role: ${role}
    Experience Level: ${experience}
    Focus Area: ${focusArea}
    
    Ensure the content is relevant to the Indian market, referencing local technologies (UPI, India Stack) and regulations (RBI, SEBI, DPDP Act) where applicable.

    Return a structured JSON object with a summary and a list of 4-5 learning modules.
    
    The JSON structure must match this schema exactly:
    {
      "role": "string",
      "summary": "string",
      "modules": [
        {
          "title": "string",
          "description": "string",
          "keyTopics": ["string", "string"],
          "estimatedHours": number
        }
      ]
    }
  `;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    return JSON.parse(text) as GeneratedCurriculum;
  } catch (error) {
    console.error("Gemini Curriculum Generation Error:", error);
    throw error;
  }
};

export const chatWithAdvisor = async (history: {role: 'user' | 'model', text: string}[], userMessage: string): Promise<string> => {
  // Use gemini-1.5-flash for the chat interface
  const model = genAI.getGenerativeModel({ 
    model: "gemini-1.5-flash",
    systemInstruction: `You are 'Fin', a senior academic advisor at FinAI Academy India. 
      Your goal is to help professionals in the Indian banking and finance sector find the right AI courses.
      Be professional, concise, and helpful. Use Indian English spelling and context where appropriate.
      
      The available courses are: 
      1. AI for Leadership (RBI/SEBI Compliance focus)
      2. ML for Fraud Detection (UPI/Aadhaar focus)
      3. Algorithmic Trading (NSE/BSE focus)
      4. NLP for Indian Languages in Customer Service
      5. Risk Management & Credit Scoring (CIBIL/CRIF focus)
      
      Always guide them towards enrolling. Keep answers under 100 words unless asked for details.`
  });

  const chat = model.startChat({
    history: history.map(h => ({
      role: h.role,
      parts: [{ text: h.text }]
    }))
  });

  try {
    const result = await chat.sendMessage(userMessage);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Gemini Chat Error:", error);
    return "I apologize, I'm having trouble connecting to the server. Please check your connection or API key.";
  }
};