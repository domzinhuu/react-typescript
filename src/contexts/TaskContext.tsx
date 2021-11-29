import React from "react";
import { ITarefa } from "../types/tarefa";
import { v4 as uuidV4 } from "uuid";

export type TaskContextTypes = {
  selecionado?: ITarefa;
  setSelecionado: React.Dispatch<React.SetStateAction<ITarefa | undefined>>;
  tasks?: ITarefa[];
  setTasks: React.Dispatch<React.SetStateAction<ITarefa[]>>;
  finalizarTarefa: () => void;
};

export const TaskContext = React.createContext({} as TaskContextTypes);
TaskContext.displayName = "Task";

export const TaskProvider = ({ children }: { children: any }) => {
  const [selecionado, setSelecionado] = React.useState<ITarefa>();
  const [tasks, setTasks] = React.useState<ITarefa[]>([]);

  const finalizarTarefa = () => {
    if (selecionado) {
      setSelecionado(undefined);
      setTasks((tarefasAnteriores) =>
        tarefasAnteriores.map((tarefa) => {
          if (tarefa.id === selecionado.id) {
            return { ...tarefa, selecionado: false, completado: true };
          }
          return tarefa;
        })
      );
    }
  };

  return (
    <TaskContext.Provider
      value={{ selecionado, setSelecionado, tasks, setTasks, finalizarTarefa }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const { tasks, setTasks, selecionado, setSelecionado } =
    React.useContext(TaskContext);
  const addTask = ({ nome, tempo }: { nome: string; tempo: string }) => {
    const task: ITarefa = {
      id: uuidV4(),
      nome,
      tempo,
      completado: false,
      selecionado: false,
    };
    setTasks((oldTasks) => [...oldTasks, task]);

    setTimeout(() => {
      console.table(tasks);
    }, 1000);
  };

  const selecionarTarefa = (newTask: ITarefa) => {
    setSelecionado(newTask);

    setTasks((oldTasks) =>
      oldTasks.map((task) => ({
        ...task,
        selecionado: task.id === newTask.id ? !task.selecionado : false,
      }))
    );
  };

  return {
    addTask,
    tasks,
    selecionarTarefa,
    selecionado,
  };
};
