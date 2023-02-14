import {useAppDogReducer} from "../hooks";

import {Dog} from "./Dog";

const Dogs = () => {

    const [dogs] = useAppDogReducer((reducers) => reducers.dogsReducer);

    return (
        <div>
            {dogs.map(dog => <Dog key={dog.id} dog={dog}/>)}
        </div>
    );
};

export {Dogs};