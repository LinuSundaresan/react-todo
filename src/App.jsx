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

  const onInputKeyDown = (e) => {
    if(e.key == 'Enter'){
      saveTodo();
    }
  };

  const saveTodo = () =>{
    setTodo([...todo, {text: userInput, isCompleted: false}]);
    setUserInput('');
  }

  const onCheck = (i , e) => {
    const todoCopy = [...todo];
    todoCopy[i].isCompleted = e.target.checked;
    setTodo(todoCopy); 
  }

  const deleteTask = (index) =>{
    const todoCopy = [...todo];
    todoCopy.splice(index, 1);
    setTodo(todoCopy);
  };

  return (
    <>
      <div className='container'>
        <Header/>

        <div className='modal'>
          <input type='text' className='task_input' onChange={onUserInput} value={userInput} onKeyDown={onInputKeyDown}/>
          <button onClick={saveTodo}>Add Task</button>
        </div>
      

        <div className="task-header">
          <h1>Tasks</h1>
        </div>
        
        <div className="task-container">
        {todo.map((item,index) =>{
            return (<><div className="todo">
              <p className='todoNumber'>{index+1}. </p>
              <input type="checkbox" name="check_todo" id='check_todo' onChange={(e)=>{onCheck(index, e)}}/>
              <p className='todoItemText' style={{textDecoration : item.isCompleted? 'line-through' : 'none'}}>{item.text}</p>
              <i className="fa fa-trash" onClick={()=>{
               deleteTask(index)}}></i>
            </div></>);
          })}


          
        </div>
      </div>
    </>
  );
};

export default App;