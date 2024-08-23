import './App.css';

import Header from './components/Header/Header';

import { useState } from 'react';

const App = () => {

  const [userInput , setUserInput] = useState('');

  const [todo , setTodo] = useState([]);

  const onUserInput = (e) => {
    setUserInput(e.target.value);
    console.log(e.target.value);
  };

  const saveTodo = () =>{
    setTodo([...todo, userInput]);
    console.log(todo);
  }

  return (
    <>
      <div className='container'>
        <Header/>

        <div className='modal'>
          <input type='text' className='task_input' onChange={onUserInput}/>
          <button onClick={saveTodo}>Add Task</button>
        </div>
      

        <div className="task-header">
          <h1>Tasks</h1>
        </div>
        
        <div className="task-container">
        {todo.map(item =>{
            return (<><div className="todo">
            <p>{item}</p>
          </div></>);
          })}


          
        </div>
      </div>
    </>
  );
};

export default App;