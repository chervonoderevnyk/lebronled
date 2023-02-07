import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {commentsRequest} from "../../request";
import {CommentsA} from "../../components";

export const CommentsPage = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsRequest.getAll().then(({data}) => setComments([...data]));
    }, [])

    return (
        <div style={
            {width: '100%', margin: '0 auto'}}>

            <hr/>

            <CommentsA comments={comments}/>

            <hr/>

            <Outlet/>

        </div>
    );
};

