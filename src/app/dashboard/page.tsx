import { FileText, Download, Edit2 } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  // Empty Mockup Array
  const recentReports: any[] = [];
  
  // Format current Gregorian Date
  const today = new Date().toLocaleDateString('ar-EG', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="space-y-12">
      {/* Asymmetrical Header Layout */}
      <div className="flex flex-col md:flex-row md:items-end justify-between font-display gap-6">
        <div>
          <h1 className="text-[3.5rem] leading-[1.1] font-bold text-[var(--color-primary)] mb-2 tracking-tight">نظرة عامة</h1>
          <p className="text-lg text-[var(--color-on-surface)] opacity-70 font-body">
            سجلك الأكاديمي والوثائق المُصدرة مؤخراً.
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold opacity-50 font-body uppercase tracking-widest">تحديث اليوم</p>
          <p className="text-xl font-bold font-display">{today}</p>
        </div>
      </div>

      {/* Stats Cards - Borderless with Tonal Elevation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { label: "وثائق معتمدة", value: 12 },
          { label: "عروض تقديمية", value: 4 },
          { label: "قيد المراجعة", value: 2 },
        ].map((stat, i) => (
          <div key={i} className="bg-[var(--color-surface-container-lowest)] p-8 rounded-xl shadow-ambient flex items-start justify-between">
            <div>
              <p className="text-sm font-bold text-[var(--color-on-surface)] opacity-50 mb-2 font-body uppercase tracking-wide">{stat.label}</p>
              <h3 className="text-4xl font-bold font-display text-[var(--color-primary)]">{stat.value}</h3>
            </div>
            <div className="p-3 bg-[var(--color-surface)] rounded-md text-[var(--color-primary)]">
              <FileText className="w-6 h-6" />
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Table - Editorial No-Line Grid */}
      <div className="bg-[var(--color-surface-container-lowest)] rounded-xl shadow-ambient overflow-hidden py-8">
        <div className="px-10 flex justify-between items-end mb-8 border-b-2 border-[var(--color-surface)] pb-6">
          <h2 className="text-2xl font-bold font-display text-[var(--color-primary)]">أحدث الإصدارات</h2>
          <Link href="/dashboard/reports" className="text-sm font-bold text-[var(--color-primary-container)] hover:underline underline-offset-4">
            تصفح الأرشيف الكامل
          </Link>
        </div>

        <div className="overflow-x-auto px-4">
          <table className="w-full text-right font-body">
            <thead>
              <tr className="text-[var(--color-on-surface)] opacity-50 text-sm tracking-wide uppercase">
                <th className="px-6 py-4 font-bold w-1/2">العنوان الدراسي</th>
                <th className="px-6 py-4 font-bold">تاريخ الإصدار</th>
                <th className="px-6 py-4 font-bold">التنسيق</th>
                <th className="px-6 py-4 font-bold">الحالة</th>
                <th className="px-6 py-4 font-bold text-center">إجراء</th>
              </tr>
            </thead>
            <tbody>
              {recentReports.length > 0 ? (
                recentReports.map((report) => (
                  <tr key={report.id} className="transition-colors hover:bg-[var(--color-surface)]/50 group">
                    <td className="px-6 py-5 font-bold text-lg text-[var(--color-on-surface)] leading-snug">{report.title}</td>
                    <td className="px-6 py-5 text-[var(--color-on-surface)] opacity-80">{report.date}</td>
                    <td className="px-6 py-5">
                      <span className="font-bold opacity-70 uppercase tracking-widest text-xs">{report.type}</span>
                    </td>
                    <td className="px-6 py-5">
                      <span className="bg-[var(--color-secondary-fixed)] text-[var(--color-on-secondary-fixed-variant)] px-4 py-1.5 text-xs font-bold rounded-full inline-block">
                        {report.status}
                      </span>
                    </td>
                    <td className="px-6 py-5 text-center flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="text-[var(--color-primary)] hover:text-[var(--color-primary-container)] transition-colors p-2" title="تحميل">
                        <Download className="w-5 h-5" />
                      </button>
                      <button className="text-[var(--color-outline-variant)] hover:text-[var(--color-on-surface)] transition-colors p-2" title="تعديل">
                        <Edit2 className="w-5 h-5" />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-lg text-[var(--color-on-surface)] opacity-60 font-body">
                    لا توجد تقارير مسجلة حتى الآن. ابدأ بإنشاء تقريرك الأول!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
