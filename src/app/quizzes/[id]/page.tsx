"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  FileQuestion,
  GraduationCap,
  RotateCcw,
  Trophy,
  XCircle,
} from "lucide-react";

type Quiz = {
  id: number;
  title: string;
  course: string;
  questions: number;
  duration: string;
  difficulty: string;
  status: string;
  score: number | null;
};

type Question = {
  question: string;
  options: string[];
  answer: string;
};

const quizzes: Quiz[] = [
  {
    id: 1,
    title: "React Fundamentals Quiz",
    course: "React & TypeScript",
    questions: 5,
    duration: "20 min",
    difficulty: "Intermediate",
    status: "Not Started",
    score: null,
  },
  {
    id: 2,
    title: "Spring Boot Basics Quiz",
    course: "Java Spring Boot",
    questions: 5,
    duration: "25 min",
    difficulty: "Intermediate",
    status: "In Progress",
    score: null,
  },
  {
    id: 3,
    title: "SQL & Database Quiz",
    course: "Database Management",
    questions: 5,
    duration: "20 min",
    difficulty: "Beginner",
    status: "Completed",
    score: 92,
  },
  {
    id: 4,
    title: "UI/UX Principles Quiz",
    course: "UI/UX Design",
    questions: 5,
    duration: "15 min",
    difficulty: "Beginner",
    status: "Completed",
    score: 88,
  },
  {
    id: 5,
    title: "Python Programming Quiz",
    course: "Python Programming",
    questions: 5,
    duration: "30 min",
    difficulty: "Beginner",
    status: "Not Started",
    score: null,
  },
  {
    id: 6,
    title: "Machine Learning Basics",
    course: "AI & Machine Learning",
    questions: 5,
    duration: "25 min",
    difficulty: "Advanced",
    status: "Not Started",
    score: null,
  },
];

const questions: Question[] = [
  {
    question: "What is React mainly used for?",
    options: [
      "Building user interfaces",
      "Managing databases",
      "Creating operating systems",
      "Designing hardware",
    ],
    answer: "Building user interfaces",
  },
  {
    question: "Which language is commonly used with React?",
    options: [
      "JavaScript",
      "SQL",
      "C",
      "Assembly",
    ],
    answer: "JavaScript",
  },
  {
    question: "What is a React component?",
    options: [
      "A reusable UI building block",
      "A database table",
      "A server",
      "A CSS file only",
    ],
    answer: "A reusable UI building block",
  },
  {
    question: "Which hook is commonly used to manage state?",
    options: [
      "useState",
      "useDatabase",
      "useServer",
      "useHTML",
    ],
    answer: "useState",
  },
  {
    question: "Which hook is used for side effects?",
    options: [
      "useEffect",
      "useStyle",
      "usePage",
      "useDatabase",
    ],
    answer: "useEffect",
  },
];

