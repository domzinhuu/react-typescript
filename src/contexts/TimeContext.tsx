import React from "react";
import { tempoParaSegundos } from "../utils/time";
import { TaskContext } from "./TaskContext";

export type TimerContextTypes = {
  tempo: number;
  setTempo: React.Dispatch<React.SetStateAction<number>>;
};

export const TimerContext = React.createContext({
  tempo: 0,
} as TimerContextTypes);
TimerContext.displayName = "Timer";

export const TimerProvider = ({ children }: { children: any }) => {
  const [tempo, setTempo] = React.useState(0);

  return (
    <TimerContext.Provider value={{ tempo, setTempo }}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimerContext = () => {
  const { tempo, setTempo } = React.useContext(TimerContext);
  const { selecionado, finalizarTarefa } = React.useContext(TaskContext);

  React.useEffect(() => {
    if (selecionado?.tempo) {
      setTempo(tempoParaSegundos(selecionado.tempo));
    }
  }, [selecionado, setTempo]);

  const regressiva = (contador: number = 0) => {
    setTimeout(() => {
      if (contador > 0) {
        setTempo(contador - 1);
        return regressiva(contador - 1);
      } else {
        finalizarTarefa();
      }
    }, 1000);
  };

  return {
    tempo,
    regressiva,
  };
};
