import {axiosRequest, requestsLinks} from "../configs";

export const commentsRequest = {
    getAll: () => axiosRequest.get(requestsLinks.comments)
}


