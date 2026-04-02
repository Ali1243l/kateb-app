"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    setTimeout(() => {
      setLoading(false);
      router.push("/auth/login?registered=true");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md"
      >
        <div className="bg-[var(--color-surface-container-lowest)] rounded-3xl p-10 shadow-ambient">
          <div className="mb-10 text-right font-display">
            <h1 className="text-[2.5rem] leading-[1.1] font-bold text-[var(--color-primary)] mb-3">
              فتح سجل<br />جديـد
            </h1>
            <p className="text-sm font-body text-[var(--color-on-surface)] opacity-70">
              قم بإدخال بيناتك لاعتمادك في أرشيف التقارير
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 font-body">
            {error && (
              <div className="bg-[#fff1f0] text-[#cf1322] px-4 py-3 rounded-md text-sm border-l-4 border-[#cf1322]">
                {error}
              </div>
            )}

            <div className="space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-2 text-[var(--color-on-surface)]">
                  الاسم الرباعي
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-[var(--color-surface-container-highest)] rounded-md py-3 px-4 focus:ring-2 focus:ring-[var(--color-primary)]"
                  placeholder="يُكتب كما في الوثائق الرسمية"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-[var(--color-on-surface)]">
                  البريد الجامعي
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  dir="ltr"
                  className="w-full bg-[var(--color-surface-container-highest)] rounded-md py-3 px-4 text-left placeholder:text-right"
                  placeholder="name@university.edu"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2 text-[var(--color-on-surface)]">
                  الرمز السري
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  dir="ltr"
                  className="w-full bg-[var(--color-surface-container-highest)] rounded-md py-3 px-4 text-left placeholder:text-right"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-4 bg-[var(--background-signature-gradient)] text-white font-bold py-3.5 px-4 rounded-md shadow-ambient hover:opacity-90 transition-opacity flex items-center justify-between group disabled:opacity-50"
            >
              <span>تسجيل واعتماد</span>
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-[var(--color-surface-container-highest)] text-center text-sm font-body">
            مسجل مسبقاً؟{" "}
            <Link href="/auth/login" className="text-[var(--color-primary)] font-bold hover:underline underline-offset-4">
              العودة للدخول
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
