import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import api from "../../services/api";
import {
  FaCloudUploadAlt,
  FaFilePdf,
  FaCheckCircle,
} from "react-icons/fa";

export default function Upload() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  async function uploadFile() {
    if (!file) {
      setMessage("Please select a PDF.");
      return;
    }

    try {
      setUploading(true);

      const formData = new FormData();
      formData.append("file", file);

      const upload = await api.post(
        "/upload/",
        formData,
        {
          headers: {
            "Content-Type":
              "multipart/form-data",
          },
        }
      );

      try {
        await api.post(
          "/ingest/",
          null,
          {
            params: {
              path: upload.data.filepath,
            },
          }
        );
      } catch (e) {}

      setMessage(
        "Document uploaded successfully."
      );

      setFile(null);
    } catch (err) {
      console.log(err);
      setMessage("Upload failed.");
    }

    setUploading(false);
  }

  return (
    <MainLayout>
      <h1
        style={{
          marginBottom: "30px",
        }}
      >
        Upload Industrial Documents
      </h1>

      <div
        style={{
          background: "white",
          borderRadius: "25px",
          padding: "50px",
          boxShadow:
            "0 20px 50px rgba(0,0,0,.08)",
        }}
      >
        <div
          style={{
            border: "3px dashed #2563eb",
            borderRadius: "20px",
            padding: "70px",
            textAlign: "center",
            background: "#f8fbff",
          }}
        >
          <FaCloudUploadAlt
            size={80}
            color="#2563eb"
          />

          <h2
            style={{
              marginTop: "20px",
            }}
          >
            Drag & Drop PDF Here
          </h2>

          <p
            style={{
              color: "#64748b",
              marginBottom: "30px",
            }}
          >
            or choose a document
          </p>

          <input
            type="file"
            accept=".pdf"
            onChange={(e) =>
              setFile(e.target.files[0])
            }
          />

          {file && (
            <div
              style={{
                marginTop: "35px",
                display: "flex",
                justifyContent: "center",
                gap: "15px",
                alignItems: "center",
              }}
            >
              <FaFilePdf
                color="red"
                size={35}
              />

              <strong>
                {file.name}
              </strong>
            </div>
          )}

          <button
            onClick={uploadFile}
            style={{
              marginTop: "35px",
              padding:
                "16px 40px",
              border: "none",
              borderRadius: "12px",
              background:
                "linear-gradient(90deg,#2563eb,#3b82f6)",
              color: "white",
              fontSize: "17px",
              fontWeight: "600",
            }}
          >
            {uploading
              ? "Uploading..."
              : "Upload Document"}
          </button>

          {message && (
            <div
              style={{
                marginTop: "35px",
                display: "flex",
                justifyContent: "center",
                gap: "12px",
                alignItems: "center",
                color: "#10b981",
                fontWeight: "600",
              }}
            >
              <FaCheckCircle />

              {message}
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
}