import React, { Component } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

class TodoList extends Component {
  state = {
    todos: [],
    todosToShow: "all",
  };

  addTodo = (todo) => {
    this.setState({
      todos: [todo, ...this.state.todos],
    });
  };
  toggleComplete = (id) => {
    this.setState({
        todos: this.state.todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed
                }
            } else {
                return todo;
            }
        })
    });
};

updateTodoToShow = (s) => {
    this.setState({
        todosToShow: s
    });
};

onDelete = (id) => {
    this.setState({
        todos:  this.state.todos.filter(todo => todo.id !== id)
    });
};

removeAllCompleted = () => {
    this.setState({
        todos: this.state.todos.filter( todo => !todo.completed)
    });
};
  render() {
    let todos = [];
    if (this.state.todosToShow === "all") {
      todos = this.state.todos;
    } else if (this.state.todosToShow === "active") {
      todos = this.state.todos.filter((todo) => !todo.completed);
    } else if (this.state.todosToShow === "completed") {
      todos = this.state.todos.filter((todo) => todo.completed);
    }

    return (
      <div className="list">
        <TodoForm onSubmit={this.addTodo} />
        <div className="leftodos">
          TodosLeft:{this.state.todos.filter((todo) => !todo.completed).length}
        </div>
        {todos.map((todo) => {
          return (
            <Todo
              onDelete={() => this.onDelete(todo.id)}
              toggleComplete={() => {
                this.toggleComplete(todo.id);
              }}
              oneTodo={todo}
            />
          );
        })}
        <div class=" text-center mt-5">
          <button onClick={() => this.updateTodoToShow("all")} class="btn btn-primary" type="button">
            All
          </button>
          <button  onClick={() => this.updateTodoToShow("active")} class="btn btn-primary" type="button">
            Active
          </button>
          <button onClick={() => this.updateTodoToShow("completed")} class="btn btn-primary" type="button">
            Completed
          </button>
        </div>
      </div>
    );
  }
}

export default TodoList;
