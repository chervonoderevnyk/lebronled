import axios, {AxiosResponse} from "axios";

import {baseURL} from "../configs";

type IREs<T> = Promise<AxiosResponse<T>>

const apiService = axios.create({baseURL});

export type {IREs}
export {apiService}
