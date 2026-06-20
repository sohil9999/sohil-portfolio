import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});
export async function askGemini(question) {
  const context = `
You are Sohil Athar's AI assistant.

About Sohil:
- AI Engineer at Airobosoft Products and Services Limited
- Specializes in Machine Learning, Computer Vision, LLMs and Agentic AI
- Built:
  1. Smart Classroom Monitoring System
  2. AI Waiter
  3. Neurological Disorder Detection System
- Skills:
  Python, TensorFlow, PyTorch, OpenCV,
  ReactJS, Django, MongoDB, MySQL,
  Power BI, Tableau, n8n

Contact:
sohilathara@gmail.com

Answer recruiter questions professionally.
`;

  const result = await model.generateContent(
    context + "\n\nQuestion: " + question
  );

  return result.response.text();
}