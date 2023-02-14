import {useContext} from "react";

import {StateContext} from "../hoc/StateProvider";

const useAppDogReducer = (item) => item(useContext(StateContext))

export {useAppDogReducer}