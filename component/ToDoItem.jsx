import React from "react";

function ToDoItem({ setToDoList, maptodo }) {
  // 삭제 메서드 구현 + filter
  const deleteTodolist = () => {
    setToDoList((prev) =>
      prev.filter((todolist) => todolist.id !== maptodo.id)
    );
  };

  // switch 상태 구현 + map 메서드
  const switchTodolist = () => {
    setToDoList((prev) =>
      prev.map((todolist) =>
        todolist.id === maptodo.id
          ? { ...todolist, isDone: !todolist.isDone }
          : todolist
      )
    );
  };
  return (
    <>
      <div className="titleText">
        <span className="title">{maptodo.title}</span>
        <span className="text">{maptodo.text}</span>
      </div>
      <div className="buts">
        <button onClick={switchTodolist} className="btnStyle">
          {maptodo.isDone ? "취소 ↩️" : "완료 ✔️"}
        </button>
        <button onClick={deleteTodolist} className="btnStyle">
          삭제 ☠️
        </button>
      </div>
    </>
  );
}

export default ToDoItem;
