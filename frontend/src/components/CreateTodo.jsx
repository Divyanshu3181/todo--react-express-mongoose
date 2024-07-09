import { useState } from "react";

export function CreateTodo({ onTodoAdded }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const isFormValid = title.trim() !== "" && description.trim() !== "";

  const handleSubmit = () => {
    if (!isFormValid) {
      alert("Both title and description are required!");
      return;
    }

    fetch("http://localhost:3000/todos", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: { "content-type": "application/json" }
    })
    .then(async function(res) {
      const json = await res.json();
      if (res.status === 200) {
        onTodoAdded(json.todo); // Assuming the response includes the new todo item
        alert("Todo added");
        setTitle(""); // Clear the title
        setDescription(""); // Clear the description
      } else {
        alert(json.msg);
      }
    });
  };

  return (
    <div className="card">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        style={{
          padding: 10,
          margin: 10
        }}
      />
      <br />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        style={{
          padding: 10,
          margin: 10
        }}
      />
      <br />
      <button
        onClick={handleSubmit}
        disabled={!isFormValid}
        style={{
          padding: 10,
          margin: 10,
          backgroundColor: isFormValid ? '#1a1a1a' : '#cccccc',
          cursor: isFormValid ? 'pointer' : 'not-allowed'
        }}
      >
        Add a todo
      </button>
    </div>
  );
}
