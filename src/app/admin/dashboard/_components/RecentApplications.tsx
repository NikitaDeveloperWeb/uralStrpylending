import { getDb } from "@/lib/mongodb";

interface Application {
  _id: { toString(): string };
  name: string;
  status: string;
  createdAt: Date;
}

export default async function RecentApplications() {
  const db = await getDb();
  const applications = await db
    .collection("applications")
    .find({})
    .sort({ createdAt: -1 })
    .limit(5)
    .toArray();

  if (applications.length === 0) {
    return <p className="text-[#7a8494] text-sm">Заявок пока нет</p>;
  }

  return (
    <div className="space-y-3">
      {applications.map((app) => {
        const appData = app as unknown as Application;
        return (
        <div
          key={app._id.toString()}
          className="flex items-center justify-between py-3 border-b border-[#2a3340] last:border-0"
        >
          <div>
            <p className="text-[#d8dce4] text-sm">{appData.name}</p>
            <p className="text-[#7a8494] text-xs">
              {new Date(appData.createdAt).toLocaleDateString("ru-RU")}
            </p>
          </div>
          <span
            className={`text-xs px-2 py-1 rounded ${
              appData.status === "new"
                ? "bg-blue-500/20 text-blue-400"
                : appData.status === "read"
                ? "bg-yellow-500/20 text-yellow-400"
                : "bg-green-500/20 text-green-400"
            }`}
          >
            {appData.status === "new"
              ? "Новая"
              : appData.status === "read"
              ? "Прочитана"
              : "Обработана"}
          </span>
        </div>
        );
      })}
    </div>
  );
}
