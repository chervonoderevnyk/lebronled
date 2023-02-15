import {Header} from "./components";
import {Users, Posts} from "./components";

const App = () => {
        return (
            <div>
                <div style={{
                    background: "lightblue", gap: 10, margin: 10,
                    padding: 10, textAlign: 'center', fontSize: 20
                }}>
                    <Header/>
                </div>

                <hr/>
                <div
                    style={{
                        display: "flex", background: "lightgrey", gap: 10,
                        margin: 10, padding: 10, textAlign: 'center',
                    }}>
                    <div style={{height: 500, width: 500, overflow: 'scroll'}
                    }>
                        < Users/>
                    </div>

                    <hr/>
                    <div style={{height: 500, width: 500, overflow: 'scroll'}
                    }>
                        <Posts/>
                    </div>
                </div>
            </div>
        );
    }
;

export {App};