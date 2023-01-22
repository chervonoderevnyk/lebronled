// import './App.css';
import {useEffect, useState} from "react";
import {getUsers} from "./services/user.service";
import UserComponent from "./components/UserComponent";

 function App() {

let [users, setUsers] = useState([]);
let [informUser,setInformUser] = useState(null);


    useEffect(() => {
        getUsers().then(value => setUsers(value.data));
    },[])

     const infUser = (obj) => {
        console.log(obj);
     }

    return (
        <div>
            {
                users.map(value => <UserComponent key={value.id} item={value} infUser={infUser}/>)
            }
        </div>
    );
}

export {App}


