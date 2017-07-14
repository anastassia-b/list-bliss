import React from 'react';
import merge from 'lodash/merge';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { todo } = this.props;
    const { title, done } = todo;

    return (
      <li className="todo-list-item">
        <div className="todo-header">
          <a>{title}</a>
        </div>
      </li>
    );
  }
}


export default TodoListItem;
