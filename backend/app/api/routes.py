from fastapi import APIRouter

router = APIRouter()


@router.get("/health")
def health():
    return {
        "status": "Healthy",
        "project": "Industrial Knowledge Intelligence",
        "version": "1.0"
    }


@router.get("/about")
def about():
    return {
        "project": "Industrial Knowledge Intelligence",
        "developer": "ET AI Hackathon Team"
    }