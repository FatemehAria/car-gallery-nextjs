"use client";
import Image from "next/image";
import { useRouter } from "next/router";
import data from "../data/carsData";
import { useState } from "react";
import CarCard from "./CarCard";
import Link from "next/link";
import { BiSolidLogInCircle } from "react-icons/bi";

export default function Header() {
  const router = useRouter();
  const [text, setText] = useState("");
  const [fade, setFade] = useState(false);

  return (
    <div className="flex justify-evenly items-center p-5 w-[70%] mx-auto">
      <BiSolidLogInCircle onClick={() => router.push("/login")} className="text-4xl font-semibold text-[#B0578D] cursor-pointer"/>

      <div className="flex flex-col w-full justify-center items-center">
        <input
          placeholder="search your car"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="outline-none rounded-md border p-2 border-gray-800 w-[40%]"
        />
        <div className="absolute bg-[#F4EAE0] top-[12%] mx-4 rounded-lg md:flex md:w-[75%] md:justify-center md:items-center lg:w-[50%]">
          {data.map(
            (item) =>
              (item.name.replace("-", " ").toLowerCase() ===
                text.toLowerCase() ||
                item.model.toLowerCase() === text.toLowerCase()) && (
                <div key={item.id} className={`${fade ? "hidden" : ""}`}>
                  <Link
                    href={`/cars/${item.id}`}
                    onClick={() => (setFade(true), setText(""))}
                  >
                    <CarCard car={item} />
                  </Link>
                </div>
              )
          )}
        </div>
      </div>

      <Image
        src="/favicon.ico"
        width={30}
        height={30}
        alt="logo"
        onClick={() => router.push("/")}
        className="cursor-pointer"
      />
    </div>
  );
}
