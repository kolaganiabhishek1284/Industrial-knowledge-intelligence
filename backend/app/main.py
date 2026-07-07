from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.analytics import router as analytics_router
from app.database.database import Base, engine
from app.api.knowledge_graph import router as knowledge_router
from app.api.routes import router
from app.api.upload import router as upload_router
from app.api.ocr import router as ocr_router
from app.api.ingest import router as ingest_router

from app.api.report import router as report_router
from app.api.summarize import router as summarize_router
from app.api.chat import router as chat_router
from app.api.search import router as search_router
from app.api.documents import router as documents_router
from app.api.dashboard import router as dashboard_router
from app.api.maintenance import router as maintenance_router
from app.api.compliance import router as compliance_router
Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="Industrial Knowledge Intelligence",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(maintenance_router)
app.include_router(router)
app.include_router(upload_router)
app.include_router(ocr_router)
app.include_router(compliance_router)
app.include_router(ingest_router)
app.include_router(chat_router)
app.include_router(search_router)
app.include_router(documents_router)
app.include_router(report_router)
app.include_router(summarize_router)
app.include_router(dashboard_router)
app.include_router(knowledge_router)
app.include_router(analytics_router)
@app.get("/")
def home():
    return {
        "status": "success",
        "message": "Industrial Knowledge Intelligence Backend Running"
    }