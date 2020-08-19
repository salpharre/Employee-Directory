import React from "react";
import "./style.css";

function Btn(props) {
    return (
        <div className="col-3 d-inline">
            <div className="btn btn-success" onClick={props.changeButtonText}>{props.text}</div>
        </div>
    );
};

export default Btn;