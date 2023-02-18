import {apiService} from "./apiService";

import {IUser} from "../interfaces/userinterface";
import {IRes} from "../interfaces/resinterface";

const userService = {
    getAll: ():IRes<IUser[]> => apiService.get('/users')
}

export {userService}