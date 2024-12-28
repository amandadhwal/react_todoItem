//send data to TodoItem.jsx file
import TodoItem from './TodoItem.jsx';
function Todoitems({todoItems})
{
      return <div>
        {todoItems.map((item)=>(<TodoItem todoname={item.name} date={item.date} ></TodoItem>))}
        {/* <TodoItem todoname={todoItems} date={todoItems}></TodoItem> */}
    </div>
}
export default Todoitems;