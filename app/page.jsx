"use client";

import dynamic from "next/dynamic";
import React from "react";
const Asidebar = dynamic(() => import("./components/Sidebar"), { ssr: false });
const Header = dynamic(() => import("./components/Header"), { ssr: false });
const Form = dynamic(() => import("./components/Form"), { ssr: false });

const Page = () => {
  return (
    <div className="flex gap-x-3">
      <div className="w-fit">
        <Asidebar />
      </div>
      <div className="w-full flex flex-col gap-y-4 m-2">
        <Header />
        <Form />
      </div>
    </div>
  );
};

export default Page;
