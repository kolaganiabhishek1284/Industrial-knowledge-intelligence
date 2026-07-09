import { useRef, useState } from "react";
import {
  UploadCloud,
  FileText,
  CheckCircle2,
  Loader2,
  FileCheck2,
  Sparkles,
} from "lucide-react";

import api from "../../services/api";

export default function Upload() {
  const inputRef = useRef(null);

  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("");

  const chooseFile = () => inputRef.current.click();

  const handleDrop = (e) => {
    e.preventDefault();

    if (e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  async function uploadFile() {
    if (!file) {
      setMessage("Please select a PDF file.");
      return;
    }

    setUploading(true);
    setProgress(0);
    setMessage("");

    try {
      const formData = new FormData();
      formData.append("file", file);

      const upload = await api.post(
        "/upload/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress(progressEvent) {
            const percent = Math.round(
              (progressEvent.loaded * 100) /
                progressEvent.total
            );

            setProgress(percent);
          },
        }
      );

      try {
        await api.post("/ingest/", null, {
          params: {
            path: upload.data.filepath,
          },
        });
      } catch {}

      setMessage(
        "Document uploaded and knowledge base updated successfully."
      );

      setFile(null);
      setProgress(100);
    } catch (err) {
      console.log(err);
      setMessage("Upload failed.");
    }

    setUploading(false);
  }

  return (
    <div className="fade-in">

      <div className="mb-8">

        <h1 className="page-title">
          Upload Industrial Documents
        </h1>

        <p className="page-subtitle">
          Upload manuals, SOPs, maintenance guides and AI will automatically
          extract knowledge.
        </p>

      </div>

      <div className="card p-8">

        <div
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          className="
          border-2
          border-dashed
          border-blue-500
          rounded-3xl
          min-h-[430px]
          flex
          flex-col
          items-center
          justify-center
          text-center
          bg-gradient-to-br
          from-[#111827]
          via-[#172554]
          to-[#0F172A]
          transition
          "
        >

          <div
            className="
            w-28
            h-28
            rounded-full
            bg-blue-600/20
            flex
            items-center
            justify-center
            mb-8
            "
          >
            <UploadCloud
              size={60}
              className="text-blue-400"
            />
          </div>

          <h2 className="text-3xl font-bold text-white">
            Drag & Drop Documents
          </h2>

          <p className="text-slate-400 mt-3 max-w-xl">
            Upload PDF manuals, SOPs, machine documentation and maintenance
            reports for AI processing.
          </p>

          <button
            onClick={chooseFile}
            className="
            mt-8
            px-8
            py-4
            rounded-xl
            bg-blue-600
            hover:bg-blue-700
            text-white
            font-semibold
            transition
            "
          >
            Browse Files
          </button>

          <input
            ref={inputRef}
            hidden
            type="file"
            accept=".pdf"
            onChange={(e) => setFile(e.target.files[0])}
          />

          {file && (

            <div
              className="
              mt-10
              glass
              p-5
              w-full
              max-w-xl
              "
            >

              <div className="flex items-center gap-4">

                <FileText
                  size={42}
                  className="text-red-400"
                />

                <div className="flex-1 text-left">

                  <h3 className="font-semibold text-white">
                    {file.name}
                  </h3>

                  <p className="text-slate-400">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>

                </div>

                <FileCheck2
                  className="text-green-400"
                  size={34}
                />

              </div>

            </div>

          )}

          {uploading && (

            <div className="w-full max-w-xl mt-8">

              <div className="flex justify-between text-sm mb-2">

                <span>Uploading...</span>

                <span>{progress}%</span>

              </div>

              <div className="w-full bg-slate-700 rounded-full h-4">

                <div
                  className="
                  h-4
                  rounded-full
                  bg-gradient-to-r
                  from-blue-500
                  to-cyan-400
                  transition-all
                  "
                  style={{
                    width: `${progress}%`,
                  }}
                />

              </div>

            </div>

          )}

          <button
            disabled={uploading}
            onClick={uploadFile}
            className="
            mt-10
            px-10
            py-4
            rounded-xl
            bg-gradient-to-r
            from-blue-600
            to-cyan-500
            text-white
            text-lg
            font-bold
            flex
            items-center
            gap-3
            hover:scale-105
            transition
            "
          >

            {uploading ? (
              <>
                <Loader2
                  className="animate-spin"
                  size={22}
                />
                Uploading...
              </>
            ) : (
              <>
                <Sparkles size={22} />
                Upload & Process with AI
              </>
            )}

          </button>

          {message && (

            <div
              className="
              mt-8
              flex
              items-center
              gap-3
              text-green-400
              font-semibold
              "
            >

              <CheckCircle2 />

              {message}

            </div>

          )}

        </div>

      </div>

    </div>
  );
}