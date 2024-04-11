import { WidgetItem } from "@/components";
import { redirect } from "next/navigation";

export default function Home() {
  redirect("/dashboard");

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {/* <WidgetItem /> */}
    </div>
  );
}
