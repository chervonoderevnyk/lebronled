import React, {useEffect, useState} from 'react';

import {albumsRequest} from "../../request";
import {AlbumsA} from "../../components";

export const AlbumsPage = () => {
    const [albums, setalbums] = useState([]);

    useEffect(() => {
        albumsRequest.getAll().then(({data}) => setalbums([...data]))
    }, [])

    return (
        <div style={
            {width: '100%', margin: '0 auto'}}>

            <hr/>

            <AlbumsA albums={albums}/>

        </div>
    )
}

