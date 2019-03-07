import React from "react";
import useInputState from "./state/useInputState";

const TodoForm = ({ saveTodo }) => {
  const { value, reset, onChange } = useInputState();

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        saveTodo(value);
        reset();
      }}
    >
      <input className="new-todo" placeholder="Enter todo name here" type="text" onChange={onChange} value={value} />
    </form>
  );
};

export default TodoForm;
