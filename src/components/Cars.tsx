import {FC, useEffect, useState} from "react";

import {ICar} from "../interfaces";
import {carService} from "../services";
import {Car} from "./Car";
import {useAppDispatch, useAppSelector} from "../hooks";
import {carActions} from "../redux";

const Cars: FC = () => {
    const {cars} = useAppSelector(state => state.carReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carActions.getAll())
    }, [dispatch])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
};

export {
    Cars
};