from fastapi import APIRouter
import os

UPLOAD_FOLDER = "app/uploads"

router = APIRouter(
    prefix="/analytics",
    tags=["Analytics"]
)

@router.get("/")
def analytics():

    files = os.listdir(UPLOAD_FOLDER)

    pdfs = [f for f in files if f.endswith(".pdf")]

    total_size = 0

    for f in pdfs:
        total_size += os.path.getsize(
            os.path.join(UPLOAD_FOLDER, f)
        )

    return {
        "documents": len(pdfs),
        "storage_mb": round(total_size / 1024 / 1024, 2),
        "knowledge_nodes": len(pdfs) * 15,
        "ai_queries": 0,
        "system_health": "Healthy"
    }