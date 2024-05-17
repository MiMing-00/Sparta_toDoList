import React, { useState } from "react";

function ItemForm({ todolists, setToDoList }) {
  const [inputtitle, setInputtitle] = useState("");
  const [inputtodo, setInputToDo] = useState("");

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

  return (
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
      <button className="btnStyle" type="submit">
        확인
      </button>
    </form>
  );
}

export default ItemForm;
