from fastapi import APIRouter

from app.rag.rag import search_documents

router = APIRouter(
    prefix="/search",
    tags=["Document Search"]
)


@router.get("/")
def search(query: str):

    docs = search_documents(query)

    return {
        "query": query,
        "results": [
            {
                "content": doc.page_content,
                "metadata": doc.metadata
            }
            for doc in docs
        ]
    }