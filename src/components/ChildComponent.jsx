import { useSalarioState } from "./Context";

const ChildComponent = () => {
  const { salario, setSalario } = useSalarioState();

  return (
    <div className="child">
      <h3>Child Component</h3>
      <p>Cuanto ganas por mes?</p>
      <p>Salário: ${salario}</p>
      <button onClick={() => setSalario(salario + 1000)}>
        Aumentar salario
      </button>
    </div>
  );
};

export default ChildComponent;
