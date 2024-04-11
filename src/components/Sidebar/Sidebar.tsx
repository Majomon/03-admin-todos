import { LogoutButton, SidebarItem } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { CiLogout } from "react-icons/ci";
import {
  IoBasketOutline,
  IoCalendarOutline,
  IoCheckboxOutline,
  IoCodeWorkingOutline,
  IoListOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { auth } from "../../auth";

const menuItem = [
  { icon: <IoCalendarOutline />, title: "Dashboard", path: "/dashboard" },
  {
    icon: <IoCheckboxOutline />,
    title: "Rest TODOS",
    path: "/dashboard/rest-todos",
  },
  {
    icon: <IoListOutline />,
    title: "Server Actions",
    path: "/dashboard/server-todos",
  },
  {
    icon: <IoCodeWorkingOutline />,
    title: "Cookies",
    path: "/dashboard/cookies",
  },
  {
    icon: <IoBasketOutline />,
    title: "Productos",
    path: "/dashboard/products",
  },
  {
    icon: <IoPersonOutline />,
    title: "Perfil",
    path: "/dashboard/profile",
  },
];
export const Sidebar = async () => {
  const session = await auth();

  const userName = session?.user?.name || "No name";
  const userAvatar =
    session?.user?.image ||
    "https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp";
  //TODO: const userRol = session?.user?.name || "No name";

  return (
    <aside className="fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between border-r bg-white px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          <Link href="#" title="home">
            <Image
              src={
                "https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg"
              }
              className="w-32"
              alt="tailus logo"
              width={150}
              height={150}
            />
          </Link>
        </div>

        <div className="mt-8 text-center">
          <Image
            src={userAvatar}
            className="m-auto h-10 w-10 rounded-full object-cover lg:h-28 lg:w-28"
            alt="tailus logo"
            width={150}
            height={150}
          />

          <h5 className="mt-4 hidden text-xl font-semibold text-gray-600 lg:block">
            {userName}
          </h5>
          <span className="hidden text-gray-400 lg:block">Admin</span>
        </div>

        <ul className="mt-8 space-y-2 tracking-wide">
          {menuItem.map((item) => (
            <SidebarItem key={item.path} {...item} />
          ))}
        </ul>
      </div>

      <div className="-mx-6 flex items-center justify-between border-t px-6 pt-4">
        <LogoutButton />
      </div>
    </aside>
  );
};
