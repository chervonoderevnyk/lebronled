// import './App.css';
import {useEffect, useState} from "react";
import {getUser, getUsers} from "./services/user.service";
import UserComponent from "./components/UserComponent";
import {UserInfo} from "./components/UserInfo";

function App() {

    let [users, setUsers] = useState([]);
    let [chosenUser, setChosenUser] = useState(null);
    // const [user] = useState(null);
    // const [user] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers(value.data));
    }, [])

    const chooseUser = (id) => {
        getUser(id).then(value => setChosenUser(value.data));
    }

    return (
        <div>
            {/*<div>{chosenUser?.name}</div>*/}
            {/*{chosenUser && <User user={UserComponent}/>}*/}
            {chosenUser && <UserInfo user={UserInfo}/>}

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