export default function QuizDetailsPage() {
  const params = useParams();

  const quizId = Number(params.id);

  const quiz = quizzes.find((item) => item.id === quizId);

  const [answers, setAnswers] = useState<Record<number, string>>({});

  const [submitted, setSubmitted] = useState(false);

  const [score, setScore] = useState(0);

  if (!quiz) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#020617] px-5 text-white">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-red-400/10 text-red-400">
            <FileQuestion size={30} />
          </div>

          <h1 className="mt-5 text-3xl font-bold">
            Quiz Not Found
          </h1>

          <p className="mt-3 text-sm text-slate-500">
            The quiz you are looking for does not exist.
          </p>

          <Link
            href="/quizzes"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950"
          >
            <ArrowLeft size={16} />
            Back to Quizzes
          </Link>
        </div>
      </main>
    );
  }

  function selectAnswer(questionIndex: number, answer: string) {
    if (submitted) {
      return;
    }

    setAnswers((previous) => ({
      ...previous,
      [questionIndex]: answer,
    }));
  }

  function submitQuiz() {
    let correctAnswers = 0;

    questions.forEach((question, index) => {
      if (answers[index] === question.answer) {
        correctAnswers++;
      }
    });

    const calculatedScore = Math.round(
      (correctAnswers / questions.length) * 100
    );

    setScore(calculatedScore);

    setSubmitted(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function restartQuiz() {
    setAnswers({});
    setScore(0);
    setSubmitted(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const answeredCount = Object.keys(answers).length;

  return (
    <main className="min-h-screen bg-[#020617] text-white">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="sticky top-0 z-30 flex h-[72px] items-center justify-between border-b border-white/10 bg-[#020617]/95 px-5 backdrop-blur-xl lg:px-10">
        <div className="flex items-center gap-4">
          <Link
            href="/quizzes"
            className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-xs font-semibold text-slate-300 transition hover:bg-white/5 hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Quizzes
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
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-400 font-bold text-slate-950">
            J
          </div>

          <div className="hidden md:block">
            <p className="text-xs font-semibold">
              Jeyabharathi
            </p>

            <p className="text-[10px] text-slate-500">
              Student
            </p>
          </div>
        </div>
      </header>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="mx-auto max-w-5xl px-5 py-8 lg:px-8 lg:py-10">
        {/* =====================================================
            QUIZ HEADER
        ===================================================== */}

        <section className="rounded-3xl border border-white/10 bg-[#080e20] p-6 lg:p-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                {quiz.course}
              </p>

              <h1 className="mt-2 text-2xl font-bold md:text-3xl">
                {quiz.title}
              </h1>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Test your knowledge by answering the questions below.
              </p>
            </div>

            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
              <FileQuestion size={32} />
            </div>
          </div>

          {/* Stats */}

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            <InfoCard
              icon={<FileQuestion size={17} />}
              label="Questions"
              value={`${questions.length}`}
            />

            <InfoCard
              icon={<Clock size={17} />}
              label="Duration"
              value={quiz.duration}
            />

            <InfoCard
              icon={<Trophy size={17} />}
              label="Difficulty"
              value={quiz.difficulty}
            />
          </div>
        </section>

        {/* =====================================================
            RESULT
        ===================================================== */}

        {submitted && (
          <section className="mt-6 rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6 lg:p-8">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-400">
                <Trophy size={32} />
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-wider text-cyan-400">
                Quiz Completed
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Your Score
              </h2>

              <p className="mt-3 text-5xl font-black text-cyan-400">
                {score}%
              </p>

              <p className="mt-3 text-sm text-slate-500">
                You answered{" "}
                {
                  questions.filter(
                    (question, index) =>
                      answers[index] === question.answer
                  ).length
                }{" "}
                out of {questions.length} questions correctly.
              </p>

              <button
                type="button"
                onClick={restartQuiz}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/20"
              >
                <RotateCcw size={16} />
                Try Again
              </button>
            </div>
          </section>
        )}

        {/* =====================================================
            PROGRESS
        ===================================================== */}

        {!submitted && (
          <section className="mt-6 rounded-2xl border border-white/10 bg-[#080e20] p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold">
                  Quiz Progress
                </p>

                <p className="mt-1 text-[11px] text-slate-500">
                  {answeredCount} of {questions.length} answered
                </p>
              </div>

              <span className="text-sm font-bold text-cyan-400">
                {Math.round(
                  (answeredCount / questions.length) * 100
                )}
                %
              </span>
            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-cyan-400 transition-all duration-300"
                style={{
                  width: `${
                    (answeredCount / questions.length) * 100
                  }%`,
                }}
              />
            </div>
          </section>
        )}

        {/* =====================================================
            QUESTIONS
        ===================================================== */}

        <section className="mt-8">
          <div className="mb-5">
            <p className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Questions
            </p>

            <h2 className="mt-2 text-xl font-bold">
              Answer all questions
            </h2>
          </div>

          <div className="space-y-5">
            {questions.map((item, index) => {
              const selectedAnswer = answers[index];

              const isCorrect =
                selectedAnswer === item.answer;

              return (
                <div
                  key={index}
                  className={`rounded-2xl border bg-[#080e20] p-5 lg:p-6 ${
                    submitted
                      ? isCorrect
                        ? "border-emerald-400/30"
                        : "border-red-400/30"
                      : "border-white/10"
                  }`}
                >
                  {/* Question */}

                  <div className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-xs font-bold text-cyan-400">
                      {index + 1}
                    </div>

                    <div className="flex-1">
                      <h3 className="text-sm font-bold leading-6 md:text-base">
                        {item.question}
                      </h3>

                      {/* Options */}

                      <div className="mt-5 space-y-3">
                        {item.options.map((option, optionIndex) => {
                          const selected =
                            selectedAnswer === option;

                          const correct =
                            submitted &&
                            option === item.answer;

                          const wrong =
                            submitted &&
                            selected &&
                            option !== item.answer;

                          return (
                            <button
                              key={option}
                              type="button"
                              disabled={submitted}
                              onClick={() =>
                                selectAnswer(index, option)
                              }
                              className={`flex w-full items-center gap-3 rounded-xl border p-4 text-left transition ${
                                correct
                                  ? "border-emerald-400/40 bg-emerald-400/10"
                                  : wrong
                                    ? "border-red-400/40 bg-red-400/10"
                                    : selected
                                      ? "border-cyan-400/40 bg-cyan-400/10"
                                      : "border-white/10 bg-white/[0.02] hover:border-cyan-400/30 hover:bg-cyan-400/5"
                              }`}
                            >
                              <div
                                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                                  correct
                                    ? "bg-emerald-400/20 text-emerald-400"
                                    : wrong
                                      ? "bg-red-400/20 text-red-400"
                                      : selected
                                        ? "bg-cyan-400 text-slate-950"
                                        : "bg-white/5 text-slate-500"
                                }`}
                              >
                                {String.fromCharCode(
                                  65 + optionIndex
                                )}
                              </div>

                              <span className="flex-1 text-xs text-slate-300 md:text-sm">
                                {option}
                              </span>

                              {correct && (
                                <CheckCircle2
                                  size={18}
                                  className="shrink-0 text-emerald-400"
                                />
                              )}

                              {wrong && (
                                <XCircle
                                  size={18}
                                  className="shrink-0 text-red-400"
                                />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Answer Explanation */}

                      {submitted && (
                        <div
                          className={`mt-4 rounded-xl p-4 ${
                            isCorrect
                              ? "bg-emerald-400/5"
                              : "bg-red-400/5"
                          }`}
                        >
                          <p
                            className={`text-xs font-bold ${
                              isCorrect
                                ? "text-emerald-400"
                                : "text-red-400"
                            }`}
                          >
                            {isCorrect
                              ? "Correct Answer"
                              : "Correct Answer"}
                          </p>

                          <p className="mt-1 text-xs text-slate-400">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =====================================================
            SUBMIT
        ===================================================== */}

        {!submitted && (
          <section className="mt-8 rounded-2xl border border-white/10 bg-[#080e20] p-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-bold">
                  Ready to submit?
                </h2>

                <p className="mt-1 text-xs text-slate-500">
                  Make sure you have answered all questions.
                </p>
              </div>

              <button
                type="button"
                onClick={submitQuiz}
                className="flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
              >
                Submit Quiz
                <ArrowRight size={17} />
              </button>
            </div>
          </section>
        )}

        {/* =====================================================
            AFTER RESULT
        ===================================================== */}

        {submitted && (
          <section className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/quizzes"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Back to Quizzes
              <ArrowRight size={17} />
            </Link>

            <button
              type="button"
              onClick={restartQuiz}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-bold text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <RotateCcw size={17} />
              Try Again
            </button>
          </section>
        )}

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <footer className="py-8 text-center text-[10px] text-slate-600">
          © 2026 LearnHub AI • Learn • Practice • Grow
        </footer>
      </div>
    </main>
  );
}

/* =========================================================
   INFO CARD
========================================================= */

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
      <div className="flex items-center gap-2 text-cyan-400">
        {icon}

        <span className="text-[10px] text-slate-500">
          {label}
        </span>
      </div>

      <p className="mt-2 text-sm font-bold">
        {value}
      </p>
    </div>
  );
}