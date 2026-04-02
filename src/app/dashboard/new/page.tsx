"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft, Send, Sparkles, BookOpen, Layers, Settings2, Image as ImageIcon } from "lucide-react";

export default function NewReportForm() {
  const [step, setStep] = useState(1);
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

  const nextStep = () => setStep(s => Math.min(4, s + 1));
  const prevStep = () => setStep(s => Math.max(1, s - 1));

  const steps = [
    { num: 1, title: "المعلومات الأساسية", icon: BookOpen },
    { num: 2, title: "موضوع التقرير", icon: Layers },
    { num: 3, title: "إعدادات التنسيق", icon: Settings2 },
    { num: 4, title: "القوالب والمراجعة", icon: Sparkles }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-3">مولد التقارير الذكي</h1>
        <p className="text-muted-foreground">أدخل تفاصيل التقرير وسيقوم الذكاء الاصطناعي بإنشائه بتنسيق أكاديمي احترافي</p>
      </div>

      {/* Progress Tracker */}
      <div className="flex justify-between items-center mb-12 relative before:absolute before:top-1/2 before:w-full before:h-1 before:bg-white/10 before:-z-10 before:rounded-full">
        <div className="absolute top-1/2 h-1 bg-gradient-to-r from-blue-600 to-purple-600 -z-10 transition-all duration-500 rounded-full" style={{ width: `${((step - 1) / 3) * 100}%` }} />
        
        {steps.map((s) => (
          <div key={s.num} className="flex flex-col items-center gap-2">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 shadow-lg ${
              step >= s.num ? "bg-gradient-to-tr from-blue-600 to-purple-600 text-white scale-110" : "bg-black/10 dark:bg-white/10 text-foreground/50"
            }`}>
              <s.icon className="w-5 h-5" />
            </div>
            <span className={`text-sm font-medium ${step >= s.num ? "text-foreground" : "text-foreground/50"} hidden md:block`}>{s.title}</span>
          </div>
        ))}
      </div>

      <div className="bg-white/5 dark:bg-black/20 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.3 }}
          >
            {/* Step 1: Basic Info */}
            {step === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">اسم الطالب</label>
                  <input type="text" value={formData.studentName} onChange={e => updateForm("studentName", e.target.value)} className="w-full bg-black/5 dark:bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:ring-2 focus:ring-purple-500 outline-none" placeholder="الاسم الكامل" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">اسم الجامعة</label>
                  <input type="text" value={formData.universityName} onChange={e => updateForm("universityName", e.target.value)} className="w-full bg-black/5 dark:bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:ring-2 focus:ring-purple-500 outline-none" placeholder="جامعة بغداد" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">الكلية / القسم</label>
                  <input type="text" value={formData.department} onChange={e => updateForm("department", e.target.value)} className="w-full bg-black/5 dark:bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:ring-2 focus:ring-purple-500 outline-none" placeholder="كلية الهندسة / قسم الحاسبات" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">المرحلة الأكاديمية</label>
                  <input type="text" value={formData.academicStage} onChange={e => updateForm("academicStage", e.target.value)} className="w-full bg-black/5 dark:bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:ring-2 focus:ring-purple-500 outline-none" placeholder="المرحلة الثانية" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">الكروب / الشعبة</label>
                  <input type="text" value={formData.groupSection} onChange={e => updateForm("groupSection", e.target.value)} className="w-full bg-black/5 dark:bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:ring-2 focus:ring-purple-500 outline-none" placeholder="A1" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">اسم الدكتور</label>
                  <input type="text" value={formData.professorName} onChange={e => updateForm("professorName", e.target.value)} className="w-full bg-black/5 dark:bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:ring-2 focus:ring-purple-500 outline-none" placeholder="د. علي أحمد" />
                </div>
              </div>
            )}

            {/* Step 2: Topic Details */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">عنوان أو موضوع التقرير</label>
                  <input type="text" value={formData.reportTitle} onChange={e => updateForm("reportTitle", e.target.value)} className="w-full bg-black/5 dark:bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:ring-2 focus:ring-blue-500 outline-none text-lg font-bold placeholder:font-normal" placeholder="مثال: تأثير الذكاء الاصطناعي في الطب" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">وصف دقيق لما يجب أن يحتويه التقرير</label>
                  <textarea value={formData.topicDesc} onChange={e => updateForm("topicDesc", e.target.value)} rows={6} className="w-full bg-black/5 dark:bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:ring-2 focus:ring-blue-500 outline-none resize-none" placeholder="اكتب وصفاً مفصلاً يوجه الذكاء الاصطناعي. اذكر أهم المحاور، المراجع المطلوبة، أو أي أرقام وإحصائيات ترغب بتضمينها..."></textarea>
                </div>
              </div>
            )}

            {/* Step 3: Settings */}
            {step === 3 && (
              <div className="space-y-8">
                <div>
                  <label className="block text-lg font-semibold mb-4 text-foreground">نوع التقرير وصيغة الإخراج</label>
                  <div className="flex gap-4">
                    {["PDF", "WORD", "PPT"].map((type) => (
                      <button 
                        key={type}
                        onClick={() => updateForm("formatType", type)}
                        className={`flex-1 py-4 rounded-2xl border-2 transition-all font-bold ${formData.formatType === type ? "border-blue-500 bg-blue-500/10 text-blue-500" : "border-white/5 bg-white/5 text-foreground/70 outline-none hover:bg-white/10"}`}
                      >
                        {type === "PPT" ? "عرض تقديمي (PPT)" : `تقرير أكاديمي (${type})`}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-lg font-semibold mb-4 text-foreground">طول التقرير (عدد الصفحات/الشرائح)</label>
                    <div className="flex items-center gap-4">
                      <input type="range" min="1" max="50" value={formData.pageLength} onChange={e => updateForm("pageLength", parseInt(e.target.value))} className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-500" />
                      <span className="text-2xl font-bold text-blue-500 bg-blue-500/10 px-4 py-2 rounded-xl min-w-[70px] text-center">{formData.pageLength}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-lg font-semibold mb-4 text-foreground">تضمين الوسائط المتعددة والصور</label>
                    <button 
                      onClick={() => updateForm("includeImages", !formData.includeImages)}
                      className={`w-full py-4 rounded-xl flex items-center justify-center gap-3 transition-colors ${formData.includeImages ? "bg-green-500/20 text-green-500 font-bold" : "bg-white/5 text-foreground/50"}`}
                    >
                      <ImageIcon className="w-5 h-5" />
                      {formData.includeImages ? "يحتوي على صور توضيحية ومخططات" : "بدون صور (نص فقط)"}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Template & Finalize */}
            {step === 4 && (
              <div className="space-y-8 text-center">
                <div className="w-24 h-24 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-full mx-auto flex items-center justify-center shadow-xl animate-bounce">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold">جاهز لإنشاء التقرير باستخدام AI السحري!</h2>
                <p className="text-muted-foreground w-3/4 mx-auto leading-relaxed">
                  سيطبق التطبيق الآن خوارزمية الذكاء الاصطناعي لاختيار الأنسب من بين 200 قالب استناداً إلى الموضوع (Tags matching). سيتم جلب النصوص باللغة العربية الفصحى الأكاديمية وبناء المستندات برمجياً بصيغة {formData.formatType}.
                </p>
                <div className="bg-black/20 dark:bg-white/5 p-6 rounded-2xl w-full text-right">
                  <h3 className="font-bold text-blue-500 mb-2">ملخص ما سيتم إنشاؤه:</h3>
                  <ul className="list-disc list-inside text-foreground/80 space-y-2">
                    <li>العنوان: <span className="font-semibold text-foreground">{formData.reportTitle || "بدون عنوان"}</span></li>
                    <li>المعلومات: يتم إضافة <span className="text-foreground font-semibold">{formData.studentName}</span> و <span className="text-foreground font-semibold">{formData.professorName}</span> لصفحة الغلاف الأوتوماتيكية.</li>
                    <li>الطول والتنسيق: <span className="text-foreground font-semibold">{formData.pageLength}</span> صفحات/شرائح بصيغة <span className="text-foreground font-semibold">{formData.formatType}</span> ({formData.includeImages ? "مدعوم بالصور" : "بدون صور"}).</li>
                  </ul>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Form Controls */}
        <div className="flex justify-between items-center mt-10 pt-6 border-t border-white/10">
          <button 
            onClick={prevStep}
            disabled={step === 1}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${step === 1 ? "opacity-0 pointer-events-none" : "bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 text-foreground"}`}
          >
            <ChevronRight className="w-5 h-5" /> رجوع
          </button>
          
          {step < 4 ? (
            <button 
              onClick={nextStep}
              className="flex items-center gap-2 px-8 py-3 rounded-xl font-semibold bg-white text-black hover:bg-gray-200 transition-all shadow-lg"
            >
              الخطوة التالية <ChevronLeft className="w-5 h-5" />
            </button>
          ) : (
            <button 
              onClick={() => alert("سيتم الآن نداء API الذكاء الاصطناعي")}
              className="flex items-center gap-2 px-8 py-3 rounded-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
            >
              <Send className="w-5 h-5" /> إنشاء وتوليد التقرير
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
