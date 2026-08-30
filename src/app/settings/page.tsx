"use client";

import { useState } from "react";
import {
  Settings as SettingsIcon,
  User,
  Bell,
  Shield,
  Palette,
  Lock,
  Mail,
  Save,
  CheckCircle2,
} from "lucide-react";

export default function SettingsPage() {
  const [name, setName] = useState("Jeyabharathi");
  const [email, setEmail] = useState("jeyabharathi@example.com");
  const [notifications, setNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [saved, setSaved] = useState(false);

  const saveSettings = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <main className="min-h-screen bg-[#020617] text-white">

      {/* HEADER */}

      <header className="border-b border-white/10 px-6 py-6 lg:px-10">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">
            <SettingsIcon
              size={25}
              className="text-cyan-400"
            />
          </div>

          <div>

            <h1 className="text-2xl font-bold">
              Settings
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Manage your account and learning preferences
            </p>

          </div>

        </div>

      </header>


      {/* CONTENT */}

      <div className="mx-auto max-w-5xl px-6 py-8 lg:px-10">

        {/* PROFILE */}

        <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
              <User
                size={19}
                className="text-cyan-400"
              />
            </div>

            <div>

              <h2 className="font-bold">
                Profile Information
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Update your personal information
              </p>

            </div>

          </div>


          <div className="mt-6 grid gap-5 md:grid-cols-2">

            <div>

              <label className="mb-2 block text-xs font-semibold text-slate-400">
                Full Name
              </label>

              <input
                value={name}
                onChange={(event) =>
                  setName(event.target.value)
                }
                className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/40"
              />

            </div>


            <div>

              <label className="mb-2 block text-xs font-semibold text-slate-400">
                Email Address
              </label>

              <div className="relative">

                <Mail
                  size={16}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600"
                />

                <input
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3 pl-11 pr-4 text-sm text-white outline-none transition focus:border-cyan-400/40"
                />

              </div>

            </div>

          </div>

        </section>


        {/* NOTIFICATIONS */}

        <section className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
              <Bell
                size={19}
                className="text-cyan-400"
              />
            </div>

            <div>

              <h2 className="font-bold">
                Notifications
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Choose how you receive notifications
              </p>

            </div>

          </div>


          <div className="mt-6 space-y-4">

            <ToggleRow
              title="Learning Reminders"
              description="Receive reminders about your courses and study goals"
              enabled={notifications}
              onChange={() =>
                setNotifications(!notifications)
              }
            />

            <ToggleRow
              title="Email Updates"
              description="Receive updates about new courses and features"
              enabled={emailUpdates}
              onChange={() =>
                setEmailUpdates(!emailUpdates)
              }
            />

          </div>

        </section>


        {/* APPEARANCE */}

        <section className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
              <Palette
                size={19}
                className="text-cyan-400"
              />
            </div>

            <div>

              <h2 className="font-bold">
                Appearance
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Customize the appearance of LearnHub AI
              </p>

            </div>

          </div>


          <div className="mt-6">

            <ToggleRow
              title="Dark Mode"
              description="Use the dark interface throughout the application"
              enabled={darkMode}
              onChange={() =>
                setDarkMode(!darkMode)
              }
            />

          </div>

        </section>


        {/* SECURITY */}

        <section className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10">
              <Shield
                size={19}
                className="text-cyan-400"
              />
            </div>

            <div>

              <h2 className="font-bold">
                Security
              </h2>

              <p className="mt-1 text-xs text-slate-500">
                Manage your account security
              </p>

            </div>

          </div>


          <div className="mt-6 flex flex-col gap-4 sm:flex-row">

            <button
              type="button"
              onClick={() =>
                alert("Change password feature coming soon.")
              }
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-xs font-semibold text-slate-300 transition hover:bg-white/10"
            >

              <Lock size={15} />

              Change Password

            </button>

          </div>

        </section>


        {/* SAVE BUTTON */}

        <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:items-center">

          <button
            type="button"
            onClick={saveSettings}
            className="flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
          >

            <Save size={17} />

            Save Changes

          </button>


          {saved && (

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">

              <CheckCircle2 size={16} />

              Settings saved successfully

            </div>

          )}

        </div>


        {/* BACK BUTTON */}

        <a
          href="/dashboard"
          className="mt-8 inline-block rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/20 hover:text-white"
        >
          ← Back to Dashboard
        </a>

      </div>

    </main>
  );
}


/* =========================================================
   TOGGLE ROW
========================================================= */

function ToggleRow({
  title,
  description,
  enabled,
  onChange,
}: {
  title: string;
  description: string;
  enabled: boolean;
  onChange: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-5 border-b border-white/5 pb-4 last:border-0 last:pb-0">

      <div>

        <h3 className="text-sm font-semibold">
          {title}
        </h3>

        <p className="mt-1 text-xs text-slate-600">
          {description}
        </p>

      </div>


      <button
        type="button"
        onClick={onChange}
        aria-label={`Toggle ${title}`}
        className={`relative h-6 w-11 shrink-0 rounded-full transition ${
          enabled
            ? "bg-cyan-400"
            : "bg-slate-700"
        }`}
      >

        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
            enabled
              ? "left-6"
              : "left-1"
          }`}
        />

      </button>

    </div>
  );
}