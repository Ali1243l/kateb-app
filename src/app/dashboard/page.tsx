import { FileText, Download, Edit } from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  // Mockup Data
  const recentReports = [
    { id: "1", title: "تأثير الذكاء الاصطناعي في التعليم", date: "2026-04-01", status: "مكتمل", type: "PDF" },
    { id: "2", title: "التغير المناخي والحلول المستدامة", date: "2026-03-28", status: "مكتمل", type: "Word" },
    { id: "3", title: "مقدمة في هندسة البرمجيات", date: "2026-03-25", status: "فشل", type: "PPT" },
  ];

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">لوحة التحكم</h1>
          <p className="text-muted-foreground">أهلاً بك مرة أخرى، إليك نظرة عامة على تقاريرك الدراسية السابقة.</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {[
          { label: "التقارير المكتملة", value: 12, color: "text-blue-500", bg: "bg-blue-500/10" },
          { label: "العروض التقديمية", value: 4, color: "text-purple-500", bg: "bg-purple-500/10" },
          { label: "قيد الانتظار", value: 0, color: "text-amber-500", bg: "bg-amber-500/10" },
        ].map((stat, i) => (
          <div key={i} className="bg-white/5 dark:bg-black/20 border border-white/10 dark:border-white/5 rounded-2xl p-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-foreground/70 mb-1">{stat.label}</p>
              <h3 className="text-3xl font-bold">{stat.value}</h3>
            </div>
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bg} ${stat.color}`}>
              <FileText className="w-6 h-6" />
            </div>
          </div>
        ))}
      </div>

      {/* Recent Activity Table */}
      <div className="bg-white/5 dark:bg-black/20 border border-white/10 dark:border-white/5 rounded-2xl py-6 overflow-hidden">
        <div className="px-6 flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">التقارير الأخيرة</h2>
          <Link href="/dashboard/reports" className="text-sm text-blue-500 hover:text-blue-600 transition-colors">
            عرض الكل
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-foreground/60 text-sm">
                <th className="px-6 py-4 font-medium">عنوان التقرير</th>
                <th className="px-6 py-4 font-medium">تاريخ الإنشاء</th>
                <th className="px-6 py-4 font-medium">الصيغة</th>
                <th className="px-6 py-4 font-medium">الحالة</th>
                <th className="px-6 py-4 font-medium text-center">الإجراءات</th>
              </tr>
            </thead>
            <tbody>
              {recentReports.map((report) => (
                <tr key={report.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="px-6 py-4 font-medium text-foreground">{report.title}</td>
                  <td className="px-6 py-4 text-foreground/70">{report.date}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-black/10 dark:bg-white/10 text-xs font-semibold rounded-lg text-foreground/80">
                      {report.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 text-xs font-bold rounded-lg ${
                      report.status === "مكتمل" ? "bg-green-500/10 text-green-500" :
                      report.status === "فشل" ? "bg-red-500/10 text-red-500" :
                      "bg-amber-500/10 text-amber-500"
                    }`}>
                      {report.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 hover:bg-blue-500/10 text-blue-500 rounded-lg transition-colors" title="تحميل">
                      <Download className="w-4 h-4" />
                    </button>
                    <button className="p-2 hover:bg-purple-500/10 text-purple-500 rounded-lg transition-colors" title="تعديل">
                      <Edit className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
