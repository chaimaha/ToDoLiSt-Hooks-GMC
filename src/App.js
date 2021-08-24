import "./App.css";
import { useState } from "react";
import Todo from "./assets/Todo";

function App() {
  const [Data, setData] = useState([
    { name: "task1", id: Math.random() },
    { name: "task2", id: Math.random() },
    { name: "task2", id: Math.random() },
  ]);
  const adding = (text) =>
    setData(Data.concat({ name: text, id: Math.random() }));
  const delate = (id) => setData(Data.filter((ele) => ele.id !== id));
  return (
    <div className="App">
      <Todo Data={Data} Add={adding} Delate={delate}></Todo>
    </div>
  );
}

export default App;
