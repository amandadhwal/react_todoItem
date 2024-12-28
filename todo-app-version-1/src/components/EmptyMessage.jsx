function EmptyMessage({todoItems})
{
    return <div>
        {todoItems.length === 0 && <h2>To do is Empty</h2>}
    </div>
}
export default EmptyMessage;