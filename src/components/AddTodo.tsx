import React, { useState } from "react";

type Props = {
  addTodo: (e: React.FormEvent, formData: ITodo | any) => void;
};

const AddTodo: React.FC<Props> = ({ addTodo }) => {
  const [formData, setFormData] = useState<ITodo | {}>();

  const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  return (
    <form
      className="Form"
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(e, formData);
        e.currentTarget.reset();
        setFormData({});
      }}
    >
      <div>
        <div>
          <label htmlFor="name">Name</label>
          <input onChange={handleForm} type="text" id="name" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input onChange={handleForm} type="text" id="description" />
        </div>
      </div>
      <div>
        <button id="btn">Add Todo</button>
      </div>
    </form>
  );
};

export default AddTodo;
