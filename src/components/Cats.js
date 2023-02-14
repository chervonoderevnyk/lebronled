import {useAppCatReducer} from "../hooks";
import {Cat} from "./Cat"

const Cats = () => {

    const [cats] = useAppCatReducer((reducers) => reducers.catsReducer);

    return (
        <div>
            {cats.map(cat => <Cat key={cat.id} cat={cat}/>)}
        </div>
    );
};

export {Cats};