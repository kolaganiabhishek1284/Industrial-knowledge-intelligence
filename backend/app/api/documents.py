from fastapi import APIRouter
import os

router = APIRouter(
    prefix="/documents",
    tags=["Documents"]
)

UPLOAD_FOLDER = "app/uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)


@router.get("/")
def get_documents():

    files = []

    for filename in os.listdir(UPLOAD_FOLDER):

        path = os.path.join(UPLOAD_FOLDER, filename)

        if os.path.isfile(path):

            files.append({
                "name": filename,
                "size": round(os.path.getsize(path) / 1024, 2),
                "path": path
            })

    return {
        "success": True,
        "count": len(files),
        "documents": files
    }