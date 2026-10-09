"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Upload, X } from "lucide-react";

type Category = "house-big" | "house-small" | "sauna";

export default function ProjectForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    category: "house-small" as Category,
    area: 0,
    price: 0,
    description: "",
    features: [""],
    image_url: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Проверка типа файла
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/gif"];
    if (!allowedTypes.includes(file.type)) {
      alert("Разрешены только изображения (JPEG, PNG, WebP, GIF)");
      return;
    }

    // Проверка размера (5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("Размер файла не должен превышать 5MB");
      return;
    }

    setUploading(true);

    try {
      const formDataUpload = new FormData();
      formDataUpload.append("file", file);

      const response = await fetch("/api/upload", {
        method: "POST",
        body: formDataUpload,
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Ошибка загрузки");
      }

      const result = await response.json();
      setPreviewUrl(result.url);
      setFormData((prev) => ({ ...prev, image_url: result.url }));
    } catch (error) {
      console.error("Error uploading file:", error);
      alert(error instanceof Error ? error.message : "Ошибка загрузки файла");
    } finally {
      setUploading(false);
      e.target.value = ""; // Сброс input
    }
  };

  const removeImage = () => {
    setPreviewUrl("");
    setFormData((prev) => ({ ...prev, image_url: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const response = await fetch("/api/admin/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      router.push("/admin/projects");
      router.refresh();
    } else {
      alert("Ошибка сохранения");
      setIsSubmitting(false);
    }
  };

  const addFeature = () => {
    setFormData((prev) => ({
      ...prev,
      features: [...prev.features, ""],
    }));
  };

  const removeFeature = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index),
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
      <div>
        <label className="block text-xs uppercase tracking-widest mb-2 text-[#7a8494]">
          Название
        </label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) =>
            setFormData((p) => ({ ...p, title: e.target.value }))
          }
          required
          className="w-full px-4 py-3 bg-[#14181f] border border-[#2a3340] rounded-lg text-[#d8dce4] focus:border-[#6b8cae] focus:outline-none"
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-xs uppercase tracking-widest mb-2 text-[#7a8494]">
            Категория
          </label>
          <select
            value={formData.category}
            onChange={(e) =>
              setFormData((p) => ({
                ...p,
                category: e.target.value as Category,
              }))
            }
            className="w-full px-4 py-3 bg-[#14181f] border border-[#2a3340] rounded-lg text-[#d8dce4] focus:border-[#6b8cae] focus:outline-none"
          >
            <option value="house-big">Большие дома</option>
            <option value="house-small">Средние дома</option>
            <option value="sauna">Бани</option>
          </select>
        </div>
        <div>
          <label className="block text-xs uppercase tracking-widest mb-2 text-[#7a8494]">
            Площадь (м²)
          </label>
          <input
            type="number"
            value={formData.area}
            onChange={(e) =>
              setFormData((p) => ({ ...p, area: parseInt(e.target.value) || 0 }))
            }
            required
            min={1}
            className="w-full px-4 py-3 bg-[#14181f] border border-[#2a3340] rounded-lg text-[#d8dce4] focus:border-[#6b8cae] focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest mb-2 text-[#7a8494]">
          Цена (₽)
        </label>
        <input
          type="number"
          value={formData.price}
          onChange={(e) =>
            setFormData((p) => ({ ...p, price: parseInt(e.target.value) || 0 }))
          }
          required
          min={0}
          className="w-full px-4 py-3 bg-[#14181f] border border-[#2a3340] rounded-lg text-[#d8dce4] focus:border-[#6b8cae] focus:outline-none"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest mb-2 text-[#7a8494]">
          Описание
        </label>
        <textarea
          value={formData.description}
          onChange={(e) =>
            setFormData((p) => ({ ...p, description: e.target.value }))
          }
          required
          rows={4}
          className="w-full px-4 py-3 bg-[#14181f] border border-[#2a3340] rounded-lg text-[#d8dce4] focus:border-[#6b8cae] focus:outline-none resize-none"
        />
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest mb-2 text-[#7a8494]">
          Изображение проекта
        </label>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <label className="flex-1 cursor-pointer">
              <div className="flex items-center justify-center gap-2 px-4 py-3 bg-[#14181f] border border-[#2a3340] rounded-lg text-[#6b8cae] hover:bg-[#1a1f28] transition-colors">
                {uploading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#6b8cae] border-t-transparent rounded-full animate-spin"></div>
                    <span>Загрузка...</span>
                  </>
                ) : (
                  <>
                    <Upload className="w-5 h-5" />
                    <span>Загрузить изображение</span>
                  </>
                )}
              </div>
              <input
                type="file"
                accept="image/jpeg,image/jpg,image/png,image/webp,image/gif"
                onChange={handleFileChange}
                disabled={uploading}
                className="hidden"
              />
            </label>
          </div>

          {previewUrl && (
            <div className="relative">
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full h-48 object-cover rounded-lg border border-[#2a3340]"
              />
              <button
                type="button"
                onClick={removeImage}
                className="absolute top-2 right-2 p-2 bg-red-500/80 hover:bg-red-500 rounded-full text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          <p className="text-xs text-[#7a8494]">
            Разрешены форматы: JPEG, PNG, WebP, GIF. Максимальный размер: 5MB
          </p>
        </div>
      </div>

      <div>
        <label className="block text-xs uppercase tracking-widest mb-3 text-[#7a8494]">
          Характеристики
        </label>
        {formData.features.map((feature, index) => (
          <div key={index} className="flex gap-2 mb-2">
            <input
              type="text"
              value={feature}
              onChange={(e) => {
                const newFeatures = [...formData.features];
                newFeatures[index] = e.target.value;
                setFormData((p) => ({ ...p, features: newFeatures }));
              }}
              className="flex-1 px-4 py-2 bg-[#14181f] border border-[#2a3340] rounded-lg text-[#d8dce4] focus:border-[#6b8cae] focus:outline-none"
            />
            {formData.features.length > 1 && (
              <button
                type="button"
                onClick={() => removeFeature(index)}
                className="px-3 text-red-400 hover:text-red-300"
              >
                ×
              </button>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={addFeature}
          className="text-sm text-[#6b8cae] hover:text-[#8ba8c4]"
        >
          + Добавить характеристику
        </button>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#6b8cae] text-[#14181f] py-3 rounded-lg font-light hover:bg-[#8ba8c4] transition-colors disabled:opacity-50"
      >
        {isSubmitting ? "Сохранение..." : "Сохранить проект"}
      </button>
    </form>
  );
}
