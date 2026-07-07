from fastapi import APIRouter

from app.ai.gemini import ask_gemini
from app.rag.rag import search_documents

router = APIRouter(
    prefix="/chat",
    tags=["AI Chat"]
)


@router.post("/")
def chat(question: str):

    documents = search_documents(question)

    if not documents:
        return {
            "success": False,
            "question": question,
            "answer": "I couldn't find this information in the uploaded documents.",
            "sources": [],
            "documents_found": 0
        }

    context = "\n\n".join(
        [doc.page_content for doc in documents]
    )

    prompt = f"""
Context:
{context}

Question:
{question}

Answer professionally using ONLY the context.
"""

    answer = ask_gemini(prompt)

    sources = []

    for doc in documents:

        source = doc.metadata.get("source", "Unknown")

        if source not in sources:
            sources.append(source)

    return {
        "success": True,
        "question": question,
        "answer": answer,
        "sources": sources,
        "documents_found": len(documents)
    }