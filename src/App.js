import {useState} from "react";

import Posts from "./components/Posts/Posts";
import Users from "./components/Users/Users";


const App = () => {
    const [userId, setUserId] = useState(null);

    return (
        <div>
            <Users setUserId={setUserId}/>
            <hr/>
            <hr/>
            {userId && <Posts userId={userId}/>}
        </div>
    );
};

export {App};