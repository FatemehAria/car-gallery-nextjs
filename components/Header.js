"use client"
import Image from "next/image";
import { useRouter } from "next/router";

export default function Header() {
    const router = useRouter()
  return (
    <div className="flex justify-evenly items-center p-5">
      <button onClick={() => router.push("/login")}>Login</button>
      <input placeholder="search your car" />
      <Image src="/favicon.ico" width={40} height={40} alt="logo" onClick={() => router.push("/")} className="cursor-pointer"/>
    </div>
  );
}
