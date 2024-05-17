import React from "react";
import ToDoItem from "./ToDoItem";

function RenderToDoList({ isDone, todolists, setToDoList }) {
  return (
    <>
      <h3 className="wdzone">{isDone ? "Done! 🎂🎉" : "Working 🔥"}</h3>
      <ul className="ulStyle">
        {todolists.map((maptodo) => (
          <li key={maptodo.id} className="liStyle">
            <ToDoItem setToDoList={setToDoList} maptodo={maptodo} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default RenderToDoList;
