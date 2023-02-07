import React from 'react';
import {useParams} from "react-router-dom";

import {PostDetails} from "../../components";


export const PostByCommentPage = () => {

    const {postById} = useParams();
    console.log(postById);

    return (
        <div>
            <PostDetails postId={postById}/>
        </div>
    );
};



