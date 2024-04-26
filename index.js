const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI("AIzaSyDKM-enVJYATTV-Rmdmgh7sOrJ45ZVnUmA");

async function run() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = "as a young investor where should i invest my savings";
  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();
