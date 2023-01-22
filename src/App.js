// import './App.css';
import {useEffect} from "react";
import {getUsers} from "./services/user.service";

 function App() {

    useEffect(() => {
        getUsers().then(value => console.log(value));
    },[])

    return (
        <div>

        </div>
    );
}

export {App};


