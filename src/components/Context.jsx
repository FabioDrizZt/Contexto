import { createContext, useContext, useState } from "react";

const Context = ({children}) => {
  const [salario,setSalario] = useState(150000);
  return (
    <SalarioState.Provider value={{salario,setSalario}}>
      {children}
    </SalarioState.Provider>
  )
}

export default Context;

const SalarioState = createContext();
export const useSalarioState = () => {
  return useContext(SalarioState);
}