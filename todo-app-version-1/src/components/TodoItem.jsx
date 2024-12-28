function TodoItem({ todoname, date, onDeleteClick }) {
    return (
      <div className="container text-center my-3">
        <div className="row align-items-center">
          <div className="col-4 kg-row fw-bold">{todoname}</div>
          <div className="col-4 kg-row text-muted">{date}</div>
          <div className="col-4 kg-button">
            <button
              type="button" className="btn btn-danger btn-sm" onClick={() => onDeleteClick(todoname)}> Delete </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default TodoItem;
  