import { GoogleGenerativeAI } from "@google/generative-ai";

// Replace with your actual API key
const API_KEY = "AIzaSyC6bja4NwvT7lHGXUsJeXf8LwXjycF3Uq8";
const genAI = new GoogleGenerativeAI(API_KEY);

interface LetterParams {
  style: string;
  recipient: string;
  recipientPosition: string;
  recipientAddress: string;
  recipientEmail: string;
  subject: string;
  content: string;
  senderName: string;
  senderPosition: string;
  senderAddress: string;
  senderEmail: string;
  senderPhone: string;
}

export async function generateLetter(params: LetterParams): Promise<string> {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  // Build contact information blocks conditionally
  const senderContactInfo = [
    params.senderEmail && `Email: ${params.senderEmail}`,
    params.senderPhone && `Phone: ${params.senderPhone}`
  ].filter(Boolean).join('\n');

  const recipientContactInfo = params.recipientEmail ? 
    `Email: ${params.recipientEmail}` : '';

  const prompt = `Write a ${params.style.toLowerCase()} letter with the following details:

From:
${params.senderName}
${params.senderPosition}
${params.senderAddress}
${senderContactInfo}

To:
${params.recipient}
${params.recipientPosition}
${params.recipientAddress}
${recipientContactInfo}

Subject: ${params.subject}

Main points to include:
${params.content}

Please format the letter appropriately for the ${params.style.toLowerCase()} style, including proper salutation, date, addresses, and closing.`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}