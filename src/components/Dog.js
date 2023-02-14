import {useAppDogReducer} from "../hooks";
import {dogActions} from "../reducers";

const Dog = ({dog}) => {

    const [, dispatch] = useAppDogReducer(value => value.dogsReducer);

    const {id, name} = dog;

    return (
        <div style={
            {justifyContent: "center", padding: 10, fontSize: 20}}>

            <div>id: {id}</div>
            <div>name: {name}</div>

            <button onClick={() => dispatch(dogActions.DELETE_BY_ID(id))}>Put to sleep</button>
        </div>
    );
};

export {Dog};