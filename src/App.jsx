import "./App.css";
import LoboEstepario from "./components/LoboEstepario";
import ParentComponent from "./components/ParentComponent";

function App() {

  return (
    <div className="App">
      <ParentComponent />
      <LoboEstepario />
    </div>
  );
}

export default App;
