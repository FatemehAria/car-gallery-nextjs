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
    <div>
      <div className="flex justify-evenly items-center px-6 py-4 border-b border-b-slate-600 w-[70%] mx-auto">
        <button onClick={clickHandler}>Back to top</button>
        <Image width={30} height={30} src="/favicon.ico" alt="logo" onClick={() => router.push("/")}/>
      </div>

      <div className="flex justify-around items-center py-3 w-[90%] mx-auto border-b border-b-slate-600">
        <div className="text-3xl mx-auto flex justify-center w-[50%] gap-2">
          <BiLogoInstagramAlt />
          <BiLogoTelegram />
          <BiLogoYoutube />
        </div>
        <div className="w-[50%] mx-4">
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
