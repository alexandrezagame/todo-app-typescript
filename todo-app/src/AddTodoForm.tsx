import React, { useState, ChangeEvent, FormEvent } from "react";

interface AddTodoFormProps {
  addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  }

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTodo(newTodo);
    TogetherJS.send({type: "event1"});
    setNewTodo("");
  }

  return (
    <form>
      <input type="text" value={newTodo} onChange={handleChange}/>
      <button type="submit" onClick={handleSubmit}>Add Todo</button>
    </form>
  );
};