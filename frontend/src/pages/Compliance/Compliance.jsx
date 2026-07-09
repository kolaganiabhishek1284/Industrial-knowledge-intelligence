import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  FileCheck,
  ClipboardList,
  BadgeAlert,
  Download,
} from "lucide-react";

const compliance = [
  {
    title: "ISO 9001",
    status: "Compliant",
    score: 98,
    color: "text-green-400",
    icon: CheckCircle2,
  },
  {
    title: "Safety SOP",
    status: "Warning",
    score: 82,
    color: "text-yellow-400",
    icon: AlertTriangle,
  },
  {
    title: "Equipment Inspection",
    status: "Completed",
    score: 100,
    color: "text-blue-400",
    icon: ShieldCheck,
  },
  {
    title: "Fire Audit",
    status: "Pending",
    score: 61,
    color: "text-red-400",
    icon: BadgeAlert,
  },
];

export default function Compliance() {
  return (
    <div className="fade-in">

      <div className="flex justify-between items-center mb-8">

        <div>

          <h1 className="page-title">
            Compliance Center
          </h1>

          <p className="page-subtitle">
            Monitor industrial compliance, audits and safety regulations.
          </p>

        </div>

        <button
          className="
          bg-blue-600
          hover:bg-blue-700
          rounded-xl
          px-6
          py-3
          flex
          items-center
          gap-2
          "
        >
          <Download size={18}/>
          Export Report
        </button>

      </div>

      <div className="grid xl:grid-cols-4 gap-6 mb-8">

        <div className="card p-6">
          <ShieldCheck className="text-green-400 mb-4" size={42}/>
          <h2 className="text-4xl font-bold">96%</h2>
          <p className="text-slate-400">Overall Compliance</p>
        </div>

        <div className="card p-6">
          <ClipboardList className="text-blue-400 mb-4" size={42}/>
          <h2 className="text-4xl font-bold">14</h2>
          <p className="text-slate-400">Audits</p>
        </div>

        <div className="card p-6">
          <FileCheck className="text-cyan-400 mb-4" size={42}/>
          <h2 className="text-4xl font-bold">58</h2>
          <p className="text-slate-400">Policies</p>
        </div>

        <div className="card p-6">
          <AlertTriangle className="text-yellow-400 mb-4" size={42}/>
          <h2 className="text-4xl font-bold">3</h2>
          <p className="text-slate-400">Pending Issues</p>
        </div>

      </div>

      <div className="card p-8">

        <h2 className="text-2xl font-bold mb-6">
          Compliance Status
        </h2>

        <div className="space-y-5">

          {compliance.map((item,index)=>{

            const Icon=item.icon;

            return(

              <div
                key={index}
                className="
                glass
                p-5
                flex
                justify-between
                items-center
                "
              >

                <div className="flex items-center gap-5">

                  <Icon
                    size={32}
                    className={item.color}
                  />

                  <div>

                    <h3 className="text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className={item.color}>
                      {item.status}
                    </p>

                  </div>

                </div>

                <div className="text-right">

                  <h2 className="text-3xl font-bold">
                    {item.score}%
                  </h2>

                  <p className="text-slate-400">
                    Compliance Score
                  </p>

                </div>

              </div>

            )

          })}

        </div>

      </div>

    </div>
  );
}