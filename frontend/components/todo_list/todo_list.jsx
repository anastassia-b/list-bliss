import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    const { todos, createTodo } = this.props;
    const todoItems = todos.map(todo => (
      <TodoListItem key={ todo.id } todo={ todo } />
      )
    );

    return (
      <div>
        <TodoForm createTodo={ createTodo } />
        <ul className="todo-list">
          {todoItems}
        </ul>
      </div>
    );
  }
}

export default TodoList;
