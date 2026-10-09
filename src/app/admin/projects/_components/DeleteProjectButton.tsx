import { revalidatePath } from "next/cache";
import { Trash2 } from "lucide-react";

export default async function DeleteProjectButton({ id }: { id: string }) {
  const deleteAction = async () => {
    "use server";
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/api/admin/projects/${id}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      revalidatePath("/admin/projects");
    }
  };

  return (
    <form action={deleteAction}>
      <button
        type="submit"
        className="p-2 text-[#7a8494] hover:text-red-400 transition-colors"
        onClick={(e) => {
          if (!confirm("Удалить проект?")) e.preventDefault();
        }}
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </form>
  );
}
