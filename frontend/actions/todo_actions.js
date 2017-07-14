import * as TodoAPIUtil from '../util/todo_api_util';

export const RECEIVE_TODO = "RECEIVE_TODO";
export const RECEIVE_TODOS = "RECEIVE_TODOS";

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = todo => ({
  type: RECEIVE_TODO,
  todo
});

export const fetchTodos = () => dispatch => (
  TodoAPIUtil.fetchTodos().then(todos => dispatch(receiveTodos(todos)))
);

export const fetchTodo = () => dispatch => (
  TodoAPIUtil.fetchTodo().then(todo => dispatch(receiveTodo(todo)))
);

export const createTodo = todo => dispatch => (
  TodoAPIUtil.createTodo(todo).then(todo => dispatch(receiveTodo(todo)))
);
