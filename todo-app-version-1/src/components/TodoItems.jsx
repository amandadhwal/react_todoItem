import TodoItem from './TodoItem.jsx';

function TodoItems({ todoItems, onDeleteClick }) {
  return (
    <div>
      {
        todoItems.map((item) => (<TodoItem key={item.name} todoname={item.name} date={item.date} onDeleteClick={onDeleteClick} />   ))
      }
    </div>
  );
}

export default TodoItems;
