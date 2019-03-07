import React from "react";
import { compose } from 'recompose';

// Using HOCs to display message in todoList. 
const isLoadingConditionFn = (props) => props.loading;
const nullConditionFn = (props) => props.todos === null;
const isEmptyConditionFn = (props) => Object.keys(props.todos).length === 0

const EmptyMessage = () =>
  <div>
    <p className="empty-message">You have no Todos.</p>
  </div>

const LoadingIndicator = () =>
  <div>
    <p>Loading todos ...</p>
  </div>

const withMaybe = (conditionalRenderingFn) => (Component) => (props) =>
  conditionalRenderingFn(props)
    ? null
    : <Component { ...props } />

const withEither = (conditionalRenderingFn, EitherComponent) => (Component) => (props) =>
  conditionalRenderingFn(props)
    ? <EitherComponent />
    : <Component { ...props } />

const withConditionalRenderings = compose(
  withEither(isLoadingConditionFn, LoadingIndicator),
  withMaybe(nullConditionFn, EmptyMessage),
  withEither(isEmptyConditionFn, EmptyMessage)
);

const TodoList = ({ todos, deleteTodo, onToggle, status}) => {
    const displayTodo = status === 'all' ? todos : todos.filter(todo => todo.status === status);
    return (
      <ul class="todo-list">
        {displayTodo.map((todo, index) => (
          <li>
            <div class="view">
              <input class="toggle" type="checkbox" id={`todo-${index}`} checked={todo.status === 'done'} onChange={(e) => {onToggle(todo);}} />
              <label htmlFor={`todo-${index}`}>{todo.name}</label>
              <button type="button" class="destroy" onClick={() => { deleteTodo(index);}}></button>
            </div>
          </li>
        ))}
      </ul>
    )
};

export default withConditionalRenderings(TodoList);


