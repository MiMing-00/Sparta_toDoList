import { useState } from "react";
import "./App.css";

function App() {
  const [inputtodo, setInputToDo] = useState("");
  const [inputtitle, setInputtitle] = useState("");
  const [todolists, setToDoList] = useState([]);

  // 추가
  const addToDo = (event) => {
    event.preventDefault();

    if (!inputtodo.trim() || !inputtitle.trim()) {
      alert("제목과 할 일을 모두 입력해주세요.");
      return;
    }

    setToDoList([
      ...todolists,
      { id: Date.now(), text: inputtodo, title: inputtitle, isDone: false },
    ]);
    setInputtitle("");
    setInputToDo("");
  };

  // 삭제 메서드 구현 + filter
  const deleteTodolist = (id) => {
    setToDoList(todolists.filter((todolist) => todolist.id !== id));
  };

  // switch 상태 구현 + map 메서드
  const switchTodolist = (id) => {
    setToDoList(
      todolists.map((todolist) =>
        todolist.id === id
          ? { ...todolist, isDone: !todolist.isDone }
          : todolist
      )
    );
  };

  const renderTodolist = (isDone) => {
    return (
      <ul className="ulStyle">
        {todolists
          .filter((item) => item.isDone === isDone)
          .map(({ id, title, text }) => (
            <li key={id} className="liStyle">
              <div className="titleText">
                <span className="title">{title}</span>
                <span className="text">{text}</span>
              </div>
              <div className="buts">
                <button onClick={() => switchTodolist(id)} className="btnStyle">
                  {isDone === false ? "완료" : "취소"}
                </button>
                <button onClick={() => deleteTodolist(id)} className="btnStyle">
                  삭제
                </button>
              </div>
            </li>
          ))}
      </ul>
    );
  };

  return (
    <div className="container">
      <h1>To Do List</h1>
      <form onSubmit={addToDo} className="formStyle">
        <input
          type="text"
          width="25%"
          className="inputStyle"
          placeholder="제목"
          value={inputtitle}
          onChange={(event) => setInputtitle(event.target.value)}
        ></input>
        <input
          type="text"
          width="25%"
          className="inputStyle"
          placeholder="내용"
          value={inputtodo}
          onChange={(event) => setInputToDo(event.target.value)}
        ></input>
        <button className="btnStyle">확인</button>
      </form>
      <h3 className="wdzone">Working 🔥</h3>
      {renderTodolist(false)}
      <h3 className="wdzone">Done! 🎂🎉</h3>
      {renderTodolist(true)}
    </div>
  );
}

export default App;
