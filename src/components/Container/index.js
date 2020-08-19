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
    // const [isSearching, setisSearching] = useState(false);

    // useEffect(() => {
    //     loadUsers();
    // });

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

    const debouncedInput = useDebounce(searchedUser, 500);

    useEffect(() => {
        if(debouncedInput) {
            console.log(debouncedInput);
            //filter out object that matches the searchedUser
            const employee = users.filter(name => {
                const first = name.name.first.toLocaleLowerCase();
                const last = name.name.last.toLocaleLowerCase();
                const lowerCaseSearchedUser = searchedUser.toLocaleLowerCase();
                const full = `${first} ${last}`;
                const fullOriginal = `${name.name.first} ${name.name.last}`

                if (full.includes(lowerCaseSearchedUser)) { //|| full.localeCompare(lowerCaseSearchedUser) == 1 || full.localeCompare(searchedUser)) {
                    return true;
                } else if (fullOriginal.includes(searchedUser)) {
                    return true;
                }
            });
            setUsers(employee);
        } else {
            loadUsers();
        }
    }, [debouncedInput]);


    const handleInputChange = e => {
        const value = e.target.value;
        console.log(value);
        setSearchedUser(value);
    };
    //then the button
    const changeButtonText = e => {
        e.preventDefault();

        if(buttonText === "Alphabetize") {
            setButtonText("Reset");
            const sortUsers = users.sort((a, b) => a.name.last.localeCompare(b.name.last));
            setUsers(sortUsers);
        } else if (buttonText === "Reset") {
            setButtonText("Alphabetize");
            loadUsers();
        }
    }


    //////////////////////////////////////////
    //a function that splits the dob to only get the month day and year and then call it in map
    function splitDob(str) {
        return str.slice(0, 10);
    }

    return (
        <div className="container">
            <p className="text-center">To search by name, enter first or last name.</p>
            <Row>
                <Search 
                    handleInputChange={handleInputChange}
                    value={searchedUser}
                />
                <Btn 
                    changeButtonText={changeButtonText}
                    text={buttonText}
                />
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
                            dob={splitDob(user.dob.date)}
                        />
                    ))}
                </TableBody>
            </Table>
        </div>
    );

};

export default Container;