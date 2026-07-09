import { useEffect, useState } from "react";
import {
  FileText,
  Search,
  Eye,
  Trash2,
  Calendar,
  HardDrive,
  RefreshCw,
  FileSearch,
} from "lucide-react";

import api from "../../services/api";

export default function Documents() {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadDocuments();
  }, []);

  async function loadDocuments() {
    try {
      const res = await api.get("/documents/");
      setDocuments(res.data.documents || []);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  }

  const filtered = documents.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fade-in">

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="page-title">
            Document Center
          </h1>

          <p className="page-subtitle">
            Manage industrial manuals and AI knowledge sources
          </p>

        </div>

        <button
          onClick={loadDocuments}
          className="
          flex
          items-center
          gap-2
          bg-blue-600
          hover:bg-blue-700
          px-5
          py-3
          rounded-xl
          text-white
          "
        >
          <RefreshCw size={18} />
          Refresh
        </button>

      </div>

      <div className="card p-5 mb-8">

        <div
          className="
          flex
          items-center
          gap-3
          bg-[#1E293B]
          rounded-xl
          px-4
          py-4
          "
        >

          <Search className="text-slate-400" />

          <input
            type="text"
            placeholder="Search documents..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
            bg-transparent
            text-white
            w-full
            placeholder:text-slate-500
            "
          />

        </div>

      </div>

      {loading ? (

        <div className="text-center text-slate-400 text-xl py-20">
          Loading Documents...
        </div>

      ) : filtered.length === 0 ? (

        <div className="card p-20 text-center">

          <FileSearch
            size={80}
            className="mx-auto text-slate-500"
          />

          <h2 className="text-3xl mt-6 font-bold">
            No Documents Found
          </h2>

          <p className="text-slate-400 mt-3">
            Upload PDFs to build your industrial knowledge base.
          </p>

        </div>

      ) : (

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

          {filtered.map((doc, index) => (

            <div
              key={index}
              className="card p-6 hover:scale-[1.02]"
            >

              <div className="flex justify-between items-start">

                <div className="flex gap-4">

                  <div
                    className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-red-500/20
                    flex
                    items-center
                    justify-center
                    "
                  >

                    <FileText
                      size={34}
                      className="text-red-400"
                    />

                  </div>

                  <div>

                    <h2 className="font-bold text-lg break-all">
                      {doc.name}
                    </h2>

                    <div className="flex items-center gap-2 mt-3 text-slate-400">

                      <HardDrive size={16} />

                      {doc.size} KB

                    </div>

                    <div className="flex items-center gap-2 mt-2 text-slate-400">

                      <Calendar size={16} />

                      Available

                    </div>

                  </div>

                </div>

              </div>

              <div className="flex gap-3 mt-8">

                <button
                  className="
                  flex-1
                  bg-blue-600
                  hover:bg-blue-700
                  rounded-xl
                  py-3
                  flex
                  justify-center
                  items-center
                  gap-2
                  "
                >
                  <Eye size={18} />
                  View
                </button>

                <button
                  className="
                  w-14
                  rounded-xl
                  bg-red-600
                  hover:bg-red-700
                  flex
                  justify-center
                  items-center
                  "
                >
                  <Trash2 size={18} />
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}