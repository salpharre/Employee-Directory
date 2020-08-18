import React, { useState, useEffect } from "react";
import Table from "../Table";
import TableHead from "../TableHead"
import TableBody from "../TableBody"
import TableBodyItem from "../TableBodyItem"
import Row from "../Row";
import Btn from "../Btn";
import Search from "../Search";
import API from "../../utils/API";
import useDebounce from "../../utils/DebounceUser"

function Container() {
    //users holds array of user objects from api and when api is filtered and sorted
    //searchedUser holds string typed into Search component
    //buttonText holds default text of button and is changed when button is clicked (changes to "Reset" and back to "Alphabetize" when "Reset" is clicked)
    const [users, setUsers] = useState([]);
    const [searchedUser, setSearchedUser] = useState("");
    const [buttonText, setButtonText] = useState("Alphabetize");

    useEffect(() => {
        loadUsers();
    });

    function loadUsers() {
        API.getUsers()
            .then(res => {
                console.log(res);
                console.log(res.data.results)
                setUsers(res.data.results);
            }).catch(err => console.log(err));
    };
    //let's do the search function
    //put a onChange in Search index, a property that refers to onChange in Btn in render
    //what i want: as I type a name it renders only those that match the name typed
    const handleInputChange = e => setSearchedUser(e.target.value);
    
    const debouncedInput = useDebounce(searchedUser, 400);

    useEffect(() => {
        if(debouncedInput) {
            const employee = users.filter(name => {
                //filter out object that matches the searchedUser

            });
        } //if need be, add an else here that calls loadUser()
    }, [debouncedInput]);

    //then the button



    return (
        <div className="container">
            <p className="text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, corrupti! Lorem ipsum dolor
            sit amet.</p>
            <Row>
                <Search 
                    handleInputChange={handleInputChange}
                    results={searchedUser}
                />
                <Btn />
            </Row>
            <Table>
                <TableHead />
                <TableBody>
                    {users.map(user => (
                        <TableBodyItem
                            key={user.name.last}
                            picture={user.picture.thumbnail}
                            name={`${user.name.first} ${user.name.last}`}
                            phone={user.phone}
                            email={user.email}
                            dob={user.dob.date}
                        />
                    ))}
                </TableBody>
            </Table>
        </div>
    );

};

export default Container;