import {useCallback, useState} from "react";
import {Todos} from "./Todos";


const UseCallBack = () => {

    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState(0);

    const addTodo = useCallback(()=>{
        setTodos(prevState => [...prevState, 'newTodo'])
    }, [])

    return (
        <div>
            <Todos todos={todos} addTodo={addTodo}/>
            <div>count:{count}</div>
            <button onClick={()=>setCount(prevState => prevState+1)}>inc</button>
        </div>
    );
};

export {UseCallBack};