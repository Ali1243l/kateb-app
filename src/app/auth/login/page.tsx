"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("البيانات الأكاديمية غير متطابقة، يرجى المحاولة مجدداً.");
      setLoading(false);
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-md"
      >
        <div className="bg-[var(--color-surface-container-lowest)] rounded-3xl p-10 shadow-ambient">
          {/* Asymmetrical Header Styling */}
          <div className="mb-10 text-right font-display">
            <h1 className="text-[2.5rem] leading-[1.1] font-bold text-[var(--color-primary)] mb-3">
              رصيدك<br />الأكاديمي
            </h1>
            <p className="text-sm font-body text-[var(--color-on-surface)] opacity-70">
              ادخل بياناتك المعتمدة للوصول للأرشيف
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 font-body">
            {error && (
              <div className="bg-[#fff1f0] text-[#cf1322] px-4 py-3 rounded-md text-sm border-l-4 border-[#cf1322]">
                {error}
              </div>
            )}

            <div className="space-y-5">
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

            {/* The Modern Slab Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[var(--background-signature-gradient)] text-white font-bold py-3.5 px-4 rounded-md shadow-ambient hover:opacity-90 transition-opacity flex items-center justify-between group disabled:opacity-50"
            >
              <span>دخول للأرشيف</span>
              {loading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              )}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-[var(--color-surface-container-highest)] text-center text-sm font-body">
            غير مُسجل في النظام؟{" "}
            <Link href="/auth/register" className="text-[var(--color-primary)] font-bold hover:underline underline-offset-4">
              فتح سجل جديد
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
