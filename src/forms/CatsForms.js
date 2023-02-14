import {useForm} from "react-hook-form";

import {useAppCatReducer} from "../hooks";
import {catActions} from "../reducers";

const CatsForms = () => {

    const {register, reset, handleSubmit} = useForm();

    const [, dispatch] = useAppCatReducer(value => value.catsReducer);

    const saveCat = (cat) => {
        dispatch(catActions.ADD(cat))
        reset()
    };

    return (
        <form onSubmit={handleSubmit(saveCat)} style={{ fontSize: 20}}>

            Add Cat:
            <input type={"text"} placeholder={'name'} {...register('name')}/>
            <button>Save</button>
        </form>
    )
};

export {CatsForms}

