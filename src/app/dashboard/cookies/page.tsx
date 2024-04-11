import { TabBar } from "@/components";
import { cookies } from "next/headers";
// prc
export const metadata = {
  title: "Cookies Page",
  description: "SEO Title",
};

export default function CookiesPage() {
  const cookieStore = cookies();
  //   Si no tiene un valor que sea siempre 1
  const cookiTab = Number(cookieStore.get("selectedTab")?.value ?? "1");

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 gap-3">
      <div className="flex flex-col">
        <span className="text-3xl">Tabs</span>
        <TabBar currentTab={cookiTab} />
      </div>
    </div>
  );
}
