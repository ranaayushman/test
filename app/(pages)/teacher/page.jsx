"use client";

import dynamic from "next/dynamic";
import React from "react";

const Asidebar = dynamic(() => import("@/app/components/Sidebar"), {
  ssr: false,
});
const Header = dynamic(() => import("@/app/components/Header"), { ssr: false });
const TeacherForm = dynamic(() => import("./TeacherForm"), { ssr: false });
const page = () => {
  return (
    <div className="flex gap-x-3">
      <div className="w-fit">
        <Asidebar />
      </div>
      <div className="w-full flex flex-col gap-y-4 m-2">
        <Header />
        <TeacherForm />
      </div>
    </div>
  );
};

export default page;
