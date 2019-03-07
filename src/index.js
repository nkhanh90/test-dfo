import React from "react";
import ReactDOM from "react-dom";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoFilters from "./TodoFilters";
import useTodoState from "./state/useTodoState";
import "./styles.css";

const App = () => {
  const { todos, addTodo, deleteTodo, onToggle, applyFilter, status } = useTodoState([]);
  return (
    <section className="todoapp">
      <div>
        <header className="header"><h1>todos</h1>
          <TodoForm
            saveTodo={todoText => {
              const trimmedText = todoText.trim();

              if (trimmedText.length > 0) {
                addTodo({
                  name: trimmedText,
                  status: "active"
                });
              }
            }}
          />

        </header>
        
        <section className="main">
          <TodoList todos={todos} deleteTodo={deleteTodo} onToggle={onToggle} status={status}/>
        </section>
        
        <footer className="footer">
          <TodoFilters applyFilter={applyFilter} status={status}/>
        </footer>
      </div>
    </section>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
