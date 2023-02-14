import {createContext, useReducer} from "react";

import {myCatsReducer, initialCats, myDogsReducer, initialDogs} from "../reducers";

const StateContext = createContext(null);
const StateProvider = ({children}) => {

    const reducers = {
        catsReducer: useReducer(myCatsReducer, null, initialCats),
        dogsReducer: useReducer(myDogsReducer, null, initialDogs)
    }

    return (
        <StateContext.Provider value={reducers}>
            {children}
        </StateContext.Provider>
    );
};

export {StateProvider, StateContext};