import {apiService, IREs} from "./api.service";
import {ICar} from "../interfaces";
import {urls} from "../configs";

const carService = {
    getAll: (): IREs<ICar[]> => apiService.get(urls.cars.base)
}

export {carService}