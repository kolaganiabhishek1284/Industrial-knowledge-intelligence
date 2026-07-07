from fastapi import APIRouter, HTTPException
import os

from app.ocr.extract_text import extract_pdf_text
from app.rag.rag import add_document

router = APIRouter(
    prefix="/ingest",
    tags=["Knowledge Base"]
)


@router.post("/")
def ingest(path: str):

    try:

        if not os.path.exists(path):
            raise HTTPException(
                status_code=404,
                detail="File not found."
            )

        text = extract_pdf_text(path)

        if not text or not text.strip():
            raise HTTPException(
                status_code=400,
                detail="No text could be extracted from the document."
            )

        chunks = add_document(text, path)

        return {
            "success": True,
            "message": "Document added to Knowledge Base.",
            "chunks_added": chunks
        }

    except HTTPException:
        raise

    except Exception as e:

        print("INGEST ERROR:", str(e))

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )