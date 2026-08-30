"use client";
import Link from "next/link";
import {
  ClipboardList,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  CalendarDays,
  BookOpen,
} from "lucide-react";

const assignments = [
  {
    title: "Build a React Todo Application",
    course: "React & TypeScript",
    description:
      "Create a responsive Todo application using React and TypeScript.",
    dueDate: "Today",
    status: "Pending",
    priority: "High",
  },
  {
    title: "Spring Boot REST API",
    course: "Java Spring Boot",
    description:
      "Develop a REST API using Spring Boot with CRUD operations.",
    dueDate: "Tomorrow",
    status: "Pending",
    priority: "High",
  },
  {
    title: "Database Design Assignment",
    course: "Database Management",
    description:
      "Design a relational database schema and write SQL queries.",
    dueDate: "Sep 2, 2026",
    status: "In Progress",
    priority: "Medium",
  },
  {
    title: "UI Wireframe Design",
    course: "UI/UX Design",
    description:
      "Create wireframes for a modern educational application.",
    dueDate: "Sep 5, 2026",
    status: "Not Started",
    priority: "Medium",
  },
  {
    title: "Python Programming Tasks",
    course: "Python Programming",
    description:
      "Complete basic Python programming problems and exercises.",
    dueDate: "Sep 8, 2026",
    status: "Completed",
    priority: "Low",
  },
];

export default function AssignmentsPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">

      {/* HEADER */}

      <header className="border-b border-white/10 bg-[#020617] px-6 py-6 lg:px-10">

        <div className="flex items-center gap-4">

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10">
            <ClipboardList
              size={25}
              className="text-cyan-400"
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold">
              Assignments
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Manage and complete your course assignments
            </p>
          </div>

        </div>

      </header>

      {/* CONTENT */}

      <div className="px-6 py-8 lg:px-10">

        {/* STATISTICS */}

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">

          <StatCard
            icon={<ClipboardList size={20} />}
            title="Total Assignments"
            value="12"
          />

          <StatCard
            icon={<Clock size={20} />}
            title="Pending"
            value="5"
          />

          <StatCard
            icon={<CheckCircle2 size={20} />}
            title="Completed"
            value="6"
          />

          <StatCard
            icon={<AlertCircle size={20} />}
            title="Due Soon"
            value="2"
          />

        </div>

        {/* ASSIGNMENTS */}

        <section className="mt-8">

          <div className="mb-5">

            <h2 className="text-xl font-bold">
              Your Assignments
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Complete your assignments before the deadline
            </p>

          </div>

          <div className="space-y-4">

            {assignments.map((assignment) => (

              <AssignmentCard
                key={assignment.title}
                {...assignment}
              />

            ))}

          </div>

        </section>

        {/* BACK BUTTON */}

        <Link
          href="/dashboard"
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-slate-300 transition hover:bg-white/20 hover:text-white"
        >
          ← Back to Dashboard
        </Link>

      </div>

    </main>
  );
}

/* =========================================================
   STAT CARD
========================================================= */

function StatCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/20">

      <div className="flex items-center justify-between">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
          {icon}
        </div>

        <span className="text-xs text-emerald-400">
          ↗
        </span>

      </div>

      <p className="mt-5 text-3xl font-bold">
        {value}
      </p>

      <p className="mt-1 text-sm text-slate-500">
        {title}
      </p>

    </div>
  );
}

/* =========================================================
   ASSIGNMENT CARD
========================================================= */

function AssignmentCard({
  title,
  course,
  description,
  dueDate,
  status,
  priority,
}: {
  title: string;
  course: string;
  description: string;
  dueDate: string;
  status: string;
  priority: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/20">

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center">

        {/* ICON */}

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10">

          <BookOpen
            size={21}
            className="text-cyan-400"
          />

        </div>

        {/* DETAILS */}

        <div className="min-w-0 flex-1">

          <div className="flex flex-wrap items-center gap-2">

            <h3 className="font-bold">
              {title}
            </h3>

            <span
              className={`rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                priority === "High"
                  ? "bg-red-400/10 text-red-400"
                  : priority === "Medium"
                  ? "bg-yellow-400/10 text-yellow-400"
                  : "bg-emerald-400/10 text-emerald-400"
              }`}
            >
              {priority}
            </span>

          </div>

          <p className="mt-1 text-xs font-medium text-cyan-400">
            {course}
          </p>

          <p className="mt-2 text-sm leading-5 text-slate-500">
            {description}
          </p>

        </div>

        {/* DATE */}

        <div className="flex items-center gap-2 text-sm text-slate-400">

          <CalendarDays
            size={17}
            className="text-slate-500"
          />

          <span>
            Due: {dueDate}
          </span>

        </div>

        {/* STATUS */}

        <div>

          <span
            className={`inline-flex rounded-full px-3 py-1.5 text-xs font-semibold ${
              status === "Completed"
                ? "bg-emerald-400/10 text-emerald-400"
                : status === "In Progress"
                ? "bg-cyan-400/10 text-cyan-400"
                : "bg-yellow-400/10 text-yellow-400"
            }`}
          >
            {status}
          </span>

        </div>

        {/* BUTTON */}

        <button
          disabled={status === "Completed"}
          className={`flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition ${
            status === "Completed"
              ? "cursor-not-allowed bg-white/5 text-slate-600"
              : "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
          }`}
        >
          {status === "Completed"
            ? "Completed"
            : status === "In Progress"
            ? "Continue"
            : "Start"}

          {status !== "Completed" && (
            <ArrowRight size={16} />
          )}

        </button>

      </div>

    </div>
  );
}