"use client";

import { Save, User, Bell, Shield, Moon } from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  const [userName, setUserName] = useState("أحمد محمد");
  const [email, setEmail] = useState("student@university.edu");
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold mb-2">الإعدادات</h1>
        <p className="text-muted-foreground">تخصيص تفضيلات حسابك وتجربة الاستخدام.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <aside className="space-y-2">
          {[
            { icon: User, label: "الحساب الشخصي", active: true },
            { icon: Moon, label: "المظهر (Theme)", active: false },
            { icon: Shield, label: "الأمان والخصوصية", active: false },
            { icon: Bell, label: "الإشعارات", active: false },
          ].map((item, i) => (
            <button key={i} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${item.active ? "bg-blue-600/10 text-blue-500" : "text-foreground/70 opacity-50 cursor-not-allowed hover:bg-black/5 dark:hover:bg-white/5"}`} disabled={!item.active}>
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </aside>

        <div className="md:col-span-3 space-y-6">
          <div className="bg-white/5 dark:bg-black/20 border border-white/10 dark:border-white/5 rounded-3xl p-8">
            <h2 className="text-xl font-bold mb-6 border-b border-white/10 pb-4">معلومات الحساب الأساسية</h2>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-3xl font-bold font-serif text-white shadow-lg">
                  أ
                </div>
                <div>
                  <button className="px-4 py-2 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 rounded-lg text-sm font-semibold transition-colors">
                    تغيير الصورة
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">الاسم الكامل</label>
                  <input type="text" value={userName} onChange={e => setUserName(e.target.value)} className="w-full bg-black/5 dark:bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:ring-2 focus:ring-blue-500 outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-foreground/80">البريد الإلكتروني</label>
                  <input type="email" value={email} onChange={e => setEmail(e.target.value)} dir="ltr" className="w-full bg-black/5 dark:bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:ring-2 focus:ring-blue-500 outline-none placeholder:text-right text-left" />
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-end">
                <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-xl shadow-lg transition-transform hover:-translate-y-0.5">
                  <Save className="w-5 h-5" /> حفظ التغييرات
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
