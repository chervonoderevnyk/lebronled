import React from 'react';

export const AlbumsA = ({albums = []}) => {

    return (

        <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', gap: 6}}>

            {albums.map(item => {
                const {id, title, userId} = item;
                return (
                    <div key={id} style={
                        {borderRadius: 15, background: 'lightgray'}}>

                        <div>id: {id}</div>
                        <div>userId: {userId}</div>
                        <div>title: {title}</div>
                    </div>
                )
            })}
        </div>
    );
};

