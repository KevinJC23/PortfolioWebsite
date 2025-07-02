import { GoogleGenAI } from '@google/genai';

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY!;
if(!apiKey) {
  throw new Error("Gemini API Key is missing!");
}

const genAI = new GoogleGenAI({ apiKey });

export class Assistant {
  private modelName: string;

  constructor(model: string = "gemini-1.5-flash") {
    this.modelName = model;
  }

  async chat(content: string): Promise<string> {
    try {
      const result = await genAI.models.generateContent({
        model: this.modelName,
        contents: [{ role: 'user', parts: [{ text: content }] }],
      });

      return result.candidates?.[0]?.content?.parts?.[0]?.text || '';
    } catch(error) {
      console.error("Chat error: ", error);
      throw error;
    }
  }

  async *chatStream(content: string): AsyncGenerator<string, void, unknown> {
    try {
      const stream = await genAI.models.generateContentStream({
        model: this.modelName,
        contents: [{ role: 'user', parts: [{ text: content }] }],
      });

      for await(const chunk of stream) {
        const text = chunk.candidates?.[0]?.content?.parts?.[0]?.text || '';
        if(text) {
          yield text;
        }
      }
    } catch(error) {
      console.error("Chat stream error: ", error);
      throw error;
    }
  }
}

export const assistant = new Assistant();