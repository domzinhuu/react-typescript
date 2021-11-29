import { useTaskContext } from "../../../contexts/TaskContext";
import { ITarefa } from "../../../types/tarefa";
import style from "./item.module.scss";

const Item = ({ nome, tempo, selecionado, completado, id }: ITarefa) => {
  const { selecionarTarefa } = useTaskContext();
  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ""} ${
        completado ? style.itemCompletado : ""
      }`}
      onClick={() =>
        !completado &&
        selecionarTarefa({ nome, tempo, selecionado, completado, id })
      }
    >
      <h3>{nome}</h3>
      <span>{tempo}</span>
      {completado && (
        <span className={style.concluido} aria-label="tarefa completada"></span>
      )}
    </li>
  );
};

export default Item;
