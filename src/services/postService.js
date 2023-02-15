import {axiosService} from "./axiosService";
import {urlsPosts} from "../config";

const postService = {
    getAll: () => axiosService.get(urlsPosts.posts),
    getById: (id) => axiosService.get(`${urlsPosts.posts}/${id}`)
}

export {postService}