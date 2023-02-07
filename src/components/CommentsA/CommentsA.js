import React from 'react';
import {NavLink} from "react-router-dom";

export const CommentsA = ({comments = []}) => {

    return (
        <div style={{
            display: 'flex', flexDirection: 'column',
            gap: 6, height: 400, overflow: 'scroll', textAlign: 'center'
        }}>
            {comments.map(item => {
                const {postId, id, name} = item;

                return (
                    <NavLink to={postId.toString()} key={item.id}>

                        <div key={id} style={
                            {background: "lightgray", borderRadius: 15}}>

                            <div>id: {id}</div>
                            <div>postId: {postId}</div>
                            <div>comment Name: {name}</div>
                        </div>
                    </NavLink>
                )
            })}
        </div>
    );
};

