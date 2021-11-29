import React from "react";
import Cronometro from "../components/Cronometro";
import Form from "../components/Form";
import List from "../components/List";
import { TaskProvider } from "../contexts/TaskContext";
import { TimerProvider } from "../contexts/TimeContext";

import style from "./app.module.scss";

function App() {
  return (
    <div className={style.AppStyle}>
      <TaskProvider>
        <Form />
        <List />
        <TimerProvider>
          <Cronometro />
        </TimerProvider>
      </TaskProvider>
    </div>
  );
}

export default App;
