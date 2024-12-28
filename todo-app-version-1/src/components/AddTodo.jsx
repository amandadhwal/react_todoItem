function AddTodo({onNewItem })
{
    return(
     <div class="container-center">
     <div class="row">
      <div class="col-4 kg-row"><input type="text" placeholder="entre the item here"></input></div>
      <div class="col-4 kg-row"><input type="date"  placeholder="dd/mm/yy"></input></div>
      <div class="col-4 kg-button kg-row kg-button"><button type="button" class="btn btn-success" onClick={()=>onNewItem}>added</button></div>
     </div>
     </div>
    )
}
export default AddTodo;