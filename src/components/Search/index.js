import React from "react";
import "./style.css";
//Input to search by name, listens for handleinputchange that triggers the useEffect using debounced, changing displayed users based on words typed
//props.value to be grabbed by handleinputchange
function Search(props) {
    return (
        <div className="col-6 d-inline">
            <input
            value={props.value}
            onChange={props.handleInputChange}
            className="form-control mb-3" 
            type="text" 
            placeholder="Enter Name" 
            />
        </div>
    );
};

export default Search;
