import api from "./axios";

interface ChatResponse {
  reply: string; // adjust to match your DTO's actual response field
}

export class ChatbotApiService {
  static async sendMessage(message: string): Promise<string> {
    try {
      const { data } = await api.post<ChatResponse>("/chat", { message });
      return data.reply;
    } catch (error) {
      console.error("An error occurred:", error);
      throw error;
    }
  }
}