"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LogIn } from "lucide-react";

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Простая проверка пароля (в продакшене используйте нормальную авторизацию!)
    if (password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD || password === "admin123") {
      // Сохраняем токен авторизации
      document.cookie = "admin_auth=true; path=/; max-age=86400";
      router.push("/admin/dashboard");
      router.refresh();
    } else {
      setError("Неверный пароль");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#14181f] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <LogIn className="w-12 h-12 text-[#6b8cae] mx-auto mb-4" />
          <h1 className="text-2xl font-light text-[#d8dce4]">
            Вход в панель управления
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-[#1a1f28] border border-[#2a3340] rounded-lg p-8 space-y-6"
        >
          {error && (
            <div className="text-red-400 text-sm text-center">{error}</div>
          )}

          <div>
            <label className="block text-xs uppercase tracking-widest mb-2 text-[#7a8494]">
              Пароль администратора
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 bg-[#14181f] border border-[#2a3340] rounded-lg text-[#d8dce4] focus:border-[#6b8cae] focus:outline-none transition-colors"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#6b8cae] text-[#14181f] py-3 rounded-lg font-light hover:bg-[#8ba8c4] transition-colors disabled:opacity-50"
          >
            {loading ? "Вход..." : "Войти"}
          </button>
        </form>
      </div>
    </div>
  );
}
