import Calender from "@/public/icons/Calender";
import Company from "@/public/icons/Company";
import Location from "@/public/icons/Location";
import Model from "@/public/icons/Model";
import Road from "@/public/icons/Road";
import Image from "next/image";
import styles from "./cardata.module.css";
import { MdArrowBack } from "react-icons/md";
import { useRouter } from "next/router";

export default function CarData({ item }) {
  const router = useRouter();
  // console.log(item);
  return (
    <div className="flex flex-col w-[60%] mx-auto">
      <MdArrowBack
        className="text-2xl font-semibold m-2 cursor-pointer"
        onClick={() => router.back()}
      />

      <div className="px-5">
      <Image
        width={500}
        height={500}
        src={`${item.image}`}
        alt={`${item.name} ${item.model}`}
        className="rounded-md mx-auto"
        
      />
        <p className="font-bold text-xl py-2 shadow-gray-300 shadow-md my-1 px-2">
          {item.name} {item.model}
        </p>
        <div className={`${styles.overallInfo} shadow-gray-300 shadow-sm my-2`}>
          <div>
            <Company />
            <p>Company</p>
          </div>
          <div>
            <Model />
            <p>
              Model <span>{item.model}</span>
            </p>
          </div>
          <div>
            <Calender />
            <p>First registration</p>
          </div>
          <div>
            <Road />
            <p>
              Kms driven <span>{item.distance}km</span>
            </p>
          </div>
        </div>

        <div className={`${styles.overallInfo}shadow-gray-300 shadow-sm my-4 py-2`}>
          <div>
            <Location />
            <p>
              Location <span>{item.location}</span>
            </p>
          </div>
        </div>

        <div className="shadow-gray-300 shadow-sm my-2 p-1">
          <p className="font-bold">Extra Information</p>
          <p className="p-2 text-justify">{item.description}</p>
        </div>
      </div>
    </div>
  );
}
