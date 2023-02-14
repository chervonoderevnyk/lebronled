import {CatsPage, DogsPage} from "./pages";
import {CatsForms} from "./forms/CatsForms";
import {DogsForms} from "./forms/DogsForm";

const App = () => {

    return (
        <div>

            <div style={
                {borderRadius: 15, background: 'lightblue', display: "flex",
                    justifyContent: "center", padding: 20, margin: 20, gap: 80
                }}>
                <CatsForms/>
                <DogsForms/>
            </div>

            <hr/>

            <div style={
                {borderRadius: 15, background: 'Lightgrey', display: "flex",
                    justifyContent: "center", padding: 25, margin: 20, gap: 210
                }}>
                <CatsPage/>
                <DogsPage/>
            </div>

        </div>
    );
};

export {App};