import React from "react";
import "./styles.css";
let id = 0;
const Todo = props => (
  <li>
    <input
      type="checkbox"
      checked={props.todo.checked}
      onChange={props.onToggle}
    />
    <button onClick={props.onDelete}>Delete</button>
    <span>{props.todo.text}</span>
  </li>
);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  addToDo() {
    const text = prompt("Add Todo  Text");
    this.setState({
      todos: [...this.state.todos, { id: id++, text: text, checked: false }]
    });
  }

  removeToDo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  toggleToDO(id) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id !== id) return todo;
        return {
          id: todo.id,
          text: todo.text,
          checked: !todo.checked
        };
      })
    });
  }
  render() {
    return (
      <div>
        <div>Todos Count: {this.state.todos.length}</div>
        <div>
          UncheckedTodos Count:
          {this.state.todos.filter(todo => !todo.checked).length}
        </div>
        <button onClick={() => this.addToDo()}>Add Todo</button>
        <ul>
          {this.state.todos.map(todo => (
            <Todo
              onToggle={() => this.toggleToDO(todo.id)}
              onDelete={() => this.removeToDo(todo.id)}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    );
  }
}
