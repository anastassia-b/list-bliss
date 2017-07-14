import React from 'react';
import TodoListItem from './todo_list_item';

class TodoList extends React.Component {
  componentDidMount() {
    // this.props.requestTodos();
  }

  render() {
    const { todos } = this.props;
    console.log(this.props);
    // const todoItems = todos.map(todo => (
    //   <TodoListItem key={ todo.id } todo={ todo } />
    //   )
    // );

    return (
      <div>
        <ul className="todo-list">
          todoItems
        </ul>
      </div>
    );
  }
}

export default TodoList;
