import {useAppCatReducer} from "../hooks";
import {catActions} from "../reducers";

const Cat = ({cat}) => {

    const [, dispatch] = useAppCatReducer(value => value.catsReducer);

    const {id, name} = cat;

    return (
        <div style={
            {justifyContent: "center", padding: 10, fontSize: 20}}>

            <div>id: {id}</div>
            <div>name: {name}</div>

            <button onClick={() => dispatch(catActions.DELETE_BY_ID(id))}>Put to sleep</button>
        </div>
    );
};

export {Cat};