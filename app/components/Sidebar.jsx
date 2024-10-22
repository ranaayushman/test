import { useState } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menus } from "../constants";
import Image from "next/image";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const Asidebar = () => {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  const toggleSidebar = () => setOpen(!open);

  return (
    <div className="flex sticky inset-0 drop-shadow-custom z-10 h-full">
      <div
        className={` ${
          open ? "w-56" : "w-20"
        } duration-300 h-full p-0 pt-8 relative bg-white border-r border-gray-200 shadow-lg`}
      >
        <div className="flex justify-center items-center mb-6">
          <HamburgerMenuIcon
            className={`w-10 h-10 ml-6 text-[#789336] cursor-pointer ${
              open ? "hidden" : "block"
            }`}
            onClick={toggleSidebar}
          />
          <div className="flex px-4 space-x-2">
            <Image
              src="/svg/angel_logo.svg"
              height={50}
              width={50}
              alt="logo"
              className={`${open ? "" : "hidden"}`}
            />
            <h1
              className={`text-black font-medium text-[18px]  duration-300 cursor-pointer ${
                !open ? "hidden" : "block"
              } ${open ? "w-full text-left" : "jus"}`}
              onClick={toggleSidebar}
            >
              Angel Education Society
            </h1>
          </div>
        </div>
        <ul className="pt-0">
          {Menus.map((menu, index) => {
            const isActive = pathname === menu.href;
            return (
              <li
                key={index}
                className={`text-md flex items-center gap-x-4 cursor-pointer p-2 hover:bg-[#789336] ${
                  menu.gap ? "mt-44" : "mt-2"
                } ${!open && "justify-center"} group ${
                  isActive ? "bg-[#789336] text-white" : "text-slate-900"
                }`}
              >
                <Link href={menu.href} className="flex items-center w-full">
                  <div className="relative px-4">
                    <Icon
                      fontSize={24}
                      icon={menu.icon}
                      className={`z-10 relative ${
                        isActive ? "text-white" : "text-slate-900"
                      } group-hover:text-white transition-colors duration-200`}
                    />
                  </div>
                  <span
                    className={`${!open && "hidden"} origin-left duration-200 ${
                      isActive ? "font-semibold" : "font-medium"
                    } group-hover:text-white`}
                  >
                    {menu.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Asidebar;
