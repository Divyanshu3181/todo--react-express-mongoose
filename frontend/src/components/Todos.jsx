export function Todos({ todos }) {
    return (
      <div>
        {todos.map((todo, index) => (
          <div className="card" key={index}>
            <h1>{todo.title}</h1>
            <h2>{todo.description}</h2>
            <button>{todo.completed ? "Completed" : "Mark as complete"}</button>
          </div>
        ))}
      </div>
    );
  }
  