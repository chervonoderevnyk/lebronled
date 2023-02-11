import React from 'react';

import {UserForm} from "./UserForm";
import {Users} from "./Users";

const UsersPage = () => {
    return (
        <div>
           <div>
               <UserForm/>
               <hr/>
               <Users/>
           </div>
        </div>
    );
};

export {UsersPage};