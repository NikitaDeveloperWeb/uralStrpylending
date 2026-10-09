import { getDb } from "@/lib/mongodb";
import { FolderKanban, Mail } from "lucide-react";
import RecentApplications from "./_components/RecentApplications";

export default async function DashboardPage() {
  const db = await getDb();

  const projectsCount = await db.collection("projects").countDocuments();
  const applicationsCount = await db
    .collection("applications")
    .countDocuments();

  const stats = [
    {
      label: "Всего проектов",
      value: projectsCount,
      icon: FolderKanban,
      color: "text-[#6b8cae]",
    },
    {
      label: "Всего заявок",
      value: applicationsCount,
      icon: Mail,
      color: "text-[#6b8cae]",
    },
  ];

  return (
    <div>
      <h1 className="text-2xl lg:text-3xl font-light text-[#d8dce4] mb-8">Дашборд</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-[#1a1f28] border border-[#2a3340] rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center gap-4">
              <div
                className={`p-3 sm:p-4 rounded-lg bg-[#14181f] ${stat.color}`}
              >
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-[#7a8494]">{stat.label}</p>
                <p className="text-3xl lg:text-4xl font-light text-[#d8dce4]">
                  {stat.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#1a1f28] border border-[#2a3340] rounded-lg p-6">
        <h2 className="text-lg lg:text-xl font-light text-[#d8dce4] mb-6">
          Последние заявки
        </h2>
        <RecentApplications />
      </div>
    </div>
  );
}
