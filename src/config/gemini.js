


import { GoogleGenAI } from "@google/genai";
const APIKEY = import.meta.env.GOOGLE_API_KEY;
const ai = new GoogleGenAI({ apiKey: APIKEY });

export async function GenerateAI() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Explain how AI works in a few words",
  });
  console.log(response.text);
}

