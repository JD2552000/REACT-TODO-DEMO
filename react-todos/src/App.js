import './App.css';
import TodoTable from './components/ToDoTable';
import React, {useState} from 'react'
import NewToDoForm from './components/NewToDoForm';

function App() {
  //Destructing the useState, it will return the current state and a function
  // in which we want to update our state
  let [todos, setToDo] = useState( [
    {rowNumber: 1, rowDescription: 'Play Tennis', rowAssigned: 'User1'},
    {rowNumber: 2, rowDescription: 'Clean House', rowAssigned: 'User2'},
    {rowNumber: 3, rowDescription: 'Make Food', rowAssigned: 'User3'},
    {rowNumber: 4, rowDescription: 'Read Fiction Book', rowAssigned: 'User4'}
  ])

  const addToDo = (description, assigned) => {
    let rowNumber = 0
    if(todos.length > 0) {
      rowNumber = todos[todos.length-1].rowNumber + 1
    } else {
      rowNumber = 1
    }
      const newToDo = {
        rowNumber: rowNumber,
        rowDescription: description,
        rowAssigned: assigned
      }
      //First we will destructure current todo to get all previous values and then pass it with new ToDo
      //to get the new values.
      setToDo([...todos, newToDo])
  }

  const removeRow = (deleteRowNumber) => {
    todos = todos.filter((value) => {
      return value.rowNumber !== deleteRowNumber
    })
    setToDo(todos)
  }

  return (
    <div className='mt-5 container'>
      <div className='card'>
        <div className='card-header'>
          Your Todo's
        </div>
        <div className='card-body'>
          <TodoTable todos={todos} removeRow={removeRow}/>
          <button className='btn btn-primary mb-1 ml-1' onClick={addToDo}>Add  New ToDo</button>
          <NewToDoForm addToDo={addToDo}/>
        </div>
      </div>
    </div>
  );
}

export default App;
