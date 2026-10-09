import Link from "next/link";
import { getDb } from "@/lib/mongodb";
import { Plus, Edit2 } from "lucide-react";
import DeleteProjectButton from "./_components/DeleteProjectButton";

const categoryLabels: Record<string, string> = {
  "house-big": "Большие дома",
  "house-small": "Средние дома",
  sauna: "Бани",
};

interface Project {
  _id: { toString(): string };
  title: string;
  category: string;
  area: number;
  price: number;
}

export default async function ProjectsPage() {
  const db = await getDb();
  const projects = await db
    .collection("projects")
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <h1 className="text-2xl lg:text-3xl font-light text-[#d8dce4]">Проекты</h1>
        <Link
          href="/admin/projects/new"
          className="flex items-center gap-2 bg-[#6b8cae] text-[#14181f] px-4 py-2.5 rounded-lg hover:bg-[#8ba8c4] transition-colors text-sm font-light"
        >
          <Plus className="w-4 h-4" />
          Добавить проект
        </Link>
      </div>

      {projects.length === 0 ? (
        <div className="text-center py-16 bg-[#1a1f28] border border-[#2a3340] rounded-lg">
          <p className="text-[#7a8494]">Проектов пока нет</p>
        </div>
      ) : (
        <div className="space-y-4">
          {projects.map((project) => {
            const proj = project as unknown as Project;
            return (
            <div
              key={project._id.toString()}
              className="bg-[#1a1f28] border border-[#2a3340] rounded-lg p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex-1 min-w-0">
                <h3 className="text-[#d8dce4] font-light text-lg mb-1">{proj.title}</h3>
                <p className="text-sm text-[#7a8494]">
                  {categoryLabels[proj.category]} · {proj.area} м² ·{" "}
                  {proj.price.toLocaleString("ru-RU")} ₽
                </p>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <Link
                  href={`/admin/projects/${project._id.toString()}`}
                  className="p-2.5 text-[#7a8494] hover:text-[#6b8cae] hover:bg-[#14181f] transition-colors rounded"
                >
                  <Edit2 className="w-4 h-4" />
                </Link>
                <DeleteProjectButton id={project._id.toString()} />
              </div>
            </div>
            );
          })}
        </div>
      )}
    </div>
  );
}