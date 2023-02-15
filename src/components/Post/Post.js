import {useDispatch} from "react-redux";

import {postActions} from "../../redux";

const Post = ({post}) => {

    const {id, userId ,title} = post;
    const dispatch = useDispatch();

    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <button onClick={() => dispatch(postActions.setSelectedPost(post))}>select</button>
            <button onClick={() => dispatch(postActions.getById({id}))}>apiSelect</button>
        </div>
    );
};

export {Post};