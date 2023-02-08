import css from './Header.module.css';
import {NavLink} from "react-router-dom";
import {useAuthContext} from "../../hooks/useAuthContext";


const Header = () => {
    const {user} = useAuthContext();


    return (
        <div className={css.Header}>

            <NavLink to="">home</NavLink>
            <NavLink to="users">users</NavLink>
            <NavLink to="posts">posts</NavLink>

            <NavLink to="todos">todos</NavLink>
            <NavLink to="albums">albums</NavLink>
            <NavLink to="comments">comments</NavLink>

            <NavLink to="about">about</NavLink>

            {user &&
                <div>{user}
                    <button>LogOut</button>
                </div>}

        </div>
    );
};

export {Header};