import { useTaskContext } from "../../contexts/TaskContext";
import Item from "./Item";
import style from "./list.module.scss";

const List = () => {
  const { tasks = [] } = useTaskContext();

  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((tarefa) => (
          <Item key={tarefa.id} {...tarefa} />
        ))}
      </ul>
    </aside>
  );
};

export default List;
