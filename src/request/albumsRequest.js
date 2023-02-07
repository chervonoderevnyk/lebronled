import {axiosRequest, requestsLinks} from "../configs";

export const albumsRequest = {
    getAll: () => axiosRequest.get(requestsLinks.albums)
}