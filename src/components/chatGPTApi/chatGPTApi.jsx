import axios from "axios";

const sendMessageToChatGPT = async (message) => {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
    const endpoint = "https://api.openai.com/v1/chat/completions";

    if (!apiKey) {
        console.error("OpenAI API key is not defined.");
        return "API key missing. Please configure your environment variables.";
    }

    let retries = 3; // Number of retry attempts
    let delay = 2000; // Initial delay in milliseconds

    while (retries > 0) {
        try {
            const response = await axios.post(
                endpoint,
                {
                    model: "gpt-3.5-turbo",
                    messages: [{ role: "user", content: message }],
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${apiKey}`,
                    },
                }
            );
            return response.data.choices[0].message.content;
        } catch (error) {
            if (error.response?.status === 429) {
                console.warn("Rate limit hit. Retrying...");
                retries--;
                await new Promise((resolve) => setTimeout(resolve, delay));
                delay *= 2; // Exponential backoff
            } else {
                console.error("Error communicating with ChatGPT:", error);
                return "Sorry, something went wrong.";
            }
        }
    }

    return "Too many requests. Please try again later.";
};

export default sendMessageToChatGPT;