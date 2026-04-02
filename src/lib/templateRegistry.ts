export interface ReportTemplate {
  id: string;
  name: string;
  category: "طبي" | "هندسي" | "إنسانيات" | "علوم" | "قانون وإدارة";
  description: string;
  aiPromptModifier: string;
}

const baseCategories = ["طبي", "هندسي", "إنسانيات", "علوم", "قانون وإدارة"] as const;
const styles = [
  "بحث تأصيلي", "دراسة حالة", "مراجعة أدبيات", "تحليل نقدي", 
  "تقرير مختبري", "مشروع تطبيقي", "بحث وصفي", "بحث تاريخي"
];
const variations = ["كلاسيكي (A4)", "حديث (Minimal)", "معاصر (Visual)", "معتمد (Standard)", "أوروبي (Oxford)"];

// Programmatically scale to 200 Professional Templates dynamically
export const templateRegistry: ReportTemplate[] = [];

let counter = 1;

baseCategories.forEach((category) => {
  styles.forEach((style) => {
    variations.forEach((variation) => {
      templateRegistry.push({
        id: `tpl-${counter}`,
        name: `${style} - طراز ${variation}`,
        category: category,
        description: `نموذج هيكلي مخصص لبناء ${style} خاضع لمعايير الـ (${category}) بأسلوب عرض ${variation}.`,
        aiPromptModifier: `أرجو هيكلة مخرجات التقرير بناءً على المتطلبات الأكاديمية لـ (${style}). استخدم لغة مهنية متخصصة تناسب مجال الـ (${category}). الأسلوب الشكلي ينطوي على توجه ${variation}.`
      });
      counter++;
    });
  });
});

export const getTemplateById = (id: string) => templateRegistry.find(t => t.id === id);
