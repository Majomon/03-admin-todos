import { WidgetItem } from "@/components";
import { auth } from "../../auth";
// prc
export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <WidgetItem title="Usuario conectado S-Side">
        <div className="flex flex-col">
          <span>{session.user?.name}</span>
          <span>{session.user?.image}</span>
          <span>{session.user?.email}</span>
        </div>
      </WidgetItem>
    </div>
  );
}
