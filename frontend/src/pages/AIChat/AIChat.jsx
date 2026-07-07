import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import api from "../../services/api";

import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  Avatar,
} from "@mui/material";

import SmartToyIcon from "@mui/icons-material/SmartToy";
import PersonIcon from "@mui/icons-material/Person";

export default function AIChat() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  async function askAI() {
    if (!question.trim()) return;

    const q = question;

    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        text: q,
      },
    ]);

    setQuestion("");
    setLoading(true);

    try {
      const res = await api.post("/chat/", null, {
        params: {
          question: q,
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
          text: "Unable to contact AI backend.",
        },
      ]);
    }

    setLoading(false);
  }

  return (
    <MainLayout>

      <Typography variant="h4" mb={3}>
        Industrial AI Assistant
      </Typography>

      <Paper
        sx={{
          p: 3,
          borderRadius: 4,
          height: "75vh",
          display: "flex",
          flexDirection: "column",
        }}
      >

        <Box
          sx={{
            flex: 1,
            overflowY: "auto",
            mb: 3,
          }}
        >

          {messages.map((m, i) => (

            <Box
              key={i}
              display="flex"
              justifyContent={
                m.type === "user"
                  ? "flex-end"
                  : "flex-start"
              }
              mb={2}
            >

              <Box
                display="flex"
                gap={2}
                alignItems="flex-start"
              >

                {m.type === "ai" && (
                  <Avatar>
                    <SmartToyIcon />
                  </Avatar>
                )}

                <Paper
                  sx={{
                    p: 2,
                    maxWidth: 600,
                    bgcolor:
                      m.type === "user"
                        ? "#2563eb"
                        : "#f1f5f9",
                    color:
                      m.type === "user"
                        ? "white"
                        : "black",
                  }}
                >
                  {m.text}
                </Paper>

                {m.type === "user" && (
                  <Avatar sx={{ bgcolor: "#2563eb" }}>
                    <PersonIcon />
                  </Avatar>
                )}

              </Box>

            </Box>

          ))}

        </Box>

        <Box display="flex" gap={2}>

          <TextField
            fullWidth
            value={question}
            placeholder="Ask about uploaded documents..."
            onChange={(e) =>
              setQuestion(e.target.value)
            }
          />

          <Button
            variant="contained"
            onClick={askAI}
            disabled={loading}
          >
            Ask
          </Button>

        </Box>

      </Paper>

    </MainLayout>
  );
}