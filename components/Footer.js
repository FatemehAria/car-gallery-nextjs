"use client";

import Image from "next/image";
import { useRouter } from "next/router";
import {
  BiLogoInstagramAlt,
  BiLogoTelegram,
  BiLogoYoutube,
} from "react-icons/bi";

export default function Footer() {
  const router = useRouter();
  const clickHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="h-[100%]">
      <div className="flex justify-evenly items-center px-6 py-4 border-b border-b-slate-600 w-[70%] mx-auto">
        <button onClick={clickHandler}>Back to top</button>
        <Image width={30} height={30} src="/favicon.ico" alt="logo" onClick={() => router.push("/")} className="cursor-pointer"/>
      </div>

      <div className="flex justify-evenly items-center px-6 md:px-80 py-4 border-b border-b-slate-600 w-[70%] mx-auto">
        <div className="text-3xl mx-auto flex justify-center gap-2 items-center">
          <BiLogoInstagramAlt />
          <BiLogoTelegram />
          <BiLogoYoutube />
        </div>
        <div className="mx-4">
          <p>
            <span className="font-bold">Email:</span>arianacar@gmail.com
          </p>
          <p>
            <span className="font-bold">Phone:</span>(+98)22560256
          </p>
        </div>
      </div>
    </div>
  );
}
