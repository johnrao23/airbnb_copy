const getGPTResponse = async (prompt) => {
    const response = await fetch('/GPTAPI', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt }),
    });
  
    const data = await response.json();
    return data;
  };
  
  export { getGPTResponse };