from langchain_core.documents import Document

from app.rag.vector_store import vector_db
from app.rag.embedder import split_text

from app.services.knowledge_graph import knowledge_graph


def add_document(text, source):

    chunks = split_text(text)

    docs = [
        Document(
            page_content=chunk,
            metadata={
                "source": source
            }
        )
        for chunk in chunks
    ]

    vector_db.add_documents(docs)

    knowledge_graph.build(docs)

    return len(docs)


def search_documents(query, k=4):
    return vector_db.similarity_search(query, k=k)