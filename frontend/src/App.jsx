import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

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

      <Route
        path="/dashboard"
        element={
          <MainLayout>
            <Dashboard />
          </MainLayout>
        }
      />

      <Route
        path="/upload"
        element={
          <MainLayout>
            <Upload />
          </MainLayout>
        }
      />

      <Route
        path="/chat"
        element={
          <MainLayout>
            <AIChat />
          </MainLayout>
        }
      />

      <Route
        path="/documents"
        element={
          <MainLayout>
            <Documents />
          </MainLayout>
        }
      />

      <Route
        path="/knowledge"
        element={
          <MainLayout>
            <KnowledgeGraph />
          </MainLayout>
        }
      />

      <Route
        path="/maintenance"
        element={
          <MainLayout>
            <Maintenance />
          </MainLayout>
        }
      />

      <Route
        path="/compliance"
        element={
          <MainLayout>
            <Compliance />
          </MainLayout>
        }
      />

      <Route
        path="/analytics"
        element={
          <MainLayout>
            <Analytics />
          </MainLayout>
        }
      />

      <Route
        path="/settings"
        element={
          <MainLayout>
            <Settings />
          </MainLayout>
        }
      />

      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Routes>
  );
}