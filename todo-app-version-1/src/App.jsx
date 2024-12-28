import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppName from './components/AppName.jsx';
import AddTodo from './components/AddTodo.jsx';
// import Todoitem from './components/TodoItem.jsx';
import TodoItems from './components/TodoItems.jsx';

function App() 
{
   // const todoItems=[
   //    {
   //       name:"aman",
   //       date:"12/12/2023",
   //    },
   //    {
   //       name:"pragya",
   //       date:"02/11/2025",
   //    },
   //    {
   //       name:"jenin",
   //       date:"02/02/2012",
   //    },
   // ];

   const [todoItems , setTodoItems] = useState[initialTodoItems];

   const handleNewItem =(itemName,itemDate) =>
   {
         console.log(itemName);

   };

   const appname="Todo list app";
    return( <center className="todo-container">
      <h1>Aman Dadhwal</h1>
      <AppName Appname={appname}></AppName>
      <AddTodo onNewItem ={handleNewItem}/>
      <TodoItems todoItems={todoItems}></TodoItems>
   </center>
    )

}
export default App
