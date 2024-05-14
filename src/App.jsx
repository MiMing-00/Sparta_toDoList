import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [inputtodo, setInputToDo] = useState("");
  const [inputtitle, setInputtitle] = useState("");
  const [todolists, setToDoList] = useState([]);

  //추가
  const addToDo = (event) => {
    event.preventDefault();

    if (!inputtodo.trim() || !inputtitle.trim()) {
      alert("할 일을 입력해주세요.");
      return;
    }

    setToDoList([
      ...todolists,
      { id: Date.now(), text: inputtodo, title: inputtitle, isDone: false },
    ]);
    setInputtitle("");
    setInputToDo("");
  };

  //삭제 매서드 구현 + filter
  const deleteTodolist = (id) => {
    setToDoList(todolists.filter((todolist) => todolist.id !== id));
  };

  // switch 상태 구현 + map 매서드
  const switchTodolist = (id) => {
    setToDoList(
      todolists.map((todolist) =>
        todolist.id === id
          ? { ...todolist, isDone: !todolist.isDone }
          : todolist.isDone
      )
    );
  };

  // switch 상태 구현 + findIndex() 해보기!
  // const switchTodolist =

  function renderTodolist(isDone) {
    return (
      <ul style={ulstyle}>
        {todolists
          .filter((item) => item.isDone === isDone)
          .map(({ id, title, text }) => (
            <li key={id} style={listyle}>
              <div style={divstyle}>
                <span style={spanstyle}>
                  {title}
                  {text}
                </span>
                <span>
                  <button onClick={() => switchTodolist(id)} style={btnStyle}>
                    {isDone === false ? "완료" : "취소"}
                  </button>
                  <button onClick={() => deleteTodolist(id)} style={btnStyle}>
                    삭제
                  </button>
                </span>
              </div>
            </li>
          ))}
      </ul>
    );
  }

  const style = {
    maxWidth: "1200px",
    minWidth: "800px",
    width: "100%",
    height: "100vh",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const wdzone = {
    fontWeight: "900",
  };

  const formStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "50px",
  };

  const inputstyle = {
    margin: "10px",
  };

  const ulstyle = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: "100%",
  };

  const divstyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const spanstyle = {};

  const listyle = {
    border: "1px solid black",
    borderRadius: "10px",
    margin: "20px auto",
    listStyleType: "none",
    fontWeight: "900",
    width: "60%",
    padding: "20px",
    gap: "10px",
  };

  const btnStyle = {
    border: "1px solid black",
    marginLeft: "10px",
  };

  return (
    <div style={style}>
      <h1>To Do List</h1>
      <form onSubmit={addToDo} style={formStyle}>
        <input
          type="text"
          width="25%"
          style={inputstyle}
          value={inputtitle}
          onChange={(event) => setInputtitle(event.target.value)}
        ></input>
        <input
          type="text"
          width="25%"
          style={inputstyle}
          value={inputtodo}
          onChange={(event) => setInputToDo(event.target.value)}
        ></input>
        <button style={btnStyle}>확인</button>
      </form>
      <h3 style={wdzone}>Working 🔥</h3>
      {renderTodolist(false)}
      <h3 style={wdzone}>Done! 🎂🎉</h3>
      {renderTodolist(true)}
    </div>
  );
}

export default App;
