import React from "react";
import "./style.css";
//Button for alphabetizing users by name, listens for the click to sort and change the text of the button
function Btn(props) {
    return (
        <div className="col-3 d-inline">
            <div className="btn btn-success" onClick={props.changeButtonText}>{props.text}</div>
        </div>
    );
};

export default Btn;