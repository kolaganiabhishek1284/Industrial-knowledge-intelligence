import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Upload from "./pages/Upload/Upload";
import AIChat from "./pages/AIChat/AIChat";
import Documents from "./pages/Documents/Documents";
import KnowledgeGraph from "./pages/KnowledgeGraph/KnowledgeGraph";
import Maintenance from "./pages/Maintenance/Maintenance";
import Compliance from "./pages/Compliance/Compliance";
import Analytics from "./pages/Analytics/Analytics";
import Settings from "./pages/Settings/Settings";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/chat" element={<AIChat />} />
      <Route path="/documents" element={<Documents />} />
      <Route path="/knowledge" element={<KnowledgeGraph />} />
      <Route path="/maintenance" element={<Maintenance />} />
      <Route path="/compliance" element={<Compliance />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="/settings" element={<Settings />} />

      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}