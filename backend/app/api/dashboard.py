from fastapi import APIRouter
import os

router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)

UPLOAD_FOLDER = "app/uploads"
VECTOR_FOLDER = "app/vector_db"


@router.get("/stats")
def dashboard_stats():

    total_documents = 0

    if os.path.exists(UPLOAD_FOLDER):
        total_documents = len(
            [
                f for f in os.listdir(UPLOAD_FOLDER)
                if os.path.isfile(os.path.join(UPLOAD_FOLDER, f))
            ]
        )

    vector_database_exists = os.path.exists(VECTOR_FOLDER)

    return {
        "documents": total_documents,
        "knowledge_base": "Ready" if vector_database_exists else "Empty",
        "ai_status": "Online",
        "system_health": "Healthy"
    }