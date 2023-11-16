import { useRouter } from "next/router";
import data from "../data/carsData";
import CarCard from "@/components/CarCard";
import React from "react";

export default function Category() {
  const router = useRouter();
  const { categories } = router.query;
  return (
    <div>
      {data.map((item) => item.category === categories && <React.Fragment key={item.id}>
        <CarCard car={...item}/>
      </React.Fragment>)}
    </div>
  );
}
