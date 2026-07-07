import api from "./api";

export const getAnalytics = () => api.get("/analytics/");
export const getDocuments = () => api.get("/documents/");
export const getKnowledgeGraph = () => api.get("/knowledge/");