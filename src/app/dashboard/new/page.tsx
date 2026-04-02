"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Send, PenTool, LayoutTemplate, Settings2 } from "lucide-react";

export default function NewReportForm() {
  const [step, setStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    universityName: "",
    department: "",
    academicStage: "",
    groupSection: "",
    professorName: "",
    reportTitle: "",
    topicDesc: "",
    includeImages: true,
    pageLength: 5,
    formatType: "PDF",
    templateId: "classic-1"
  });

  const updateForm = (key: keyof typeof formData, value: any) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => setStep(s => Math.min(3, s + 1));
  const prevStep = () => setStep(s => Math.max(1, s - 1));

  const handleGenerate = async () => {
    setIsGenerating(true);
    // محاكاة إرسال البيانات للـ API
    setTimeout(() => {
      setIsGenerating(false);
      window.location.href = "/dashboard";
    }, 2500);
  };

  return (
    <div className="max-w-[800px] mx-auto py-10 space-y-16">
      
      {/* Asymmetrical Header and Step Tracker */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        <div className="max-w-md">
          <p className="text-[var(--color-primary)] font-bold text-sm tracking-widest uppercase mb-4">إنشاء جديد</p>
          <h1 className="text-[3.5rem] leading-[1.1] font-display font-bold text-[var(--color-primary)] mb-4">وثيقة<br/>أكاديمية</h1>
        </div>
        
        {/* Layered step tracker */}
        <div className="flex items-center gap-4 bg-[var(--color-surface-container-lowest)] p-3 rounded-full shadow-ambient font-body text-sm font-bold">
          {[1, 2, 3].map(num => (
            <div key={num} className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${step === num ? "bg-[var(--color-primary)] text-white" : step > num ? "bg-[var(--color-surface-container-low)] text-[var(--color-on-surface)]" : "text-[var(--color-outline-variant)]"}`}>
              {num}
            </div>
          ))}
        </div>
      </div>

      {/* Main Form Container - No lines, relies on shadow-ambient and background shift */}
      <div className="bg-[var(--color-surface-container-lowest)] rounded-xl shadow-ambient p-10 font-body relative overflow-hidden min-h-[500px]">
        {/* Subtle glass effect accent over everything */}
        <div className="absolute top-0 right-0 w-full h-1 bg-[var(--background-signature-gradient)]"></div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* STEP 1: Metadata */}
            {step === 1 && (
              <div className="space-y-10">
                <div className="border-b-[4px] border-[var(--color-surface)] pb-6 mb-8 flex items-center gap-3">
                  <PenTool className="text-[var(--color-primary)] w-6 h-6" />
                  <h2 className="text-2xl font-display font-bold text-[var(--color-primary)]">بيانات البحث</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  <div>
                    <label className="block text-sm font-bold mb-3 text-[var(--color-on-surface)]">عنوان الوثيقة</label>
                    <input type="text" value={formData.reportTitle} onChange={e => updateForm("reportTitle", e.target.value)} className="w-full bg-[var(--color-surface-container-highest)] rounded-md py-4 px-5 font-bold text-lg" placeholder="مثال: ديناميكية الموائع" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-3 text-[var(--color-on-surface)]">اسم الباحث</label>
                    <input type="text" value={formData.studentName} onChange={e => updateForm("studentName", e.target.value)} className="w-full bg-[var(--color-surface-container-highest)] rounded-md py-4 px-5" placeholder="الاسم الكامل" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-bold mb-3 text-[var(--color-on-surface)]">نطاق التوجيه للذكاء الاصطناعي</label>
                    <textarea value={formData.topicDesc} onChange={e => updateForm("topicDesc", e.target.value)} rows={4} className="w-full bg-[var(--color-surface-container-highest)] rounded-md py-4 px-5 resize-none leading-relaxed" placeholder="صف بالضبط ما يجب أن تتضمنه هذه الوثيقة. اذكر أهم المحاور، النظريات، والمراجع..."></textarea>
                  </div>
                </div>
              </div>
            )}

            {/* STEP 2: University Metadata */}
            {step === 2 && (
              <div className="space-y-10">
                <div className="border-b-[4px] border-[var(--color-surface)] pb-6 mb-8 flex items-center gap-3">
                  <LayoutTemplate className="text-[var(--color-primary)] w-6 h-6" />
                  <h2 className="text-2xl font-display font-bold text-[var(--color-primary)]">التوثيق الأكاديمي</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  <div>
                    <label className="block text-sm font-bold mb-3 text-[var(--color-on-surface)]">الجهة المانحة / الجامعة</label>
                    <input type="text" value={formData.universityName} onChange={e => updateForm("universityName", e.target.value)} className="w-full bg-[var(--color-surface-container-highest)] rounded-md py-4 px-5" placeholder="اسم الجامعة" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-3 text-[var(--color-on-surface)]">القسم الأكاديمي</label>
                    <input type="text" value={formData.department} onChange={e => updateForm("department", e.target.value)} className="w-full bg-[var(--color-surface-container-highest)] rounded-md py-4 px-5" placeholder="اسم الكلية والقسم" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-3 text-[var(--color-on-surface)]">المرحلة الدراسية</label>
                    <input type="text" value={formData.academicStage} onChange={e => updateForm("academicStage", e.target.value)} className="w-full bg-[var(--color-surface-container-highest)] rounded-md py-4 px-5" placeholder="السنة الدراسية" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-3 text-[var(--color-on-surface)]">أستاذ المادة</label>
                    <input type="text" value={formData.professorName} onChange={e => updateForm("professorName", e.target.value)} className="w-full bg-[var(--color-surface-container-highest)] rounded-md py-4 px-5" placeholder="اسم الدكتور المشرف" />
                  </div>
                </div>
              </div>
            )}

            {/* STEP 3: Outputs */}
            {step === 3 && (
              <div className="space-y-10">
                <div className="border-b-[4px] border-[var(--color-surface)] pb-6 mb-8 flex items-center gap-3">
                  <Settings2 className="text-[var(--color-primary)] w-6 h-6" />
                  <h2 className="text-2xl font-display font-bold text-[var(--color-primary)]">محددات التصدير</h2>
                </div>

                <div className="space-y-12">
                  <div>
                    <label className="block text-sm font-bold mb-5 text-[var(--color-on-surface)]">المخرجات</label>
                    <div className="flex gap-4">
                      {["PDF", "WORD", "PPT"].map((type) => (
                        <button 
                          key={type}
                          onClick={() => updateForm("formatType", type)}
                          className={`flex-1 py-5 rounded-md font-bold transition-all ${formData.formatType === type ? "bg-[var(--color-primary)] text-white shadow-ambient" : "bg-[var(--color-surface-container-highest)] opacity-60 hover:opacity-100"}`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-5">
                      <label className="block text-sm font-bold text-[var(--color-on-surface)]">حجم الوثيقة (صفحات)</label>
                      <span className="text-2xl font-display font-bold text-[var(--color-primary)]">{formData.pageLength}</span>
                    </div>
                    <input type="range" min="1" max="50" value={formData.pageLength} onChange={e => updateForm("pageLength", parseInt(e.target.value))} className="w-full h-3 bg-[var(--color-surface-container-low)] rounded-full appearance-none cursor-pointer" />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Footer Actions */}
        <div className="mt-16 flex justify-between items-center">
          <button 
            onClick={prevStep}
            disabled={step === 1}
            className={`flex items-center gap-2 px-6 py-3.5 rounded-md font-bold transition-all ${step === 1 ? "opacity-0 pointer-events-none" : "text-[var(--color-outline-variant)] hover:text-[var(--color-on-surface)] hover:bg-[var(--color-surface-container-low)]"}`}
          >
            <ArrowRight className="w-5 h-5" /> العودة
          </button>
          
          {step < 3 ? (
            <button 
              onClick={nextStep}
              className="flex items-center gap-2 px-8 py-3.5 rounded-md font-bold text-[var(--color-primary)] bg-[var(--color-surface)] hover:shadow-ambient transition-all"
            >
              التالي <ArrowLeft className="w-5 h-5" />
            </button>
          ) : (
            <button 
              onClick={handleGenerate}
              disabled={isGenerating}
              className="flex items-center gap-2 px-10 py-4 rounded-md font-bold bg-[var(--background-signature-gradient)] text-white shadow-ambient hover:opacity-90 transition-opacity disabled:opacity-70"
            >
              {isGenerating ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  جاري التوليد...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" /> توليد الوثيقة
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
