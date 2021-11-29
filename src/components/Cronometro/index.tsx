import { Button } from "../Button";
import Relogio from "./Relogio";
import style from "./cronometro.module.scss";
import { useTimerContext } from "../../contexts/TimeContext";

const Cronometro = () => {
  const { tempo, regressiva } = useTimerContext();
  return (
    <div className={style.cronometro}>
      <p className={style.titulo}>Escolha um card e inicie o cronometro</p>
      <div className={style.relogioWrapper}>
        <Relogio />
      </div>
      <Button onClick={() => regressiva(tempo)}>Começar!</Button>
    </div>
  );
};

export default Cronometro;
