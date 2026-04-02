import Link from "next/link";
import { ArrowLeft, BookOpen, Layers, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-body bg-[var(--color-surface)]">
      {/* Header */}
      <header className="flex justify-between items-center py-6 px-6 md:px-10 border-b-[4px] border-[var(--color-surface-container-low)]">
        <div className="flex items-center gap-3">
          <BookOpen className="text-[var(--color-primary)] w-8 h-8" />
          <span className="font-display font-bold text-2xl text-[var(--color-primary)] tracking-tight">الأرشيف الرقمي</span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/auth/login" className="text-[var(--color-primary)] font-bold hover:underline underline-offset-4 hidden sm:block">
            تسجيل الدخول
          </Link>
          <Link href="/auth/register" className="bg-[var(--background-signature-gradient)] text-white px-6 py-2.5 rounded-md font-bold shadow-ambient transition-all hover:opacity-90">
            حساب جديد
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-20 pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-[var(--color-surface-container-lowest)] text-[var(--color-primary)] font-bold px-4 py-1.5 rounded-full text-sm mb-8 shadow-sm">
            النسخة التجريبية الأولى V1.0
          </div>
          <h1 className="text-[3.5rem] md:text-[5.5rem] leading-[1.05] font-display font-bold text-[var(--color-primary)] mb-8 tracking-tight">
            منصة متكاملة <br /> للتوثيق الأكاديمي
          </h1>
          <p className="text-xl md:text-2xl text-[var(--color-on-surface)] opacity-70 mb-12 max-w-2xl mx-auto leading-relaxed">
            أنشئ تقاريرك الجامعية وعروضك التقديمية بضغطة زر وبطابع أكاديمي مهني يعتمد على أحدث تقنيات الذكاء الاصطناعي.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/dashboard" 
              className="group flex items-center justify-center gap-3 bg-[var(--background-signature-gradient)] text-white text-lg font-bold px-10 py-5 rounded-md shadow-ambient hover:opacity-95 transition-all w-full sm:w-auto"
            >
              <span>البدء بالإنشاء الآن</span>
              <ArrowLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Feature Highlights - Embedded below Hero */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-32 max-w-6xl mx-auto w-full text-right">
          {[
            { title: "هيكلة معتمدة", icon: Layers, desc: "قوالب مصممة خصيصاً لتطابق المعايير الأكاديمية الصارمة المعمول بها في الجامعات العالمية والمحلية المحيطة." },
            { title: "الذكاء التوليدي", icon: BookOpen, desc: "خوارزميات مخصصة تصيغ بحوثك باللغة العربية الفصحى بدقة متناهية وحيادية علمية غير مسبوقة للصياغة." },
            { title: "حماية الخصوصية", icon: ShieldCheck, desc: "جميع وثائقك وملفاتك تُحفظ في أرشيفك وتاريخك الخاص بشكل آمن ومحمي بالكامل دون مشاركتها لأحد." }
          ].map((feature, idx) => (
            <div key={idx} className="bg-[var(--color-surface-container-lowest)] p-10 rounded-xl shadow-ambient">
              <feature.icon className="w-10 h-10 text-[var(--color-primary)] mb-6" />
              <h3 className="text-2xl font-display font-bold text-[var(--color-primary)] mb-3">{feature.title}</h3>
              <p className="text-[var(--color-on-surface)] opacity-70 leading-relaxed lg:text-lg">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
