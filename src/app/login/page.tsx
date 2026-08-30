"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  GraduationCap,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }

    if (!password) {
      setError("Please enter your password.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const savedUser = localStorage.getItem("learnhubUser");

      if (!savedUser) {
        setLoading(false);
        setError(
          "No account found. Please create an account first."
        );
        return;
      }

      const user = JSON.parse(savedUser);

      if (
        user.email.toLowerCase() !== email.toLowerCase() ||
        user.password !== password
      ) {
        setLoading(false);
        setError("Incorrect email or password.");
        return;
      }

      // Save login session
      localStorage.setItem(
        "learnhubLoggedIn",
        "true"
      );

      localStorage.setItem(
        "learnhubCurrentUser",
        JSON.stringify(user)
      );

      setLoading(false);

      // Redirect based on role
      if (user.role === "Instructor") {
        router.push("/instructor-dashboard");
      } else {
        router.push("/dashboard");
      }
    }, 800);
  };

  return (
    <main className="min-h-screen bg-[#020617] text-white">

      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-100px] top-[-100px] h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[100px]" />

        <div className="absolute bottom-[-150px] right-[-100px] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]" />
      </div>

      {/* Header */}
      <header className="relative border-b border-white/10 bg-[#020617]/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600">
              <GraduationCap size={23} />
            </div>

            <div>
              <h1 className="text-lg font-bold">
                LearnHub{" "}
                <span className="text-cyan-400">
                  AI
                </span>
              </h1>

              <p className="text-[9px] tracking-[0.2em] text-slate-500">
                LEARN • PRACTICE • GROW
              </p>
            </div>
          </Link>

          <Link
            href="/register"
            className="rounded-lg border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-400"
          >
            Create Account
          </Link>

        </div>
      </header>

      {/* Login */}
      <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center px-6 py-12">

        <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl lg:grid-cols-2">

          {/* Left */}
          <div className="hidden flex-col justify-center bg-gradient-to-br from-cyan-500/10 to-blue-500/5 p-12 lg:flex">

            <div className="mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-300">
              <GraduationCap size={16} />
              LearnHub AI
            </div>

            <h2 className="text-4xl font-bold leading-tight">
              Continue your
              <span className="block text-cyan-400">
                learning journey.
              </span>
            </h2>

            <p className="mt-5 max-w-md leading-7 text-slate-400">
              Access your courses, track your progress,
              practice assessments and use AI-powered
              learning assistance.
            </p>

            <div className="mt-10 space-y-5">

              {[
                "Personalized learning dashboard",
                "Interactive courses",
                "Progress tracking",
                "AI-powered study assistance",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={19}
                    className="text-cyan-400"
                  />

                  <span className="text-sm text-slate-300">
                    {item}
                  </span>
                </div>
              ))}

            </div>
          </div>

          {/* Form */}
          <div className="flex items-center p-7 sm:p-10 lg:p-12">

            <div className="w-full max-w-md mx-auto">

              <div className="mb-8">

                <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-cyan-400">
                  Welcome Back
                </p>

                <h2 className="text-3xl font-bold">
                  Sign in
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                  Sign in to continue learning with LearnHub AI.
                </p>

              </div>

              <form
                onSubmit={handleLogin}
                className="space-y-6"
              >

                {/* Email */}
                <div>

                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    Email Address
                  </label>

                  <div className="relative">

                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                    />

                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setError("");
                      }}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-white/10 bg-slate-900/70 py-3.5 pl-11 pr-4 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-400/60"
                    />

                  </div>

                </div>

                {/* Password */}
                <div>

                  <div className="mb-2 flex justify-between">

                    <label className="text-sm font-medium text-slate-300">
                      Password
                    </label>

                    <button
                      type="button"
                      className="text-xs text-cyan-400 hover:text-cyan-300"
                      onClick={() =>
                        setError(
                          "Password reset will be added later."
                        )
                      }
                    >
                      Forgot password?
                    </button>

                  </div>

                  <div className="relative">

                    <Lock
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                    />

                    <input
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setError("");
                      }}
                      placeholder="Enter your password"
                      className="w-full rounded-xl border border-white/10 bg-slate-900/70 py-3.5 pl-11 pr-12 text-sm text-white outline-none placeholder:text-slate-600 focus:border-cyan-400/60"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-cyan-400"
                    >
                      {showPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>

                  </div>

                </div>

                {/* Error */}
                {error && (
                  <div className="rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300">
                    {error}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3.5 font-semibold text-slate-950 transition hover:from-cyan-300 hover:to-blue-400 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading
                    ? "Signing In..."
                    : "Sign In"}

                  {!loading && (
                    <ArrowRight size={18} />
                  )}
                </button>

                {/* Register */}
                <p className="text-center text-sm text-slate-500">
                  Don't have an account?{" "}

                  <Link
                    href="/register"
                    className="font-semibold text-cyan-400 hover:text-cyan-300"
                  >
                    Create Account
                  </Link>
                </p>

              </form>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}