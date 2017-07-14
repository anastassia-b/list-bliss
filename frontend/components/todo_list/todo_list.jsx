import React from 'react';

class TodoList extends React.Component {
  componentDidMount() {
    this.props.requestTodos();
  }

  render() {
    const { todos } = this.props;
    const todoItems = todos.map(todo => (
      <li></li>
      )
    );
    return (
      <div>
        <ul className="todo-list">
          { todoItems }
        </ul>
      </div>
    );
  }
}

export default TodoList;
