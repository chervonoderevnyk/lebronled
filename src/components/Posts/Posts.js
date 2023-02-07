import {useEffect, useState} from "react";

import {postServices} from "../../services";
import {Post} from "../Post/Post";

const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postServices.getAll().then(({data}) => setPosts([...data]))
    }, [])

    return (
        <div style={
            {overflow: 'scroll', height: 600}}>

            {posts.map(post => <Post key={post.id} post={post}/>)}

        </div>
    );
};

export {Posts};