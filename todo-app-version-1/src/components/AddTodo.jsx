import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDate, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  const handleAddButtonClicked = () => {
    if (todoName.trim() === "" || todoDate.trim() === "") {
      alert("Please fill in both the task name and due date.");
      return;
    }

    onNewItem(todoName, todoDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container text-center my-3">
      <div className="row">
        <div className="col-4">
          <input
            type="text"
            className="form-control"
            placeholder="Enter the item here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className="form-control"
            value={todoDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-4">
          <button
            type="button"
            className="btn btn-success"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
