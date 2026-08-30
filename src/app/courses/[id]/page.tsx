"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Code2,
  Database,
  GraduationCap,
  PlayCircle,
  Star,
  Target,
  Trophy,
  Users,
} from "lucide-react";

type Course = {
  id: number;
  title: string;
  description: string;
  image: string;
  instructor: string;
  category: string;
  level: string;
  duration: string;
  lessons: number;
  students: string;
  rating: number;
  progress: number;
  enrolled: boolean;
};

const courses: Course[] = [
  {
    id: 1,
    title: "React & TypeScript",
    description:
      "Build modern and scalable web applications using React, TypeScript and reusable components.",
    image: "/courses/react.jpeg",
    instructor: "John Mathews",
    category: "Web Development",
    level: "Intermediate",
    duration: "18h 30m",
    lessons: 42,
    students: "12.4K",
    rating: 4.9,
    progress: 78,
    enrolled: true,
  },
  {
    id: 2,
    title: "Java Spring Boot",
    description:
      "Learn REST APIs, Spring Boot architecture, database integration and backend development.",
    image: "/courses/springboot.jpeg",
    instructor: "David Wilson",
    category: "Backend Development",
    level: "Intermediate",
    duration: "22h 15m",
    lessons: 52,
    students: "9.8K",
    rating: 4.8,
    progress: 52,
    enrolled: true,
  },
  {
    id: 3,
    title: "Database Management",
    description:
      "Master SQL, database design, relationships, queries and MySQL database management.",
    image: "/courses/mysql.jpeg",
    instructor: "Sarah Thomas",
    category: "Database",
    level: "Beginner",
    duration: "14h 20m",
    lessons: 36,
    students: "15.2K",
    rating: 4.7,
    progress: 65,
    enrolled: true,
  },
  {
    id: 4,
    title: "UI/UX Design",
    description:
      "Create beautiful user interfaces and learn practical UX principles for modern products.",
    image: "/courses/uiux.jpeg",
    instructor: "Emily Johnson",
    category: "Design",
    level: "Beginner",
    duration: "10h 45m",
    lessons: 28,
    students: "8.7K",
    rating: 4.8,
    progress: 35,
    enrolled: true,
  },
  {
    id: 5,
    title: "Python Programming",
    description:
      "Start programming with Python and learn variables, functions, OOP, files and projects.",
    image: "/courses/fullstack.jpg",
    instructor: "Michael Brown",
    category: "Programming",
    level: "Beginner",
    duration: "16h 40m",
    lessons: 40,
    students: "21.3K",
    rating: 4.9,
    progress: 0,
    enrolled: false,
  },
  {
    id: 6,
    title: "Data Structures & Algorithms",
    description:
      "Prepare for coding interviews with arrays, strings, linked lists, trees, graphs and algorithms.",
    image: "/courses/fullstack.jpg",
    instructor: "Alex Martin",
    category: "Programming",
    level: "Advanced",
    duration: "25h 10m",
    lessons: 65,
    students: "18.9K",
    rating: 4.9,
    progress: 0,
    enrolled: false,
  },
  {
    id: 7,
    title: "Artificial Intelligence",
    description:
      "Understand AI concepts, machine learning fundamentals and practical intelligent applications.",
    image: "/courses/ai.jpeg",
    instructor: "Dr. Robert Lee",
    category: "AI & Machine Learning",
    level: "Intermediate",
    duration: "20h 30m",
    lessons: 48,
    students: "14.6K",
    rating: 4.8,
    progress: 0,
    enrolled: false,
  },
  {
    id: 8,
    title: "Cloud Computing",
    description:
      "Learn cloud concepts, deployment, virtual machines, containers and cloud architecture.",
    image: "/courses/fullstack.jpg",
    instructor: "Daniel Smith",
    category: "Cloud",
    level: "Intermediate",
    duration: "17h 50m",
    lessons: 38,
    students: "11.2K",
    rating: 4.7,
    progress: 0,
    enrolled: false,
  },
];

