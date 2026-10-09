"use client";

import Link from "next/link";
import { LayoutDashboard, FolderKanban, Mail, LogOut } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

export default function AdminSidebar() {
  const router = useRouter();
  const pathname = usePathname();
  
  // Проверяем авторизацию при монтировании
  useEffect(() => {
    const isAdminAuth = document.cookie.includes("admin_auth=true");
    if (!isAdminAuth && pathname !== "/admin/login") {
      router.push("/admin/login");
    }
  }, [pathname, router]);

  const handleLogout = async () => {
    // Удаляем cookie
    document.cookie = "admin_auth=; path=/; max-age=0";
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#14181f] border-r border-[#2a3340] p-6 flex flex-col">
      <Link
        href="/admin/dashboard"
        className="text-xl font-light text-[#d8dce4] mb-10"
      >
        УралСтройДерево
        <span className="block text-xs text-[#7a8494] mt-1">
          Панель управления
        </span>
      </Link>

      <nav className="flex-1 space-y-2">
        <Link
          href="/admin/dashboard"
          className="flex items-center gap-3 px-4 py-3 text-[#7a8494] hover:text-[#6b8cae] hover:bg-[#1a1f28] rounded-lg transition-colors"
        >
          <LayoutDashboard className="w-5 h-5" />
          Дашборд
        </Link>
        <Link
          href="/admin/projects"
          className="flex items-center gap-3 px-4 py-3 text-[#7a8494] hover:text-[#6b8cae] hover:bg-[#1a1f28] rounded-lg transition-colors"
        >
          <FolderKanban className="w-5 h-5" />
          Проекты
        </Link>
        <Link
          href="/admin/applications"
          className="flex items-center gap-3 px-4 py-3 text-[#7a8494] hover:text-[#6b8cae] hover:bg-[#1a1f28] rounded-lg transition-colors"
        >
          <Mail className="w-5 h-5" />
          Заявки
        </Link>
      </nav>

      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-3 text-[#7a8494] hover:text-red-400 hover:bg-[#1a1f28] rounded-lg transition-colors w-full text-left"
      >
        <LogOut className="w-5 h-5" />
        Выйти
      </button>
    </aside>
  );
}
