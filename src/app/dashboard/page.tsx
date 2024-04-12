import { WidgetItem } from "@/components";
import { auth } from "../../auth";
import { redirect } from "next/navigation";
// prc
export default async function DashboardPage() {
/*   const session = await auth();

  if (!session?.user) {
    redirect("/api/auth/signin");
  } */

  return (
    <div className="grid grid-cols-1 gap-6">
      <WidgetItem title="Usuario conectado S-Side">
        <div className="flex flex-col">
          {/* <span>{session?.user?.name}</span>
          <span>{session?.user?.image}</span>
          <span>{session?.user?.email}</span> */}
          {/* <div>{JSON.stringify(session)}</div> */}
        </div>
      </WidgetItem>
    </div>
  );
}
