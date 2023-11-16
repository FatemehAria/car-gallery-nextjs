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
    <MdArrowBack className="text-2xl font-semibold m-2 md:mx-[15%]" onClick={() => router.push("/")}/>
    <div className="grid md:grid-cols-2 md:w-[80%] mx-auto">
    { 
        data.map((item) => item.category === categories && <div key={item.id}>
        <CarCard car= {...item} />
      </div>)
      }
    </div>
      
    </div>
  ;
}
