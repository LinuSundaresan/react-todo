import './App.css';

import Header from './components/Header/Header';

import Navbar from './components/Navbar/Navbar';

import { useState } from 'react';

const App = () => {

  const [userInput , setUserInput] = useState('');

  const [todo , setTodo] = useState([]);

  const [option, setOption] = useState(['All']);

  const [showEdit , setShowEdit] = useState(false);

  const [selectedTodo , setSelectedTodo] = useState(undefined);

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

  const editTask = (index) => {
    setShowEdit(true);
    console.log(todo[index].text);
    setSelectedTodo(todo[index]);
  };

  const deleteTask = (index) =>{
    const todoCopy = [...todo];
    todoCopy.splice(index, 1);
    setTodo(todoCopy);
  };

  const filterTodo = () => {
    if(option == 'Completed') {
      return todo.filter(item => item.isCompleted);
    } else if(option == 'Pending') {
      return todo.filter(item => !item.isCompleted);
    } else if(option == 'All') {
      return todo;
    }
  };



  

  return (
    <>
      <div className='container'>

        <div className='layer' style={{display : showEdit? 'block' : 'none' }} onClick={()=>{setShowEdit(false)}}></div>

        <div className='edit-box'  style={{display : showEdit? 'block' : 'none' }}>
          <i className='fa fa-xmark' onClick={()=>{setShowEdit(false)}}></i>
          <input type="text" name='edit-todo' value = {selectedTodo+1 ? selectedTodo.text: ""} />
          <button type="button" name="edit-button"><i className='fa fa-edit'></i>Edit Task</button>
        </div>
        <Header/>

        <div className='modal'>
          <input type='text' className='task_input' onChange={onUserInput} value={userInput} onKeyDown={onInputKeyDown}/>
          <button onClick={saveTodo}>Add Task</button>
        </div>
      
        <nav>
            <a onClick={()=>setOption('All')}>All Tasks</a>
            <a onClick={()=>setOption('Pending')}>Pending</a>
            <a onClick={()=>setOption('Completed')}>Completed</a>
        </nav>

        <div className="task-header">
          <h1>Tasks</h1>
        </div>
        
        <div className="task-container">
        {filterTodo().map((item,index) =>{
            return (<><div className="todo">
              <p className='todoNumber'>{index+1}. </p>
              <input type="checkbox" 
              name="check_todo" 
              id='check_todo' 
              checked={item.isCompleted}
              onChange={(e)=>{onCheck(index, e)}} />

              <p className='todoItemText' style={{textDecoration : item.isCompleted? 'line-through' : 'none'}}>{item.text}</p>

              <i className="fa fa-edit" onClick={()=> {editTask(index)}}></i>

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