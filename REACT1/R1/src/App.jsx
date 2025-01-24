import { useState } from 'react';
import TODO from "../src/project1/TODO";
import Form from "./project1/Form";
import FilterButton from "./project1/FilterButton";
import './App.css'

function App(props) {

  const taskList = props.tasks?.map((task)=>(

    <TODO 
    id={task.id} 
    name={task.name}  
    completed={task.completed}
    key={task.id}
    />


  ) )

  function addTask(name) {
    alert(name);
  }
  

 
  

  return (
    <>
     <div>
     <Form addTask={addTask} />
      <div>
        <FilterButton />
        <FilterButton />
        <FilterButton />
      </div>


     </div>
     <ul
  role="list"
  className="todo-list stack-large stack-exception"
  aria-labelledby="list-heading">
  {taskList}
</ul>

    
    </>
  )
}

export default App;
