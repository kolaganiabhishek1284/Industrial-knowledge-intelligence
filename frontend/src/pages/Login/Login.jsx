import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaIndustry,
  FaEnvelope,
  FaLock,
  FaArrowRight,
} from "react-icons/fa";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "linear-gradient(135deg,#0f172a,#1e3a8a,#2563eb)",
        padding: "30px",
      }}
    >
      <div
        style={{
          width: "520px",
          background: "rgba(255,255,255,.96)",
          borderRadius: "22px",
          padding: "45px",
          boxShadow: "0 20px 60px rgba(0,0,0,.25)",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "35px",
          }}
        >
          <FaIndustry
            size={60}
            color="#2563eb"
          />

          <h1
            style={{
              marginTop: "15px",
              marginBottom: "8px",
              fontSize: "32px",
              fontWeight: "700",
              color: "#111827",
              lineHeight: "1.3",
            }}
          >
            Industrial Knowledge
            <br />
            Intelligence
          </h1>

          <p
            style={{
              color: "#6b7280",
              fontSize: "17px",
            }}
          >
            ET AI Hackathon 2026
          </p>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "600",
            }}
          >
            Email
          </label>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #d1d5db",
              borderRadius: "10px",
              padding: "0 15px",
            }}
          >
            <FaEnvelope color="#2563eb" />

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              style={{
                flex: 1,
                padding: "14px",
                border: "none",
                outline: "none",
                fontSize: "16px",
              }}
            />
          </div>
        </div>

        <div>
          <label
            style={{
              display: "block",
              marginBottom: "8px",
              fontWeight: "600",
            }}
          >
            Password
          </label>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid #d1d5db",
              borderRadius: "10px",
              padding: "0 15px",
            }}
          >
            <FaLock color="#2563eb" />

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              style={{
                flex: 1,
                padding: "14px",
                border: "none",
                outline: "none",
                fontSize: "16px",
              }}
            />
          </div>
        </div>

        <button
          onClick={login}
          style={{
            width: "100%",
            marginTop: "35px",
            background:
              "linear-gradient(90deg,#2563eb,#3b82f6)",
            color: "white",
            border: "none",
            borderRadius: "12px",
            padding: "15px",
            fontSize: "17px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Login <FaArrowRight style={{ marginLeft: 10 }} />
        </button>
      </div>
    </div>
  );
}