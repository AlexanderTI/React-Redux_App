import React from 'react';

const TableRow = (props) => {
    const {
        id,
        title,
        description,
        createdAt,
        onDelete
    } = props

    return(
        <tr>
            <td>{id}</td>
            <td>{title}</td>
            <td>{description}</td>
            <td>{createdAt}</td>
            <td>
                <button onClick={onDelete}>Delete</button>
                <button>Show</button>
            </td>
        </tr>
    )
}

export default TableRow;