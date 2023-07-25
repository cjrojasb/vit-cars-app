import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

function CarSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector(({ cars }) => cars.searchTerm);

  const handleSearchTermChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(changeSearchTerm(event.target.value));
  };

  return (
    <div className="list-header">
      <h3 className="title is-3">My Favorite Cars</h3>
      <div className="search field is-horizontal">
        <label htmlFor="Search" className="label">
          Search
        </label>
        <input
          type="text"
          className="input"
          value={searchTerm}
          onChange={(event) => handleSearchTermChange(event)}
        />
      </div>
    </div>
  );
}

export default CarSearch;
