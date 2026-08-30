"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Clock3,
  FileQuestion,
  GraduationCap,
  Menu,
  PlayCircle,
  Trophy,
  X,
} from "lucide-react";

type Lesson = {
  id: number;
  title: string;
  duration: string;
  completed: boolean;
};

const courseData = {
  1: {
    title: "React & TypeScript",
    instructor: "John Mathews",
    category: "Web Development",
    description:
      "Learn React and TypeScript by building modern, reusable and scalable web applications.",
  },
  2: {
    title: "Java Spring Boot",
    instructor: "David Wilson",
    category: "Backend Development",
    description:
      "Learn Spring Boot, REST APIs, backend architecture and database integration.",
  },
  3: {
    title: "Database Management",
    instructor: "Sarah Thomas",
    category: "Database",
    description:
      "Learn SQL, database design, relationships, queries and database management.",
  },
  4: {
    title: "UI/UX Design",
    instructor: "Emily Johnson",
    category: "Design",
    description:
      "Learn user interface design, user experience principles and modern design practices.",
  },
  5: {
    title: "Python Programming",
    instructor: "Michael Brown",
    category: "Programming",
    description:
      "Learn Python programming fundamentals, functions, OOP and practical programming.",
  },
  6: {
    title: "Data Structures & Algorithms",
    instructor: "Alex Martin",
    category: "Programming",
    description:
      "Learn important data structures and algorithms for coding interviews.",
  },
  7: {
    title: "Artificial Intelligence",
    instructor: "Dr. Robert Lee",
    category: "AI & Machine Learning",
    description:
      "Learn artificial intelligence concepts and machine learning fundamentals.",
  },
  8: {
    title: "Cloud Computing",
    instructor: "Daniel Smith",
    category: "Cloud",
    description:
      "Learn cloud computing concepts, deployment and cloud architecture.",
  },
};

const lessons: Lesson[] = [
  {
    id: 1,
    title: "Introduction and Fundamentals",
    duration: "35 min",
    completed: true,
  },
  {
    id: 2,
    title: "Core Concepts",
    duration: "42 min",
    completed: true,
  },
  {
    id: 3,
    title: "Components and Architecture",
    duration: "48 min",
    completed: false,
  },
  {
    id: 4,
    title: "Practical Development",
    duration: "55 min",
    completed: false,
  },
  {
    id: 5,
    title: "Building a Real-World Project",
    duration: "60 min",
    completed: false,
  },
  {
    id: 6,
    title: "Advanced Concepts",
    duration: "50 min",
    completed: false,
  },
];

