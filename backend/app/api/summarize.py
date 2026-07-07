from fastapi import APIRouter
from pydantic import BaseModel

from app.rag.rag import search_documents
from app.ai.gemini import ask_gemini

router = APIRouter(
    prefix="/summarize",
    tags=["AI Summarization"]
)


class SummaryRequest(BaseModel):
    query: str


@router.post("/")
def summarize(request: SummaryRequest):

    docs = search_documents(request.query, k=5)

    context = "\n\n".join(
        [doc.page_content for doc in docs]
    )

    prompt = f"""
You are an Industrial AI Assistant.

Summarize the following industrial document.

Keep the summary professional.

Context:

{context}
"""

    summary = ask_gemini(prompt)

    return {
        "summary": summary,
        "documents_used": len(docs)
    }