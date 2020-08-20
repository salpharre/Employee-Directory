import React from 'react';
import "./style.css";
//Table head, labels for each column
function TableHead() {
    return (
        <thead>
            <tr>
                <th scope="col">Picture</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">DOB</th>
            </tr>
        </thead>
    );
};

export default TableHead;

