import React from 'react';

export const TodosA = ({todoslist}) => {
    return (
        <div style={
            {display: 'flex', flexDirection: 'column', textAlign: 'center', gap: 6}}>

            {todoslist.map(item => (

                <div key={item.id} style={
                    {borderRadius: 15, background: 'Lightgrey'}}>

                    <div>userId: {item.userId}</div>
                    <div>id: {item.id}</div>
                    <div>title: {item.title}</div>
                    <div>status: {item.completed ? 'Completed' : 'Non done yet'}</div>
                </div>
            ))}
        </div>
    );
};

