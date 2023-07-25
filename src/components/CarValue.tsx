import { useSelector } from "react-redux";
import { Car } from "../store/slices/carsSlice";

function CarValue() {
  const totalCost = useSelector(({ cars: { data, searchTerm } }) =>
    data
      .filter(({ name }: Car) =>
        name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc: number, { cost }: Car) => acc + cost, 0)
  );

  return (
    <div className="car-value">
      <p>{`Total Cost: ${totalCost}`}</p>
    </div>
  );
}

export default CarValue;
