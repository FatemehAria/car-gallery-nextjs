import { useRouter } from "next/router";
import data from "../../data/carsData";
import CarData from "@/components/CarData";

const SingleCar = () => {
  const router = useRouter();
  const { carId } = router.query;

  return (
    <div>
      {data.map((item) => item.id === +carId && <CarData item={item} key={item.id}/>)}
    </div>
  );
};
export default SingleCar;
