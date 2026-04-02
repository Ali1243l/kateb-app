import { FileText, Download, Edit2 } from "lucide-react";

export default function ReportsHistoryPage() {
  const allReports: any[] = []; // Empty for now

  return (
    <div className="space-y-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between font-display gap-6">
        <div>
          <h1 className="text-[3.5rem] leading-[1.1] font-bold text-[var(--color-primary)] mb-2 tracking-tight">سجل التقارير</h1>
          <p className="text-lg text-[var(--color-on-surface)] opacity-70 font-body">
            الأرشيف الكامل لجميع وثائقك الأكاديمية المصدرة والمحفوظة.
          </p>
        </div>
      </div>

      <div className="bg-[var(--color-surface-container-lowest)] rounded-xl shadow-ambient overflow-hidden py-8 min-h-[400px]">
        {allReports.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full pt-20 pb-10 text-center opacity-60">
            <FileText className="w-16 h-16 text-[var(--color-outline-variant)] mb-4" />
            <h3 className="text-2xl font-bold font-display text-[var(--color-on-surface)] mb-2">الأرشيف فارغ</h3>
            <p className="font-body text-lg">لا توجد تقارير مسجلة حتى الآن. ابدأ بإنشاء تقريرك الأول!</p>
          </div>
        ) : (
          <table className="w-full text-right font-body">
            <thead>
              <tr className="text-[var(--color-on-surface)] opacity-50 text-sm tracking-wide uppercase">
                <th className="px-6 py-4 font-bold w-1/2">العنوان الدراسي</th>
                <th className="px-6 py-4 font-bold">تاريخ الإصدار</th>
                <th className="px-6 py-4 font-bold">الحالة</th>
              </tr>
            </thead>
            <tbody>
                {/* Iterative rendering will happen here */}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
