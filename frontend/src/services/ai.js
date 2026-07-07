import api from "./api";

export const askAI = (question) =>
  api.post("/chat/", null, {
    params: { question },
  });

export const summarize = (query) =>
  api.post("/summarize/", {
    query,
  });

export const generateReport = (topic) =>
  api.post("/report/", {
    topic,
  });