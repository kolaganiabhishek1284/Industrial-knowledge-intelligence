import api from "./api";

export const predictMaintenance = (data) =>
  api.post("/maintenance/predict", data);

export const complianceCheck = (data) =>
  api.post("/compliance/check", data);