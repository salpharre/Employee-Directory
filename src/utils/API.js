import axios from "axios";

export default {
    getUsers: function() {
        return axios.get("https://randomuser.me/api/?results=10&nat=us&seed=0afe8ba584174675&inc=picture,name,phone,email,dob")
    }
};

//https://randomuser.me/api/?inc=picture,name,phone,email,dob
//https://randomuser.me/api/?results=10&inc=picture,name,phone,email,dob
//seed: 75e46f43826b783a

//can use this one
//https://randomuser.me/api/?results=10&seed=75e46f43826b783a&inc=picture,name,phone,email,dob

//or

//this one
//https://randomuser.me/api/?results=10&nat=us&seed=0afe8ba584174675&inc=picture,name,phone,email,dob