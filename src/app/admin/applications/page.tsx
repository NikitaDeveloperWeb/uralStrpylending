import { getDb } from "@/lib/mongodb";

interface Application {
  _id: { toString(): string };
  name: string;
  phone: string;
  email: string;
  message: string;
  status: string;
  createdAt: Date;
}

export default async function ApplicationsPage() {
  const db = await getDb();
  const applications = await db
    .collection("applications")
    .find({})
    .sort({ createdAt: -1 })
    .toArray();

  return (
    <div>
      <h1 className="text-2xl font-light text-[#d8dce4] mb-8">Заявки</h1>

      {applications.length === 0 ? (
        <div className="text-center py-16 bg-[#1a1f28] border border-[#2a3340] rounded-lg">
          <p className="text-[#7a8494]">Заявок пока нет</p>
        </div>
      ) : (
        <div className="space-y-3">
          {applications.map((app) => {
            const appData = app as unknown as Application;
            return (
            <div
              key={app._id.toString()}
              className="bg-[#1a1f28] border border-[#2a3340] rounded-lg p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-[#d8dce4] font-light">{appData.name}</h3>
                  <p className="text-sm text-[#7a8494]">{appData.phone}</p>
                  {appData.email && (
                    <p className="text-sm text-[#7a8494]">{appData.email}</p>
                  )}
                </div>
                <span
                  className={`text-xs px-3 py-1 rounded ${
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
              {appData.message && (
                <p className="text-[#d8dce4] font-light text-sm mb-3">
                  {appData.message}
                </p>
              )}
              <p className="text-xs text-[#7a8494]">
                {new Date(appData.createdAt).toLocaleString("ru-RU")}
              </p>
            </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