export default function CourseDetailsPage() {
  const params = useParams();

  const courseId = Number(params.id);

  const course = courses.find((item) => item.id === courseId);

  if (!course) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#020617] px-5 text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Course Not Found</h1>

          <p className="mt-3 text-slate-500">
            The course you are looking for does not exist.
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

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      {/* Header */}
      <header className="sticky top-0 z-30 flex h-[72px] items-center justify-between border-b border-white/10 bg-[#020617]/95 px-5 backdrop-blur-xl lg:px-8">
        <div className="flex items-center gap-4">
          <Link
            href="/courses"
            className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-xs text-slate-300 transition hover:bg-white/5 hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Courses
          </Link>

          <div className="hidden items-center gap-2 md:flex">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600">
              <GraduationCap size={20} />
            </div>

            <span className="font-bold">
              Learn<span className="text-cyan-400">Hub AI</span>
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500 font-bold text-slate-950">
            J
          </div>

          <div className="hidden md:block">
            <p className="text-xs font-semibold">Jeyabharathi</p>
            <p className="text-[10px] text-slate-500">Student</p>
          </div>
        </div>
      </header>

      {/* Main */}
      <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8 lg:py-12">
        {/* Course Hero */}
        <div className="grid overflow-hidden rounded-3xl border border-white/10 bg-[#080e20] lg:grid-cols-2">
          {/* Image */}
          <div className="relative min-h-[300px] lg:min-h-[430px]">
            <img
              src={course.image}
              alt={course.title}
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-black/20 to-transparent" />

            <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-xs font-medium backdrop-blur">
              {course.level}
            </div>

            <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-xl border border-white/10 bg-black/50 px-4 py-2 text-xs backdrop-blur">
              <PlayCircle size={15} className="text-cyan-400" />
              {course.lessons} Lessons
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-center p-7 lg:p-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-cyan-400">
              {course.category}
            </p>

            <h1 className="text-3xl font-bold leading-tight md:text-4xl">
              {course.title}
            </h1>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              {course.description}
            </p>

            {/* Rating */}
            <div className="mt-6 flex items-center gap-2">
              <Star
                size={18}
                className="fill-yellow-400 text-yellow-400"
              />

              <span className="font-bold">{course.rating}</span>

              <span className="text-xs text-slate-500">
                ({course.students} students)
              </span>
            </div>

            {/* Instructor */}
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500 font-bold text-slate-950">
                {course.instructor
                  .split(" ")
                  .map((word) => word[0])
                  .join("")
                  .slice(0, 2)}
              </div>

              <div>
                <p className="text-[10px] text-slate-500">
                  Course Instructor
                </p>

                <p className="text-sm font-semibold">
                  {course.instructor}
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-7 grid grid-cols-3 gap-3">
              <Stat
                icon={<Clock3 size={17} />}
                label="Duration"
                value={course.duration}
              />

              <Stat
                icon={<BookOpen size={17} />}
                label="Lessons"
                value={`${course.lessons}`}
              />

              <Stat
                icon={<Users size={17} />}
                label="Students"
                value={course.students}
              />
            </div>

            {/* Button */}
            <Link
              href={`/courses/${course.id}/learn`}
              className="mt-7 flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-4 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              {course.enrolled ? "Continue Learning" : "Start Learning"}
              <ChevronRight size={18} />
            </Link>
          </div>
        </div>

        {/* Course Information */}
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* What You Will Learn */}
          <div className="rounded-2xl border border-white/10 bg-[#080e20] p-6 lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-400">
                <Target size={20} />
              </div>

              <div>
                <h2 className="text-lg font-bold">
                  What You Will Learn
                </h2>

                <p className="text-xs text-slate-500">
                  Skills covered in this course
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <LearningPoint text="Understand core concepts and fundamentals" />
              <LearningPoint text="Build practical real-world projects" />
              <LearningPoint text="Learn industry best practices" />
              <LearningPoint text="Work with modern development tools" />
              <LearningPoint text="Solve practical coding problems" />
              <LearningPoint text="Prepare for technical interviews" />
            </div>
          </div>

          {/* Progress */}
          <div className="rounded-2xl border border-white/10 bg-[#080e20] p-6">
            <h2 className="text-lg font-bold">Your Progress</h2>

            {course.enrolled ? (
              <>
                <div className="mt-6 flex items-center justify-center">
                  <div className="relative flex h-36 w-36 items-center justify-center rounded-full border-[10px] border-slate-800">
                    <div
                      className="absolute inset-[-10px] rounded-full border-[10px] border-cyan-400"
                      style={{
                        clipPath: `inset(${100 - course.progress}% 0 0 0)`,
                      }}
                    />

                    <div className="text-center">
                      <p className="text-3xl font-bold">
                        {course.progress}%
                      </p>

                      <p className="text-[10px] text-slate-500">
                        Completed
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-center text-xs text-slate-500">
                  Keep going! You are making great progress.
                </p>
              </>
            ) : (
              <div className="mt-6 text-center">
                <Trophy
                  size={45}
                  className="mx-auto text-slate-700"
                />

                <p className="mt-4 text-sm font-semibold">
                  Start this course
                </p>

                <p className="mt-2 text-xs leading-5 text-slate-500">
                  Begin learning and track your progress here.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Course Curriculum */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-[#080e20] p-6 lg:p-8">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Curriculum
            </p>

            <h2 className="mt-2 text-2xl font-bold">
              Course Content
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              {course.lessons} lessons • {course.duration} total
            </p>
          </div>

          <div className="space-y-3">
            <Lesson
              number="01"
              title="Introduction and Fundamentals"
              duration="35 min"
            />

            <Lesson
              number="02"
              title="Core Concepts"
              duration="42 min"
            />

            <Lesson
              number="03"
              title="Practical Development"
              duration="48 min"
            />

            <Lesson
              number="04"
              title="Building a Real-World Project"
              duration="55 min"
            />

            <Lesson
              number="05"
              title="Advanced Concepts"
              duration="50 min"
            />

            <Lesson
              number="06"
              title="Final Project and Assessment"
              duration="60 min"
            />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-7 lg:p-9">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-400">
                <GraduationCap size={16} />
                KEEP LEARNING
              </div>

              <h2 className="mt-3 text-2xl font-bold">
                Ready to continue your learning?
              </h2>

              <p className="mt-2 text-sm text-slate-400">
                Continue the course and improve your skills step by step.
              </p>
            </div>

            <Link
              href={`/courses/${course.id}/learn`}
              className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 hover:bg-cyan-300"
            >
              {course.enrolled ? "Continue Learning" : "Start Learning"}
              <ChevronRight size={17} />
            </Link>
          </div>
        </div>

        <footer className="py-8 text-center text-[10px] text-slate-600">
          © 2026 LearnHub AI • Learn • Practice • Grow
        </footer>
      </div>
    </main>
  );
}

/* ---------------------------------------
   STAT
---------------------------------------- */

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
      <div className="flex items-center gap-2 text-cyan-400">
        {icon}

        <span className="text-[10px] text-slate-500">
          {label}
        </span>
      </div>

      <p className="mt-2 text-xs font-semibold">
        {value}
      </p>
    </div>
  );
}

/* ---------------------------------------
   LEARNING POINT
---------------------------------------- */

function LearningPoint({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircle2
        size={17}
        className="mt-0.5 shrink-0 text-cyan-400"
      />

      <p className="text-sm leading-6 text-slate-400">
        {text}
      </p>
    </div>
  );
}

/* ---------------------------------------
   LESSON
---------------------------------------- */

function Lesson({
  number,
  title,
  duration,
}: {
  number: string;
  title: string;
  duration: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4 transition hover:border-cyan-400/20 hover:bg-white/[0.04]">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-xs font-bold text-cyan-400">
        {number}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold">
          {title}
        </p>

        <div className="mt-1 flex items-center gap-2 text-[10px] text-slate-500">
          <PlayCircle size={12} />
          Video Lesson
        </div>
      </div>

      <div className="flex items-center gap-1 text-xs text-slate-500">
        <Clock3 size={13} />
        {duration}
      </div>
    </div>
  );
}