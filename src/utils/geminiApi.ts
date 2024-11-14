import { GoogleGenerativeAI } from "@google/generative-ai";

// Replace with your actual API key
const API_KEY = "AIzaSyC6bja4NwvT7lHGXUsJeXf8LwXjycF3Uq8";
const genAI = new GoogleGenerativeAI(API_KEY);

export async function generateLetter(
  style: string,
  recipient: string,
  subject: string,
  content: string
): Promise<string> {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const prompt = `Write a ${style.toLowerCase()} letter to ${recipient} about "${subject}". 
  Include the following points in the letter:
  ${content}
  
  Please format the letter appropriately for the ${style.toLowerCase()} style, including proper salutation and closing.`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  return text;
}