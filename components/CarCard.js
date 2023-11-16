import Location from "@/public/icons/Location";

const CarCard = ({ car }) => {
  console.log(car);
  return (
    <div>
      <img src={car.image} />
      <p>
        {car.name} {car.model}
      </p>
      <p>
        {car.year} {car.distance}km
      </p>
      <p>
        ${car.price} <Location />{car.location}
      </p>
    </div>
  );
};
export default CarCard;
