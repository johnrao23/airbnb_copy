export async function getGPTResponse(prompt: string) {
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    });
  
    const data = await response.json();
    return data;
  }
  

const API_KEY = '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'