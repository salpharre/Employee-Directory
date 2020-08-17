import React from "react";
import Table from "../Table";
import TableHead from "../TableHead"
import TableBody from "../TableBody"
import TableBodyItem from "../TableBodyItem"

function Container() {
    return (
        <div className="container">
            {/*Put search bar here*/}
            {/*Put sorting button here, with instructions*/}
            <Table>
                <TableHead />
                <TableBody>
                    <TableBodyItem />
                    <TableBodyItem />
                </TableBody>
            </Table>
        </div>
    );
};

export default Container;