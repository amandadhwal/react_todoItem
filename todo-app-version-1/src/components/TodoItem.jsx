//recive data from Todoitems.jsx
function TodoItem({todoname,date})
{
    // let todoname ="Buy Milk";
    // let date = "4/11/2022";
    return(
        <div className="container-center">
        <div className="row">
            <div className="col-4 kg-row">{todoname}</div>
            <div className="col-4 kg-row">{date}</div>
            <div className="col-4 kg-button"><button type="button" class="btn btn-danger">Delete</button></div>
        </div>
    </div>
    )
}

export default TodoItem;