export default function CourseLearnPage() {
  const params = useParams();

  const courseId = Number(params.id);

  const course =
    courseData[courseId as keyof typeof courseData];

  const [selectedLesson, setSelectedLesson] = useState(3);

  const [completedLessons, setCompletedLessons] = useState<number[]>(
    lessons
      .filter((lesson) => lesson.completed)
      .map((lesson) => lesson.id)
  );

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentLesson = lessons.find(
    (lesson) => lesson.id === selectedLesson
  );

  if (!course) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#020617] px-5 text-white">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-400/10 text-red-400">
            <BookOpen size={30} />
          </div>

          <h1 className="mt-5 text-3xl font-bold">
            Course Not Found
          </h1>

          <p className="mt-3 text-sm text-slate-500">
            The course you are trying to access does not exist.
          </p>

          <Link
            href="/courses"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950"
          >
            <ArrowLeft size={16} />
            Back to Courses
          </Link>
        </div>
      </main>
    );
  }

  const progress = Math.round(
    (completedLessons.length / lessons.length) * 100
  );

  function toggleLessonComplete() {
    if (!currentLesson) return;

    setCompletedLessons((previous) => {
      if (previous.includes(currentLesson.id)) {
        return previous.filter(
          (id) => id !== currentLesson.id
        );
      }

      return [...previous, currentLesson.id];
    });
  }

  function nextLesson() {
    const currentIndex = lessons.findIndex(
      (lesson) => lesson.id === selectedLesson
    );

    if (currentIndex < lessons.length - 1) {
      setSelectedLesson(lessons[currentIndex + 1].id);
    }
  }

  function previousLesson() {
    const currentIndex = lessons.findIndex(
      (lesson) => lesson.id === selectedLesson
    );

    if (currentIndex > 0) {
      setSelectedLesson(lessons[currentIndex - 1].id);
    }
  }

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="sticky top-0 z-50 flex h-[70px] items-center justify-between border-b border-white/10 bg-[#020617]/95 px-5 backdrop-blur-xl lg:px-8">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setSidebarOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 text-slate-300 hover:bg-white/5 lg:hidden"
          >
            <Menu size={20} />
          </button>

          <Link
            href={`/courses/${courseId}`}
            className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:bg-white/5 hover:text-white"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">
              Course Details
            </span>
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10">
              <GraduationCap
                size={20}
                className="text-cyan-400"
              />
            </div>

            <span className="font-bold">
              Learn<span className="text-cyan-400">Hub AI</span>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-xs font-semibold">
              {course.title}
            </p>

            <p className="text-[10px] text-slate-500">
              {progress}% completed
            </p>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400 font-bold text-slate-950">
            J
          </div>
        </div>
      </header>

      {/* =====================================================
          MOBILE SIDEBAR OVERLAY
      ===================================================== */}

      {sidebarOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setSidebarOpen(false)}
          />

          <aside className="absolute left-0 top-0 h-full w-[300px] overflow-y-auto border-r border-white/10 bg-[#080e20] p-5">
            <div className="flex items-center justify-between">
              <h2 className="font-bold">
                Course Lessons
              </h2>

              <button
                type="button"
                onClick={() => setSidebarOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-6">
              <LessonList
                lessons={lessons}
                selectedLesson={selectedLesson}
                completedLessons={completedLessons}
                onSelect={(id) => {
                  setSelectedLesson(id);
                  setSidebarOpen(false);
                }}
              />
            </div>
          </aside>
        </div>
      )}

      {/* =====================================================
          MAIN LAYOUT
      ===================================================== */}

      <div className="mx-auto flex max-w-[1500px]">
        {/* =====================================================
            DESKTOP SIDEBAR
        ===================================================== */}

        <aside className="hidden w-[310px] shrink-0 border-r border-white/10 lg:block">
          <div className="sticky top-[70px] h-[calc(100vh-70px)] overflow-y-auto p-5">
            <div className="mb-6">
              <p className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                {course.category}
              </p>

              <h2 className="mt-2 text-lg font-bold">
                {course.title}
              </h2>

              <p className="mt-2 text-xs leading-5 text-slate-500">
                {course.description}
              </p>
            </div>

            {/* Progress */}

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold">
                  Course Progress
                </span>

                <span className="text-xs font-bold text-cyan-400">
                  {progress}%
                </span>
              </div>

              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-cyan-400 transition-all duration-300"
                  style={{
                    width: `${progress}%`,
                  }}
                />
              </div>

              <p className="mt-2 text-[10px] text-slate-500">
                {completedLessons.length} of {lessons.length} lessons completed
              </p>
            </div>

            {/* Lessons */}

            <div className="mt-6">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-xs font-bold">
                  Course Lessons
                </p>

                <ChevronDown
                  size={15}
                  className="text-slate-500"
                />
              </div>

              <LessonList
                lessons={lessons}
                selectedLesson={selectedLesson}
                completedLessons={completedLessons}
                onSelect={setSelectedLesson}
              />
            </div>
          </div>
        </aside>

        {/* =====================================================
            CONTENT
        ===================================================== */}

        <section className="min-w-0 flex-1 px-5 py-7 lg:px-8 lg:py-9">
          {/* Course title */}

          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              {course.category}
            </p>

            <h1 className="mt-2 text-2xl font-bold md:text-3xl">
              {course.title}
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              Instructor: {course.instructor}
            </p>
          </div>

          {/* =================================================
              VIDEO AREA
          ================================================= */}

          <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#080e20]">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10" />

            <div className="absolute left-8 top-8 h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl" />

            <div className="absolute bottom-8 right-8 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative z-10 text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-400/20">
                <PlayCircle size={40} />
              </div>

              <p className="mt-5 text-lg font-bold">
                {currentLesson?.title}
              </p>

              <p className="mt-2 text-xs text-slate-500">
                Video lesson • {currentLesson?.duration}
              </p>

              <button
                type="button"
                className="mt-5 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-xs font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white"
                onClick={() =>
                  alert(
                    "Video player can be connected here later."
                  )
                }
              >
                ▶ Play Lesson
              </button>
            </div>
          </div>

          {/* =================================================
              LESSON HEADER
          ================================================= */}

          <div className="mt-7 rounded-2xl border border-white/10 bg-[#080e20] p-6">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-wider text-cyan-400">
                  Lesson {selectedLesson}
                </p>

                <h2 className="mt-2 text-xl font-bold">
                  {currentLesson?.title}
                </h2>

                <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                  <Clock3 size={14} />

                  {currentLesson?.duration}
                </div>
              </div>

              <button
                type="button"
                onClick={toggleLessonComplete}
                className={`flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-xs font-bold transition ${
                  completedLessons.includes(selectedLesson)
                    ? "border border-emerald-400/20 bg-emerald-400/10 text-emerald-400"
                    : "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                }`}
              >
                <CheckCircle2 size={16} />

                {completedLessons.includes(selectedLesson)
                  ? "Lesson Completed"
                  : "Mark as Complete"}
              </button>
            </div>
          </div>

          {/* =================================================
              LESSON DESCRIPTION
          ================================================= */}

          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-[#080e20] p-6 lg:col-span-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                  <BookOpen size={20} />
                </div>

                <div>
                  <h3 className="font-bold">
                    About this lesson
                  </h3>

                  <p className="text-[10px] text-slate-500">
                    Lesson overview
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-400">
                In this lesson, you will learn the important concepts
                required to understand {course.title}. Follow the
                lesson carefully, practice the concepts and complete
                the lesson to improve your course progress.
              </p>

              <div className="mt-6 space-y-3">
                <LearningPoint text="Understand the fundamental concepts" />

                <LearningPoint text="Learn practical implementation techniques" />

                <LearningPoint text="Practice with real-world examples" />

                <LearningPoint text="Apply your knowledge in projects" />
              </div>
            </div>

            {/* Quick Actions */}

            <div className="rounded-2xl border border-white/10 bg-[#080e20] p-6">
              <h3 className="font-bold">
                Quick Actions
              </h3>

              <div className="mt-5 space-y-3">
                <Link
                  href="/quizzes"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition hover:bg-white/5"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                    <FileQuestion size={17} />
                  </div>

                  <div className="flex-1">
                    <p className="text-xs font-semibold">
                      Take Quiz
                    </p>

                    <p className="mt-1 text-[10px] text-slate-500">
                      Test your knowledge
                    </p>
                  </div>

                  <ArrowRight size={15} />
                </Link>

                <Link
                  href="/progress"
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4 transition hover:bg-white/5"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-purple-400/10 text-purple-400">
                    <Trophy size={17} />
                  </div>

                  <div className="flex-1">
                    <p className="text-xs font-semibold">
                      View Progress
                    </p>

                    <p className="mt-1 text-[10px] text-slate-500">
                      Track your learning
                    </p>
                  </div>

                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>

          {/* =================================================
              NAVIGATION
          ================================================= */}

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-between">
            <button
              type="button"
              onClick={previousLesson}
              disabled={selectedLesson === lessons[0].id}
              className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-xs font-bold text-slate-300 transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
            >
              <ArrowLeft size={16} />
              Previous Lesson
            </button>

            <button
              type="button"
              onClick={nextLesson}
              disabled={
                selectedLesson === lessons[lessons.length - 1].id
              }
              className="flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-xs font-bold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-30"
            >
              Next Lesson
              <ArrowRight size={16} />
            </button>
          </div>

          {/* =================================================
              COMPLETION
          ================================================= */}

          {progress === 100 && (
            <div className="mt-7 rounded-3xl border border-emerald-400/20 bg-emerald-400/5 p-7 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-400">
                <Trophy size={32} />
              </div>

              <h2 className="mt-5 text-2xl font-bold">
                Course Completed! 🎉
              </h2>

              <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-slate-500">
                Congratulations! You have completed all lessons in
                this course.
              </p>

              <Link
                href="/achievements"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-xs font-bold text-slate-950"
              >
                View Achievements
                <ArrowRight size={16} />
              </Link>
            </div>
          )}

          {/* =================================================
              FOOTER
          ================================================= */}

          <footer className="py-8 text-center text-[10px] text-slate-600">
            © 2026 LearnHub AI • Learn • Practice • Grow
          </footer>
        </section>
      </div>
    </main>
  );
}

