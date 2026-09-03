export class ChatbotApiService {
  static async sendMessage(
    message: string,
    onChunk: (chunk: string) => void,
  ): Promise<void> {
    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }

    if (!response.body) {
      throw new Error("Streaming is not supported");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader.read();

      if (done) break;

      const chunk = decoder.decode(value, { stream: true });

      onChunk(chunk);
    }
  }
}
