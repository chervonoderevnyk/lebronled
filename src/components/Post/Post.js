import {useNavigate} from "react-router-dom";


const Post = ({post}) => {
    const navigate = useNavigate();
    const {id, userId, title} = post;

    return (
        <div style={{
            textAlign: 'center', margin: 5, display: 'flex',
            flexDirection: 'column', borderRadius: 8, background: 'Lightgrey'
        }}>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>

            <button onClick={() => navigate(id.toString(), {state: post})}>Details</button>
        </div>
    );
};

export {Post};