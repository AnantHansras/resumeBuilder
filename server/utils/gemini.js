
import { GoogleGenerativeAI } from "@google/generative-ai";
// require("dotenv").config();
// const apiKey = process.env.GEMINI_API_KEY;
//   console.log("api",apiKey)
const apiKey = "AIzaSyDnWm3vkY0C2WxAd0_o0mFKpbP7g93TLpM"
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  

    export const geminichatSession = model.startChat({
      generationConfig,
      history: [
    ],
    });
  
