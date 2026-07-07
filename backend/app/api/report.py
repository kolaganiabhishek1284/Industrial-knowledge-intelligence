from fastapi import APIRouter
from pydantic import BaseModel

from app.ai.gemini import ask_gemini
from app.rag.rag import search_documents

router = APIRouter(
    prefix="/report",
    tags=["AI Report"]
)


class ReportRequest(BaseModel):
    topic: str


@router.post("/")
def generate_report(req: ReportRequest):

    docs = search_documents(req.topic, k=6)

    context = "\n\n".join(
        [doc.page_content for doc in docs]
    )

    prompt = f"""
You are an Industrial AI Engineer.

Prepare a professional industrial report.

Topic:
{req.topic}

Context:
{context}

Generate:

1 Executive Summary

2 Findings

3 Risk Assessment

4 Recommendations

5 Conclusion
"""

    report = ask_gemini(prompt)

    return {
        "title": req.topic,
        "report": report,
        "documents": len(docs)
    }