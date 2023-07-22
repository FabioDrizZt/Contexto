import ChildComponent from "./ChildComponent";
import { useSalarioState } from "./Context";

const ParentComponent = () => {
  const { salario } = useSalarioState();

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <ChildComponent />
      <p>Salario anual: ${salario * 12} </p>
    </div>
  );
};

export default ParentComponent;
