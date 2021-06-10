import React from "react";

const Form = ({ inputText, setInputText, todos, setTodos }) => {
  let styles;
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    // console.log(inputText.length);
    // console.log();
    // if (inputText.length === 0) {
    //      styles =
    //   e.target.style.animation = "shake 0.5s linear";
    //   e.target.addEventListener("animationend", () => {
    //     e.target.style.animation = "";
    //     return;
    //   });
    // } else {
    // }
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  return (
    <form>
      <input
        style={styles}
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        placeholder="New note"
        className="todo-input"
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
    </form>
  );
};

export default Form;
