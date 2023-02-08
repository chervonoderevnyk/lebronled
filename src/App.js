
import {useState} from "react";

import {FunctionComponent} from "./components/FunctionComponent";
import {ClassComponent} from "./components/ClassComponent";

const App = () => {

   const [flag, setFlag] = useState(true);

    return (
        <div>
            {/*{flag && <ClassComponent nome={'max'}/>}*/}
            {flag && <FunctionComponent nome={'max'}/>}
            <button onClick={()=>setFlag(prev=>!prev)}>Hide</button>
        </div>
    );
};

export {App};