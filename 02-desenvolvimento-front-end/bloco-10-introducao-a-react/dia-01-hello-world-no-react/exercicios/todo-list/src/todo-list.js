import React, { Component } from 'react';
import './todo-list.css'

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}


const tasksList = ['Estudar', 'Limpar a casa', 'Limpar cantinho das gatas', 'Tomar banho', 'Almoçar'];

class GetList extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Todo List:</h1>
        <ul>{tasksList.map(taskItem => Task(taskItem))}</ul>
      </div>
    );
  }
}



export { GetList };