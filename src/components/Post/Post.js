import React from 'react';

const Post = ({post}) => {
    const {id, userId, title, body} = post;

    return (
        <div>
            <div>userId: {userId}</div>
            <div>id: {id}</div>

            <div>title: {title}</div>
            <div>body: {body}</div>
            <hr/>
        </div>
    );
};

export {Post};