import { useEffect, useRef, useState } from "react";
import {
  Bot,
  User,
  SendHorizonal,
  Loader2,
  Sparkles,
  Copy,
} from "lucide-react";

import api from "../../services/api";

const suggestions = [
  "Summarize uploaded documents",
  "Show maintenance schedule",
  "Explain safety procedures",
  "List compliance requirements",
];

export default function AIChat() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([
    {
      type: "ai",
      text: "👋 Welcome! Ask anything about your uploaded industrial documents.",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const bottomRef = useRef();

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages]);

  async function askAI(text = question) {
    if (!text.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text,
      },
    ]);

    setQuestion("");
    setLoading(true);

    try {
      const res = await api.post("/chat/", null, {
        params: {
          question: text,
        },
      });

      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text: res.data.answer,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          type: "ai",
          text: "Unable to connect to AI backend.",
        },
      ]);
    }

    setLoading(false);
  }

  return (
    <div className="fade-in">

      <div className="mb-8">

        <h1 className="page-title">
          AI Industrial Assistant
        </h1>

        <p className="page-subtitle">
          Ask questions about uploaded manuals, SOPs and industrial knowledge.
        </p>

      </div>

      <div className="grid xl:grid-cols-4 gap-6">

        <div className="card p-6 h-fit">

          <h2 className="text-xl font-bold mb-5">
            Suggested Prompts
          </h2>

          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => askAI(s)}
              className="
              w-full
              mb-3
              text-left
              rounded-xl
              bg-[#1E293B]
              hover:bg-blue-600
              p-4
              transition
              "
            >
              <Sparkles
                size={18}
                className="inline mr-2"
              />
              {s}
            </button>
          ))}

        </div>

        <div className="card xl:col-span-3 flex flex-col h-[78vh]">

          <div className="border-b border-slate-700 p-6">

            <h2 className="text-2xl font-bold">
              AI Conversation
            </h2>

          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6">

            {messages.map((m, index) => (

              <div
                key={index}
                className={`flex ${
                  m.type === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`flex gap-4 max-w-[80%] ${
                    m.type === "user"
                      ? "flex-row-reverse"
                      : ""
                  }`}
                >

                  <div
                    className={`
                    w-12
                    h-12
                    rounded-full
                    flex
                    items-center
                    justify-center
                    ${
                      m.type === "user"
                        ? "bg-blue-600"
                        : "bg-purple-600"
                    }
                    `}
                  >
                    {m.type === "user" ? (
                      <User size={22} />
                    ) : (
                      <Bot size={22} />
                    )}
                  </div>

                  <div
                    className={`
                    rounded-2xl
                    p-5
                    ${
                      m.type === "user"
                        ? "bg-blue-600"
                        : "bg-[#1E293B]"
                    }
                    `}
                  >

                    <p className="leading-7 whitespace-pre-wrap">
                      {m.text}
                    </p>

                    {m.type === "ai" && (

                      <button
                        onClick={() =>
                          navigator.clipboard.writeText(
                            m.text
                          )
                        }
                        className="
                        mt-4
                        flex
                        items-center
                        gap-2
                        text-slate-400
                        hover:text-white
                        "
                      >
                        <Copy size={16} />
                        Copy
                      </button>

                    )}

                  </div>

                </div>

              </div>

            ))}

            {loading && (

              <div className="flex gap-4">

                <div
                  className="
                  w-12
                  h-12
                  rounded-full
                  bg-purple-600
                  flex
                  items-center
                  justify-center
                  "
                >
                  <Bot />
                </div>

                <div className="bg-[#1E293B] rounded-2xl p-5">

                  <Loader2
                    className="animate-spin"
                    size={24}
                  />

                </div>

              </div>

            )}

            <div ref={bottomRef} />

          </div>

          <div className="border-t border-slate-700 p-5">

            <div className="flex gap-4">

              <input
                value={question}
                onChange={(e) =>
                  setQuestion(e.target.value)
                }
                onKeyDown={(e) =>
                  e.key === "Enter" && askAI()
                }
                placeholder="Ask AI about your industrial documents..."
                className="
                flex-1
                bg-[#1E293B]
                rounded-xl
                px-5
                py-4
                text-white
                placeholder:text-slate-500
                "
              />

              <button
                onClick={() => askAI()}
                disabled={loading}
                className="
                px-7
                rounded-xl
                bg-gradient-to-r
                from-blue-600
                to-cyan-500
                hover:scale-105
                transition
                "
              >
                <SendHorizonal />
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}