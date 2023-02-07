import React, {useEffect, useState} from "react";

import {todosRequest} from "../../request";
import {TodosA} from "../../components";

export const TodosPage = () => {
    const [todoslist, setTodosList] = useState([]);

    useEffect(() => {
        todosRequest.getAll().then(({data}) => setTodosList([...data]))
    }, [])

    return (
        <div>
            <hr/>

            <TodosA todoslist={todoslist}/>

        </div>
    )
}