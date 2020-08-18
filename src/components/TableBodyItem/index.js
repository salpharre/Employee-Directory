import React from 'react';

//this will need props
function TableBodyItem(props) {
    return (
        <tr>
            <td>
                <img alt={props.name} src={props.picture}></img>
            </td>
            <td>{props.name}</td>
            <td>{props.phone}</td>
            <td>{props.email}</td>
            <td>{props.dob}</td>
        </tr>
    );
};

export default TableBodyItem;