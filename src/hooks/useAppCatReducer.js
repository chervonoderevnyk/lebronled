import {useContext} from "react";

import {StateContext} from "../hoc/StateProvider";

const useAppCatReducer = (item) => item(useContext(StateContext))

export {useAppCatReducer}