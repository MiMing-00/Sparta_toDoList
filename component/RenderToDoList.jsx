import React from "react";

function RenderToDoList({ isDone, todolists, switchTodolist, deleteTodolist }) {
  return (
    <>
      <h3 className="wdzone">{isDone ? "Done! 🎂🎉" : "Working 🔥"}</h3>
      <ul className="ulStyle">
        {todolists.map(({ id, title, text }) => (
          <li key={id} className="liStyle">
            <div className="titleText">
              <span className="title">{title}</span>
              <span className="text">{text}</span>
            </div>
            <div className="buts">
              <button onClick={() => switchTodolist(id)} className="btnStyle">
                {isDone ? "취소 ↩️" : "완료 ✔️"}
              </button>
              <button onClick={() => deleteTodolist(id)} className="btnStyle">
                삭제 ☠️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default RenderToDoList;
