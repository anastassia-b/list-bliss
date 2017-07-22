import React from 'react';

class TodoDetailView extends React.Component {
  componentDidMount() {

  }

  render() {
    const { todo, destroyTodo } = this.props;
    return(
      <div>
        <p className="todo-body">{todo.body}</p>
        <button className="delete-button" onClick={destroyTodo}>
          Delete Todo
        </button>
      </div>
    );
  }
}

export default TodoDetailView;
