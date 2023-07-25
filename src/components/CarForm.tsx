import { useDispatch, useSelector } from "react-redux";
import { changeCost, changeName, addCar, resetForm } from "../store";
import { Car } from "../store/slices/carsSlice";

function CarForm() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector(({ form }) => form);

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    dispatch(changeName(value));
  };

  const handleCost = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    dispatch(changeCost(parseInt(value) || 0));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(addCar({ name, cost } as Car));
    dispatch(resetForm());
  };

  return (
    <div className="card-form">
      <h4 className="subtitle is-3">Add Car</h4>
      <form action="#" onSubmit={(event) => handleSubmit(event)}>
        <div className="field-group is-flex is-align-items-center">
          <div className="field is-flex is-align-items-center m-0">
            <label className="label mr-3 m-0">Name</label>
            <input
              type="text"
              className="input is-expanded"
              value={name}
              onChange={(event) => handleNameChange(event)}
            />
          </div>
          <div className="field ml-3 is-flex is-align-items-center m-0">
            <label className="label mr-3 m-0">Costo</label>
            <input
              type="number"
              className="input is-expanded"
              value={cost || ""}
              onChange={(event) => handleCost(event)}
            />
          </div>
          <div className="field">
            <button
              type="submit"
              className="button is-link ml-3"
              disabled={!name || !cost}
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
