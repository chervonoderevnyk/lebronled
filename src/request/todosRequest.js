import {axiosRequest, requestsLinks} from "../configs";

export const todosRequest = {
    getAll: () => axiosRequest.get(requestsLinks.todos)
}

