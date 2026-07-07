from fastapi import APIRouter, UploadFile, File, HTTPException
import os
import shutil

from app.ocr.extract_text import extract_pdf_text
from app.rag.rag import add_document

router = APIRouter(prefix="/upload", tags=["Upload"])

UPLOAD_DIR = "app/uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)


@router.post("/")
async def upload_document(file: UploadFile = File(...)):
    try:
        filepath = os.path.join(UPLOAD_DIR, file.filename)

        with open(filepath, "wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        text = extract_pdf_text(filepath)

        chunks = add_document(text, filepath)

        return {
            "success": True,
            "filename": file.filename,
            "filepath": filepath,
            "chunks_added": chunks
        }

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e)
        )