/* =========================================================
   LESSON LIST
========================================================= */

function LessonList({
  lessons,
  selectedLesson,
  completedLessons,
  onSelect,
}: {
  lessons: Lesson[];
  selectedLesson: number;
  completedLessons: number[];
  onSelect: (id: number) => void;
}) {
  return (
    <div className="space-y-2">
      {lessons.map((lesson) => {
        const completed = completedLessons.includes(
          lesson.id
        );

        const selected = selectedLesson === lesson.id;

        return (
          <button
            key={lesson.id}
            type="button"
            onClick={() => onSelect(lesson.id)}
            className={`flex w-full items-center gap-3 rounded-xl p-3 text-left transition ${
              selected
                ? "border border-cyan-400/20 bg-cyan-400/10"
                : "border border-transparent hover:bg-white/5"
            }`}
          >
            <div
              className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-[10px] font-bold ${
                completed
                  ? "bg-emerald-400/10 text-emerald-400"
                  : selected
                    ? "bg-cyan-400 text-slate-950"
                    : "bg-white/5 text-slate-500"
              }`}
            >
              {completed ? (
                <CheckCircle2 size={16} />
              ) : (
                lesson.id.toString().padStart(2, "0")
              )}
            </div>

            <div className="min-w-0 flex-1">
              <p
                className={`truncate text-xs font-semibold ${
                  selected
                    ? "text-white"
                    : "text-slate-300"
                }`}
              >
                {lesson.title}
              </p>

              <div className="mt-1 flex items-center gap-1 text-[9px] text-slate-500">
                <Clock3 size={10} />
                {lesson.duration}
              </div>
            </div>

            {selected && (
              <PlayCircle
                size={16}
                className="shrink-0 text-cyan-400"
              />
            )}
          </button>
        );
      })}
    </div>
  );
}

/* =========================================================
   LEARNING POINT
========================================================= */

function LearningPoint({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2
        size={17}
        className="mt-0.5 shrink-0 text-cyan-400"
      />

      <p className="text-xs leading-6 text-slate-400">
        {text}
      </p>
    </div>
  );
}