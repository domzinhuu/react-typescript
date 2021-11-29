// @flow
import React from "react";
import { useTaskContext } from "../../contexts/TaskContext";
import { Button } from "../Button";
import style from "./form.module.scss";

const Form = () => {
  const [nome, setNome] = React.useState("");
  const [tempo, setTempo] = React.useState("00:00:00");
  const { addTask } = useTaskContext();

  const createTask = (e: any) => {
    e.preventDefault();
    addTask({ nome, tempo });
    setNome("");
    setTempo("00:00:00");
  };

  return (
    <form className={style.novaTarefa} onSubmit={createTask}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          placeholder="O que vai estudar"
          id="tarefa"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo"></label>
        <input
          type="time"
          name="tempo"
          step="1"
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          value={tempo}
          onChange={(e) => setTempo(e.target.value)}
        />
      </div>

      <Button type="submit">Adicionar</Button>
    </form>
  );
};

export default Form;
