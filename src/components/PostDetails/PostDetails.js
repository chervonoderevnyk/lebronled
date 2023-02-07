import {useEffect, useState} from "react";

import {postServices} from "../../services";

const PostDetails = ({postId, state}) => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        if (state) {
            setPost({...state})
        } else {
            postServices.getById(postId).then(({data}) => {
                setPost(data)
            })
        }
    }, [postId])

    return (
        <div style={
            {textAlign: 'center', borderRadius: 8, margin: 5, background: "lightgray"}}>

            {post &&
                <>
                    <div>id: {post.id}</div>
                    <div>userId: {post.userId}</div>
                    <div>title: {post.title}</div>
                    <div>body: {post.body}</div>
                </>
            }
        </div>
    );
};


export {PostDetails};