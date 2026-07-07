from fastapi import APIRouter

from app.services.knowledge_graph import knowledge_graph

router = APIRouter(
    prefix="/knowledge",
    tags=["Knowledge Graph"]
)


@router.get("/")
def get_graph():

    return knowledge_graph.to_json()