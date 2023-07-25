import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";
import CarForm from "./components/CarForm";

function App() {
  return (
    <div className="container is-fluid">
      <div className="p-4 panel">
        <CarForm />
        <CarSearch />
        <CarList />
        <CarValue />
      </div>
    </div>
  );
}
export default App;
