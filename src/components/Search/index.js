import React from "react";

function Search(props) {
    return (
        <div className="col-6 d-inline">
            <input
            // value={props.searchedUser} 
            onChange={props.handleInputChange}
            className="form-control mb-3" 
            type="text" 
            placeholder="Default input" 
            />
        </div>
    );
};

export default Search;

/*value={}*/ //in starting input element