import { useState } from "react";
import RenderToDoList from "../component/RenderToDoList";
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
      {/* Working 🔥 */}
      <RenderToDoList
        isDone={false}
        todolists={todolists.filter((item) => !item.isDone)}
        switchTodolist={switchTodolist}
        deleteTodolist={deleteTodolist}
      />
      {/* Done! 🎂🎉 */}
      <RenderToDoList
        isDone={true}
        todolists={todolists.filter((item) => item.isDone)}
        switchTodolist={switchTodolist}
        deleteTodolist={deleteTodolist}
      />
    </div>
  );
}

export default App;
