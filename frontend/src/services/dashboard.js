import api from "./api";

export const getAnalytics = async () => {
  return api.get("/analytics/");
};

export const getDashboard = async () => {
  return api.get("/dashboard/");
};

export const getDocuments = async () => {
  return api.get("/documents/");
};

export const getKnowledgeGraph = async () => {
  return api.get("/knowledge/");
};

export const getMaintenance = async () => {
  return api.get("/maintenance/");
};

export const getCompliance = async () => {
  return api.get("/compliance/");
};

export const getSearch = async (query) => {
  return api.get(`/search/?query=${encodeURIComponent(query)}`);
};

export const getHealth = async () => {
  return api.get("/");
};

export const uploadDocument = async (formData) => {
  return api.post("/upload/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const askAI = async (message) => {
  return api.post("/chat/", {
    question: message,
  });
};

export const summarizeDocument = async (filename) => {
  return api.post("/summarize/", {
    filename,
  });
};

export const generateReport = async () => {
  return api.get("/report/");
};