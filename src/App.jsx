import { useState } from "react";
import ItemForm from "../component/ItemForm";
import RenderToDoList from "../component/RenderToDoList";
import "./App.css";

function App() {
  const [inputtitle, setInputtitle] = useState("");
  const [inputtodo, setInputToDo] = useState("");
  const [todolists, setToDoList] = useState([
    {
      id: 1,
      title: "리액트 공부하기!",
      text: "리액트 신기해~!",
      isDone: false,
    },
    {
      id: 2,
      title: "JS 복습하기!",
      text: "복습~!",
      isDone: true,
    },
  ]);

  // 추가
  const addToDo = (event) => {
    event.preventDefault();

    if (!inputtodo.trim() || !inputtitle.trim()) {
      alert("제목과 할 일을 모두 입력해주세요.");
      return;
    }

    setToDoList([
      ...todolists,
      { id: Date.now(), title: inputtitle, text: inputtodo, isDone: false },
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
      {/* Form */}
      <ItemForm
        addToDo={addToDo}
        inputtitle={inputtitle}
        setInputtitle={setInputtitle}
        inputtodo={inputtodo}
        setInputToDo={setInputToDo}
      />
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
