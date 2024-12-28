import { useState } from 'react';
import './App.css';
import AppName from './components/AppName.jsx';
import AddTodo from './components/AddTodo.jsx';
// import Todoitem from './components/TodoItem.jsx';
import TodoItems from './components/TodoItems.jsx';
import EmptyMessage from './components/EmptyMessage.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [...todoItems, { name: itemName, date: itemDueDate }];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemsName) => {
    const newTodoItems = todoItems.filter(item => item.name !== todoItemsName);
    setTodoItems(newTodoItems);
  };

  const appname = "Todo list app";
  return (
    <div className="todo-container">
      <AppName Appname={appname}></AppName>
      <AddTodo onNewItem={handleNewItem} />
      <EmptyMessage todoItems={todoItems} />
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem} />
    </div>
  );
}

export default App;
