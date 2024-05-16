import React from "react";

function ItemForm({
  addToDo,
  inputtitle,
  setInputtitle,
  inputtodo,
  setInputToDo,
}) {
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
      <button className="btnStyle">확인</button>
    </form>
  );
}

export default ItemForm;
