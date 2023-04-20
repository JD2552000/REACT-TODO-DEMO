function TodoRowItem(props) {
    const removeRow = () => {
        console.log(props)
        props.removeRow(props.rowNumber)
      }
    return(
        <tr>
            <th scope='row'>{props.rowNumber}</th>
            <td>{props.rowDescription}</td>
            <td>{props.rowAssigned}</td>
            <button onClick={removeRow}>delete</button>
        </tr>
    )
}

export default TodoRowItem