import Lobo from '../assets/lobo.png';
import { useSalarioState } from './Context';

const LoboEstepario = () => {
  const { salario } = useSalarioState();

  return <div className="lobo-estepario">
    <img src={Lobo} alt="lobo-estepario" />
    <h3>Salario mensual: ${salario}</h3>
    <h3>Salario anual: ${salario*12}</h3>
  </div>;
};

export default LoboEstepario;
