import {apiService, IREs} from "./apiService";
import {ICar} from "../interfaces";
import {urls} from "../configs";

const carService = {
    getAll: (): IREs<ICar[]> => apiService.get(urls.cars.base),
    getById: (id:string):IREs<ICar>=>apiService.get(urls.cars.buId(id)),
    create: (car:ICar):IREs<ICar> =>apiService.post(urls.cars.base, car)
}

export {carService}