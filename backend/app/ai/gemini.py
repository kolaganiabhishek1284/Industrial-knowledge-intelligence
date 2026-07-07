import os
import google.generativeai as genai

genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

model = genai.GenerativeModel("gemini-2.5-flash")


SYSTEM_PROMPT = """
You are an Industrial Knowledge Intelligence AI.

Rules:
1. Answer ONLY using the provided context.
2. Never invent information.
3. If the answer is not found in the context, reply:
   "I couldn't find this information in the uploaded documents."
4. Keep answers professional and concise.
5. Mention the source document whenever possible.
"""


def ask_gemini(prompt: str) -> str:
    try:
        response = model.generate_content(
            f"{SYSTEM_PROMPT}\n\n{prompt}"
        )
        return response.text
    except Exception as e:
        return f"Gemini Error: {str(e)}"