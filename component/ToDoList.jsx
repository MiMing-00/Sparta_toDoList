import React, { useState } from "react";
import ItemForm from "./ItemForm";
import RenderToDoList from "./RenderToDoList";

const ToDoList = () => {
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

  return (
    <div className="container">
      <h1>To Do List</h1>
      {/* Form */}
      <ItemForm todolists={todolists} setToDoList={setToDoList} />
      {/* Working 🔥 */}
      <RenderToDoList
        isDone={false}
        todolists={todolists.filter((item) => !item.isDone)}
        setToDoList={setToDoList}
      />
      {/* Done! 🎂🎉 */}
      <RenderToDoList
        isDone={true}
        todolists={todolists.filter((item) => item.isDone)}
        setToDoList={setToDoList}
      />
    </div>
  );
};
export default ToDoList;
