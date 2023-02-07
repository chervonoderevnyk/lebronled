import {baseURL} from "./urls";
import axios from "axios";


export const axiosRequest = axios.create({baseURL});
export * from './urls';
