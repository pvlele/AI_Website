import { GoogleGenAI, Type } from "@google/genai";
import { GeneratedCurriculum } from '../types';

const getClient = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateCurriculum = async (role: string, experience: string, focusArea: string): Promise<GeneratedCurriculum> => {
  const ai = getClient();
  const prompt = `
    Create a custom AI learning path for a professional in the Indian BFSI (Banking, Financial Services, Insurance) sector.
    Role: ${role}
    Experience Level: ${experience}
    Focus Area: ${focusArea}
    
    Ensure the content is relevant to the Indian market, referencing local technologies (UPI, India Stack) and regulations (RBI, SEBI, DPDP Act) where applicable.

    Return a structured JSON object with a summary and a list of 4-5 learning modules.
    Each module should have a title, description, key topics (array of strings), and estimated hours.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            role: { type: Type.STRING },
            summary: { type: Type.STRING },
            modules: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  description: { type: Type.STRING },
                  keyTopics: { type: Type.ARRAY, items: { type: Type.STRING } },
                  estimatedHours: { type: Type.NUMBER }
                }
              }
            }
          }
        }
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as GeneratedCurriculum;
    }
    throw new Error("No response text generated");
  } catch (error) {
    console.error("Gemini Curriculum Generation Error:", error);
    throw error;
  }
};

export const chatWithAdvisor = async (history: {role: 'user' | 'model', text: string}[], userMessage: string): Promise<string> => {
  const ai = getClient();
  
  // Convert simple history to Gemini Chat format
  const chat = ai.chats.create({
    model: "gemini-3-flash-preview",
    config: {
      systemInstruction: `You are 'Fin', a senior academic advisor at FinAI Academy India. 
      Your goal is to help professionals in the Indian banking and finance sector find the right AI courses.
      Be professional, concise, and helpful. Use Indian English spelling and context where appropriate.
      
      The available courses are: 
      1. AI for Leadership (RBI/SEBI Compliance focus)
      2. ML for Fraud Detection (UPI/Aadhaar focus)
      3. Algorithmic Trading (NSE/BSE focus)
      4. NLP for Indian Languages in Customer Service
      5. Risk Management & Credit Scoring (CIBIL/CRIF focus)
      
      Always guide them towards enrolling. Keep answers under 100 words unless asked for details.`,
    },
    history: history.map(h => ({
      role: h.role,
      parts: [{ text: h.text }]
    }))
  });

  const result = await chat.sendMessage({ message: userMessage });
  return result.text || "I apologize, I'm having trouble connecting to the server. Please check your connection.";
};