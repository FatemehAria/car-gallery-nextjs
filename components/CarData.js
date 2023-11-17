import Calender from "@/public/icons/Calender";
import Company from "@/public/icons/Company";
import Location from "@/public/icons/Location";
import Model from "@/public/icons/Model";
import Road from "@/public/icons/Road";
import Image from "next/image";
import styles from "./cardata.module.css";
export default function CarData({ item }) {
  // console.log(item);
  return (
    <div className="flex flex-col">
      <Image
        width={500}
        height={500}
        src={`${item.image}`}
        alt={`${item.name} ${item.model}`}
      />
      <p className="font-bold text-xl p-2">
        {item.name} {item.model}
      </p>

      <div className={`${styles.overallInfo}`}>
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

      <div className={`${styles.overallInfo}`}>
        <div>
          <Location />
          <p>Location <span>{item.location}</span></p>
        </div>
      </div>

      <div>
        <p className="font-bold">Extra Information</p>
        <p className="p-2 text-justify">{item.description}</p>
      </div>
    </div>
  );
}
