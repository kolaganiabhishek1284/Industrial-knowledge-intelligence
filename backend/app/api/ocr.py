from fastapi import APIRouter
from app.ocr.extract_text import extract_pdf_text

router = APIRouter(prefix="/ocr", tags=["OCR"])


@router.get("/read")
def read_pdf(path: str):
    text = extract_pdf_text(path)

    return {
        "characters": len(text),
        "preview": text[:1000]
    }