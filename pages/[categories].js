"use client"
import { useRouter } from "next/router";
import data from "../data/carsData";
import CarCard from "@/components/CarCard";
import React from "react";
import { MdArrowBack } from "react-icons/md";

export default function Category() {
  const router = useRouter();
  const { categories } = router.query;
  return <div>
    <MdArrowBack className="text-2xl font-semibold m-2" onClick={() => router.push("/")}/>
      {
        data.map((item) => item.category === categories && <React.Fragment key={item.id}>
        <CarCard car= {...item} />
      </React.Fragment>)
      }
    </div>
  ;
}
