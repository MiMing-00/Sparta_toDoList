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

  // switch 상태 구현  + findIndex 매서드
  //맵은 자체적으로 배열 반환 하지만 findindex는 찾는 거니까 새로운 배열 만들기
  //find는 안 되는 건가??
  // const index = (id) => {
  //   todolists.findIndex((item) => item.id === id);

  //   if (index !== -1) {
  //     const newToDoList = [...todolists];
  //     newToDoList = { ...newToDoList, isDone: !newToDoList.isDone };
  //   }
  // };

  // const findID = (id) => {
  //   todolists.find((item) => item.id === id);

  //   if

  // }

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
