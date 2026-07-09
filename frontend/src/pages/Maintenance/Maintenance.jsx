import { useState } from "react";
import {
  Cpu,
  Thermometer,
  Activity,
  Gauge,
  Clock3,
  ShieldCheck,
  AlertTriangle,
  Wrench,
} from "lucide-react";

import { predictMaintenance } from "../../services/maintenance";

export default function Maintenance() {
  const [form, setForm] = useState({
    equipment: "",
    temperature: "",
    vibration: "",
    pressure: "",
    running_hours: "",
  });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  async function predict() {
    try {
      setLoading(true);

      const res = await predictMaintenance({
        equipment: form.equipment,
        temperature: Number(form.temperature),
        vibration: Number(form.vibration),
        pressure: Number(form.pressure),
        running_hours: Number(form.running_hours),
      });

      setResult(res.data);
    } catch (err) {
      console.log(err);
      alert("Prediction Failed");
    }

    setLoading(false);
  }

  return (
    <div className="fade-in">

      <div className="mb-8">

        <h1 className="page-title">
          Predictive Maintenance
        </h1>

        <p className="page-subtitle">
          AI predicts equipment health before failures occur.
        </p>

      </div>

      <div className="grid xl:grid-cols-2 gap-8">

        <div className="card p-8">

          <div className="space-y-6">

            <div>

              <label className="text-slate-400">
                Equipment Name
              </label>

              <div className="mt-2 flex items-center gap-3 bg-[#1E293B] rounded-xl px-4 py-4">

                <Cpu className="text-blue-400" />

                <input
                  className="bg-transparent w-full text-white"
                  placeholder="Machine Name"
                  value={form.equipment}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      equipment: e.target.value,
                    })
                  }
                />

              </div>

            </div>

            <div>

              <label className="text-slate-400">
                Temperature
              </label>

              <div className="mt-2 flex items-center gap-3 bg-[#1E293B] rounded-xl px-4 py-4">

                <Thermometer className="text-red-400" />

                <input
                  className="bg-transparent w-full text-white"
                  placeholder="°C"
                  value={form.temperature}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      temperature: e.target.value,
                    })
                  }
                />

              </div>

            </div>

            <div>

              <label className="text-slate-400">
                Vibration
              </label>

              <div className="mt-2 flex items-center gap-3 bg-[#1E293B] rounded-xl px-4 py-4">

                <Activity className="text-green-400" />

                <input
                  className="bg-transparent w-full text-white"
                  placeholder="mm/s"
                  value={form.vibration}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      vibration: e.target.value,
                    })
                  }
                />

              </div>

            </div>

            <div>

              <label className="text-slate-400">
                Pressure
              </label>

              <div className="mt-2 flex items-center gap-3 bg-[#1E293B] rounded-xl px-4 py-4">

                <Gauge className="text-cyan-400" />

                <input
                  className="bg-transparent w-full text-white"
                  placeholder="PSI"
                  value={form.pressure}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      pressure: e.target.value,
                    })
                  }
                />

              </div>

            </div>

            <div>

              <label className="text-slate-400">
                Running Hours
              </label>

              <div className="mt-2 flex items-center gap-3 bg-[#1E293B] rounded-xl px-4 py-4">

                <Clock3 className="text-yellow-400" />

                <input
                  className="bg-transparent w-full text-white"
                  placeholder="Hours"
                  value={form.running_hours}
                  onChange={(e) =>
                    setForm({
                      ...form,
                      running_hours: e.target.value,
                    })
                  }
                />

              </div>

            </div>

            <button
              onClick={predict}
              disabled={loading}
              className="
              w-full
              mt-4
              py-4
              rounded-xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              text-white
              font-bold
              hover:scale-[1.02]
              transition
              "
            >
              {loading
                ? "Predicting..."
                : "Predict Equipment Health"}
            </button>

          </div>

        </div>

        <div className="card p-8">

          <h2 className="text-2xl font-bold mb-8">
            AI Prediction
          </h2>

          {!result ? (

            <div className="text-center mt-20">

              <Wrench
                size={90}
                className="mx-auto text-slate-500"
              />

              <p className="text-slate-400 mt-6">
                Submit machine parameters to receive
                an AI maintenance prediction.
              </p>

            </div>

          ) : (

            <div className="space-y-6">

              <div className="glass p-5">

                <h3 className="text-slate-400">
                  Equipment
                </h3>

                <h2 className="text-2xl font-bold">
                  {result.equipment}
                </h2>

              </div>

              <div className="glass p-5">

                <div className="flex items-center gap-3">

                  <ShieldCheck className="text-green-400" />

                  <div>

                    <h3 className="text-slate-400">
                      Health Score
                    </h3>

                    <h2 className="text-4xl font-bold">
                      {result.health_score}%
                    </h2>

                  </div>

                </div>

              </div>

              <div className="glass p-5">

                <div className="flex items-center gap-3">

                  <AlertTriangle className="text-yellow-400" />

                  <div>

                    <h3 className="text-slate-400">
                      Status
                    </h3>

                    <h2 className="text-2xl font-bold">
                      {result.status}
                    </h2>

                  </div>

                </div>

              </div>

              <div className="glass p-5">

                <h3 className="text-slate-400 mb-3">
                  Recommendation
                </h3>

                <p>
                  {result.recommendation}
                </p>

              </div>

            </div>

          )}

        </div>

      </div>

    </div>
  );
}