import axios from 'axios';

export const getTodos = async (userId) => {
  const resp = await axios.get(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
  return resp.data;
};

export const postTodo = async (body) => {
  const resp = await axios.post('https://jsonplaceholder.typicode.com/todos', body);
  return resp.data;
};
