import React from "react";
import Table from "../Table";
import TableHead from "../TableHead"
import TableBody from "../TableBody"
import TableBodyItem from "../TableBodyItem"
import Row from "../Row";
import Btn from "../Btn";
import Search from "../Search";

function Container() {
    return (
        <div className="container">
            <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, corrupti! Lorem ipsum dolor
            sit amet.</p>
            <Row>
                <Search />
                <Btn />
            </Row>
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