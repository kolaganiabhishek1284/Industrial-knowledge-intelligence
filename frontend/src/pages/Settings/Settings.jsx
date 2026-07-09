import {
  Moon,
  Bell,
  Database,
  Shield,
  Bot,
  User,
  Key,
  Save,
  Server,
} from "lucide-react";

export default function Settings() {
  return (
    <div className="fade-in">

      <div className="mb-8">

        <h1 className="page-title">
          Settings
        </h1>

        <p className="page-subtitle">
          Configure your Enterprise AI Platform
        </p>

      </div>

      <div className="grid xl:grid-cols-2 gap-8">

        <div className="card p-8">

          <h2 className="text-2xl font-bold mb-6">
            User Profile
          </h2>

          <div className="space-y-5">

            <div>

              <label className="text-slate-400">
                Name
              </label>

              <div className="mt-2 flex items-center gap-3 bg-[#1E293B] rounded-xl px-4 py-4">

                <User className="text-blue-400"/>

                <input
                  defaultValue="Abhishek"
                  className="bg-transparent w-full text-white"
                />

              </div>

            </div>

            <div>

              <label className="text-slate-400">
                API Key
              </label>

              <div className="mt-2 flex items-center gap-3 bg-[#1E293B] rounded-xl px-4 py-4">

                <Key className="text-yellow-400"/>

                <input
                  placeholder="Google Gemini API Key"
                  className="bg-transparent w-full text-white"
                />

              </div>

            </div>

            <div>

              <label className="text-slate-400">
                Backend URL
              </label>

              <div className="mt-2 flex items-center gap-3 bg-[#1E293B] rounded-xl px-4 py-4">

                <Server className="text-green-400"/>

                <input
                  defaultValue={import.meta.env.VITE_API_URL}
                  className="bg-transparent w-full text-white"
                />

              </div>

            </div>

            <button
              className="
              mt-5
              w-full
              py-4
              rounded-xl
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              text-white
              font-bold
              flex
              justify-center
              items-center
              gap-3
              "
            >
              <Save size={20}/>
              Save Settings
            </button>

          </div>

        </div>

        <div className="space-y-6">

          <div className="card p-6 flex justify-between items-center">

            <div className="flex items-center gap-4">

              <Moon className="text-indigo-400"/>

              <div>

                <h3 className="font-bold">
                  Dark Mode
                </h3>

                <p className="text-slate-400">
                  Enterprise Theme
                </p>

              </div>

            </div>

            <input type="checkbox" defaultChecked />

          </div>

          <div className="card p-6 flex justify-between items-center">

            <div className="flex items-center gap-4">

              <Bell className="text-yellow-400"/>

              <div>

                <h3 className="font-bold">
                  Notifications
                </h3>

                <p className="text-slate-400">
                  Enable Alerts
                </p>

              </div>

            </div>

            <input type="checkbox" defaultChecked />

          </div>

          <div className="card p-6 flex justify-between items-center">

            <div className="flex items-center gap-4">

              <Bot className="text-purple-400"/>

              <div>

                <h3 className="font-bold">
                  AI Assistant
                </h3>

                <p className="text-slate-400">
                  Gemini Enabled
                </p>

              </div>

            </div>

            <input type="checkbox" defaultChecked />

          </div>

          <div className="card p-6 flex justify-between items-center">

            <div className="flex items-center gap-4">

              <Database className="text-green-400"/>

              <div>

                <h3 className="font-bold">
                  Database
                </h3>

                <p className="text-slate-400">
                  Connected
                </p>

              </div>

            </div>

            <Shield className="text-green-400"/>

          </div>

        </div>

      </div>

    </div>
  );
}