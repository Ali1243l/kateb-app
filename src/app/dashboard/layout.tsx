"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FileText, Settings, LogOut, PlusCircle, BookOpen } from "lucide-react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { name: "الصفحة الرئيسية", href: "/dashboard", icon: LayoutDashboard },
    { name: "سجل التقارير", href: "/dashboard/reports", icon: FileText },
    { name: "الإعدادات", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-surface)] flex">
      {/* Sidebar Navigation - using surface_container_low for physical separation, NO borders */}
      <aside className="w-[280px] bg-[var(--color-surface-container-low)] py-10 px-6 hidden md:flex flex-col">
        <div className="mb-14 flex items-center gap-3">
          <div className="w-10 h-10 bg-[var(--background-signature-gradient)] rounded-md flex items-center justify-center">
            <BookOpen className="text-white w-5 h-5" />
          </div>
          <h2 className="text-xl font-display font-bold text-[var(--color-on-surface)]">
            الأرشيف الرقمي
          </h2>
        </div>

        <Link 
          href="/dashboard/new" 
          className="bg-[var(--background-signature-gradient)] text-white shadow-ambient hover:opacity-90 transition-opacity w-full py-3.5 rounded-md flex items-center justify-center gap-2 mb-10 font-bold font-body"
        >
          <PlusCircle className="w-5 h-5" /> تقرير جديد
        </Link>
        
        <nav className="flex-1 space-y-2 font-body font-semibold">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(`${item.href}/`);
            return (
              <Link 
                key={item.href} 
                href={item.href}
                className={`relative flex items-center gap-3 px-4 py-3.5 rounded-md transition-all ${
                  isActive 
                    ? "text-[var(--color-primary)] bg-[var(--color-surface-container-highest)]/30" 
                    : "text-[var(--color-on-surface)] opacity-70 hover:opacity-100"
                }`}
              >
                {isActive && (
                  /* 2px Signature vertical accent bar denoting focus */
                  <div className="absolute right-0 w-[3px] h-full bg-[var(--color-primary)] rounded-l-md" />
                )}
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto">
          <button className="flex items-center gap-3 px-4 py-3.5 rounded-md text-red-600/90 hover:bg-red-50/50 transition-all w-full text-right font-bold font-body">
            <LogOut className="w-5 h-5" /> خروج
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-8 lg:p-14 overflow-y-auto w-full">
        <div className="max-w-[1100px] mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
}
