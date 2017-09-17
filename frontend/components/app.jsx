import React from 'react';
import TodoListContainer from './todo_list/todo_list_container';

const App = () => (
  <div className="app">
    <h1>Welcome to List Bliss!</h1>
    <h3>Where tasks go when they're finished.</h3>
    <TodoListContainer />
  </div>
);

export default App;
