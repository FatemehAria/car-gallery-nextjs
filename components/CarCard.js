import Location from "@/public/icons/Location";
import Image from "next/image";
import styles from "./carcard.module.css";

const CarCard = ({ car }) => {
  //   console.log(car);
  return (
    <div className="grid justify-center items-center gap-1 p-3">
      <Image
        width={400}
        height={400}
        alt={car.name + car.model}
        src={car.image}
      />
      <p className={`${styles.pTags} font-bold text-lg`}>
        {car.name} {car.model}
      </p>
      <p className={`${styles.pTags} font-thin text-gray-600`}>
        {car.year} {car.distance}km
      </p>
      <p className={`${styles.pTags} gap-4`}>
        <span className="font-bold bg-[#ecd7d7] p-1 rounded-md">$ {car.price}</span>
        <span className="flex font-semibold">
          <Location />
          {car.location}
        </span>
      </p>
    </div>
  );
};
export default CarCard;
