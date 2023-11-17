import Calender from "@/public/icons/Calender";
import Company from "@/public/icons/Company";
import Location from "@/public/icons/Location";
import Model from "@/public/icons/Model";
import Road from "@/public/icons/Road";
import Image from "next/image";

export default function CarData({ item }) {
  // console.log(item);
  return (
    <div>
      <Image
        width={500}
        height={500}
        src={`${item.image}`}
        alt={`${item.name + item.model}`}
      />
      <p>
        ${item.name} ${item.model}
      </p>
      <div>
        <Company />
        <span>Company</span>
        <Model />
        <span>Model</span>
        <Calender />
        <span>First registration</span>
        <Road />
        <span>Kms driven</span>
      </div>
      <div>
        <Location />
        <span>Location</span>
      </div>
      <div>
        <p>Extra Information</p>
        <p>${item.description}</p>
      </div>
    </div>
  );
}
