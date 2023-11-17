"use client";
import { useRouter } from "next/router";
import data from "../../data/carsData";
import CarCard from "@/components/CarCard";
import React from "react";
import { MdArrowBack } from "react-icons/md";
import Link from "next/link";

export default function Category() {
  const router = useRouter();
  const { categories } = router.query;
  return (
    <div>
      <MdArrowBack
        className="text-2xl font-semibold m-2 md:mx-[15%] cursor-pointer"
        onClick={() => router.push("/")}
      />
      <div className="grid md:grid-cols-2 md:w-[80%] mx-auto">
        {data.map(
          (item) =>
            item.category === categories && (
              <Link href={`/cars/${item.id}`} key={item.id}>
                <CarCard car={item} className="cursor-pointer"/>
              </Link>
            )
        )}
      </div>
    </div>
  );
}
