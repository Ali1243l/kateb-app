import { Settings } from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-12">
      <div className="flex flex-col gap-6 font-display">
        <h1 className="text-[3.5rem] leading-[1.1] font-bold text-[var(--color-primary)] tracking-tight">الإعدادات</h1>
        <p className="text-lg text-[var(--color-on-surface)] opacity-70 font-body">
          التحكم في بياناتك وخيارات النظام الأكاديمي.
        </p>
      </div>

      <div className="bg-[var(--color-surface-container-lowest)] rounded-xl shadow-ambient p-10 font-body">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-[var(--color-surface-container-low)] rounded-full text-[var(--color-primary)]">
            <Settings className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-[var(--color-on-surface)]">إعدادات الحساب</h2>
        </div>
        <div className="space-y-6">
           <p className="text-lg opacity-80 mt-4 leading-relaxed bg-[var(--color-surface)] p-6 rounded-md">
             البيانات قيد التهيئة. هذه الواجهة ستربط تلقائياً لتتيح لك تغيير الرمز السري وإدارة ملفك الشخصي فور تفعيل قواعد البيانات النهائية.
           </p>
        </div>
      </div>
    </div>
  );
}
