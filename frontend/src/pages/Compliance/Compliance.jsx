import { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import { predictMaintenance } from "../../services/maintenance";

export default function Maintenance() {
  const [form, setForm] = useState({
    equipment: "",
    temperature: "",
    vibration: "",
    pressure: "",
    running_hours: "",
  });

  const [result, setResult] = useState(null);

  async function predict() {
    try {
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
      alert("Prediction failed");
    }
  }

  return (
    <MainLayout>

      <h1>Predictive Maintenance</h1>

      <br />

      <input
        placeholder="Equipment"
        value={form.equipment}
        onChange={(e)=>setForm({...form,equipment:e.target.value})}
      />

      <br /><br />

      <input
        placeholder="Temperature"
        value={form.temperature}
        onChange={(e)=>setForm({...form,temperature:e.target.value})}
      />

      <br /><br />

      <input
        placeholder="Vibration"
        value={form.vibration}
        onChange={(e)=>setForm({...form,vibration:e.target.value})}
      />

      <br /><br />

      <input
        placeholder="Pressure"
        value={form.pressure}
        onChange={(e)=>setForm({...form,pressure:e.target.value})}
      />

      <br /><br />

      <input
        placeholder="Running Hours"
        value={form.running_hours}
        onChange={(e)=>setForm({...form,running_hours:e.target.value})}
      />

      <br /><br />

      <button onClick={predict}>
        Predict
      </button>

      {result && (
        <div style={{marginTop:30}}>

          <h2>Prediction</h2>

          <p><b>Equipment:</b> {result.equipment}</p>

          <p><b>Status:</b> {result.status}</p>

          <p><b>Health:</b> {result.health_score}%</p>

          <p><b>Recommendation:</b></p>

          <p>{result.recommendation}</p>

        </div>
      )}

    </MainLayout>
  );
}