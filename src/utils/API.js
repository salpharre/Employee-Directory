import axios from "axios";
//Uses https://randomuser.me/api/
//Returns 10 users, with US nationality. The seed makes sure the same 10 users are returned each call.
//'Inc' calls only for the picture, name, phone, email and dob
export default {
    getUsers: function() {
        return axios.get("https://randomuser.me/api/?results=10&nat=us&seed=0afe8ba584174675&inc=picture,name,phone,email,dob")
    }
};

