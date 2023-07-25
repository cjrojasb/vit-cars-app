import { useDispatch, useSelector } from "react-redux";
import { removeCar } from "../store";
import { Car } from "../store/slices/carsSlice";

function CarList() {
  const dispatch = useDispatch();
  const { name: searchFormName } = useSelector(({ form }) => form);
  const cars = useSelector(({ cars: { data, searchTerm } }) =>
    data.filter(({ name }: Car) =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const handleDelete = (id: string) => {
    dispatch(removeCar(id));
  };

  return (
    <div className="car-list">
      {cars.map(({ id, name, cost }: Car) => (
        <div className="panel is-flex is-align-items-center m-2" key={id}>
          <p
            className={`m-0 ${
              searchFormName &&
              name?.toLowerCase().includes(searchFormName?.toLowerCase()) &&
              "has-text-weight-bold"
            }`}
          >{`${name} - ${cost}`}</p>
          <button
            className="button is-danger ml-5"
            onClick={() => handleDelete(id!)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default CarList;
