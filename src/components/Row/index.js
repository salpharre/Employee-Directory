import React from "react";
//Row that wraps around search input and button
function Row(props) {
return <div className="row justify-content-center">{props.children}</div>
};

export default Row;