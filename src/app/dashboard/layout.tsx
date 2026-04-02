"use client";

import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { LayoutDashboard, FileText, Settings, LogOut, PlusCircle } from "lucide-react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { name: "الرئيسية", href: "/dashboard", icon: LayoutDashboard },
    { name: "تقاريري", href: "/dashboard/reports", icon: FileText },
    { name: "الإعدادات", href: "/dashboard/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar Navigation */}
      <aside className="w-64 border-l border-white/5 bg-black/5 dark:bg-white/5 backdrop-blur-xl p-6 hidden md:flex flex-col">
        <div className="mb-10 flex items-center justify-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-xl flex shadow-lg items-center justify-center">
            <FileText className="text-white w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            منصة التقارير
          </h2>
        </div>

        <Link href="/dashboard/new" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all w-full py-3 rounded-xl flex items-center justify-center gap-2 mb-8 font-semibold">
          <PlusCircle className="w-5 h-5" /> إنشاء تقرير جديد
        </Link>
        
        <nav className="flex-1 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href} 
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive 
                    ? "bg-blue-600/10 text-blue-600 dark:text-blue-400 font-semibold" 
                    : "text-foreground/70 hover:bg-black/5 dark:hover:bg-white/5 hover:text-foreground"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
                {isActive && (
                  <motion.div 
                    layoutId="active-nav" 
                    className="absolute right-0 w-1 h-8 bg-blue-600 dark:bg-blue-500 rounded-r-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto">
          <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-destructive hover:bg-destructive/10 transition-all w-full text-right font-medium">
            <LogOut className="w-5 h-5" /> تسجيل الخروج
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 lg:p-10 overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="max-w-6xl mx-auto"
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
}
