import TodoRowItem from "./ToDoRowItem"
function TodoTable(props) {
    return(
        <table className='table table-hover'>
            <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Description</th>
                    <th scope='col'>Assigned</th>
                </tr>
            </thead>
            <tbody>
              {props.todos.map(todo => (
                <TodoRowItem
                key = {todo.rowNumber} 
                rowNumber = {todo.rowNumber} 
                rowDescription = {todo.rowDescription} 
                rowAssigned = {todo.rowAssigned}
                removeRow = {props.removeRow}/>
              ))}
            </tbody>
          </table>
    )
}
export default TodoTable