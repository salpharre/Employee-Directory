import React, { Component } from "react";
import Table from "../Table";
import TableHead from "../TableHead"
import TableBody from "../TableBody"
import TableBodyItem from "../TableBodyItem"
import Row from "../Row";
import Btn from "../Btn";
import Search from "../Search";
import API from "../../utils/API"

class Container extends Component {
    state = {
        users: []
    };

    componentDidMount() {
        API.getUsers()
            .then(res => {
                console.log(res);
                console.log(res.data.results)
                this.setState({ users: res.data.results });
            }).catch(err => console.log(err));
    };



    render() {
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
                        {this.state.users.map(user => (
                            <TableBodyItem 
                                key={user.dob.age}
                                picture={user.picture.thumbnail}
                                name={user.name.last}
                                phone={user.phone}
                                email={user.email}
                                dob={user.dob.date}
                            />
                        ))}
                    </TableBody>
                </Table>
            </div>
        );
    }
};

export default Container;