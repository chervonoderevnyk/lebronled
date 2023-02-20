import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {carReducer} from "./slices/car.slice";

const rootReducer =combineReducers({
    carReducer
});


const setupStore= ()=>configureStore({
    reducer:rootReducer
});

type RootStore = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch =AppStore['dispatch']

export type {
    RootStore,
    AppStore,
    AppDispatch
};
export {setupStore}