import {useForm} from "react-hook-form";

import {useAppDogReducer} from "../hooks";
import {dogActions} from "../reducers";

const DogsForms = () => {

    const {register, reset, handleSubmit} = useForm();

    const [, dispatch] = useAppDogReducer(value => value.dogsReducer);

    const saveDog = (dog) => {
        dispatch(dogActions.ADD(dog))
        reset()
    };

    return (
        <form onSubmit={handleSubmit(saveDog)} style={{fontSize: 20}}>

            Add Dog:
            <input type={"text"} placeholder={'name'} {...register('name')}/>
            <button>Save</button>
        </form>
    )
};

export {DogsForms}