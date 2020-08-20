//import all components and utils and style needed for container component
import React, { useState, useEffect } from "react";
import "./style.css";
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

    //seperate function that loads users from api and saves it to state as an array
    function loadUsers() {
        API.getUsers()
            .then(res => {
                console.log(res);
                console.log(res.data.results)
                setUsers(res.data.results);
            }).catch(err => console.log(err));
    };
    //holds the custom hook that uses the typed input and set delay amount that filters through current state array
    const debouncedInput = useDebounce(searchedUser, 300);

    //The if conditional only occurs when the there is a debouncedInput, the else conditional still happens, loading the users from the api
    useEffect(() => {
        if (debouncedInput) {
            console.log(debouncedInput);
            filterAPI();
        } else {
            loadUsers();
        }
    }, [debouncedInput]);

    //filter out object from api array that matches the searchedUser(typed input in search)
    //filter from api so the user doesn't need to backspace all the way (and let state reload with all users) before changing input
    function filterAPI() {
        API.getUsers().then(res => {
            const response = res.data.results;
            const employee = response.filter(name => {
                const first = name.name.first.toLocaleLowerCase();
                const last = name.name.last.toLocaleLowerCase();
                const lowerCaseSearchedUser = searchedUser.toLocaleLowerCase();
                const full = `${first} ${last}`;
                const fullOriginal = `${name.name.first} ${name.name.last}`
                //'includes' method compares any piece of name to string (from object) so that if user only knows a part of the employee's name the api will still be called
                //compares input to object whether the user types in all lower case or capitalizes the first letter
                if (full.includes(lowerCaseSearchedUser)) {
                    return true;
                } else if (fullOriginal.includes(searchedUser)) {
                    return true;
                }
            });
            setUsers(employee);
        });
    }
    //grabs value in input and saves it to state
    const handleInputChange = e => {
        const value = e.target.value;
        console.log(value);
        setSearchedUser(value);
    };
    //when button is clicked, sort state array alphabetically and text of button changes
    //to unalphabetize state array, click "reset" and it sets button text back to alphabetize
    const changeButtonText = e => {
        e.preventDefault();

        if (buttonText === "Alphabetize") {
            setButtonText("Reset");
            const sortUsers = users.sort((a, b) => a.name.last.localeCompare(b.name.last));
            setUsers(sortUsers);
        } else if (buttonText === "Reset") {
            setButtonText("Alphabetize");
            loadUsers();
        }
    }

    //a function that splits the dob to only get the month day and year and then call it in map
    function splitDob(str) {
        return str.slice(0, 10);
    }
    //returns components
    return (
        <div className="container">
            <p className="text-center name">To search by name, enter first, last, or full name.</p>
            <p className="text-center">To alphabetize by last name, click "Alphabetize". Click "Reset" to undo alphabetization.</p>
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