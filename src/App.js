// import './App.css';
import {useEffect, useState} from "react";
import {getUser, getUsers} from "./services/user.service";
import UserComponent from "./components/UserComponent";
import {UserInfo} from "./components/UserInfo";

function App() {

    let [users, setUsers] = useState([]);
    let [chosenUser, setChosenUser] = useState(null);
    // const [value, setUserInfo] = useState([]);
    // console.log(value);
    // const [user] = useState([]);
    // let [value] = useState([]);


    useEffect(() => {
        getUsers().then(value => setUsers(value.data));
    }, [])

    const chooseUser = (id) => {
        getUser(id).then(value => setChosenUser(value.data));
    }

    return (
        <div>
            {/*<div>{chosenUser?.value}</div>*/}
            {/*{chosenUser && <UserInfo value={value}/>}*/}
            {users.map(value => <UserInfo
                key={value.id}
                value={value}
                chooseUser={chooseUser}
            />)}


            <hr/>
            {users.map(value => <UserComponent
                key={value.id}
                item={value}
                chooseUser={chooseUser}
            />)}
        </div>
    );
}

export {App}


