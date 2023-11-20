import Link from "next/link";
import data from "../data/carsData";
import CarCard from "./CarCard";
const AllCars = () => {
  return (
    <div className="grid md:grid-cols-3 md:w-[70%] mx-auto shadow-gray-300 shadow-md">
      {data.map((item) => (
        <Link href={`/cars/${item.id}`} key={item.id}>
          <CarCard car={item} className="cursor-pointer" />
        </Link>
      ))}
    </div>
  );
};
export default AllCars;
