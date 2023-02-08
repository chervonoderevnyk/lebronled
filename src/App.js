import {Navigate, Route, Routes} from "react-router-dom";

import {
    HomePage, UsersPage, PostsPage, AboutPage, NotFoundPage, PostDetailsPage,
    PostByCommentPage, TodosPage, CommentsPage
} from "./pages";

import {MainLayout} from "./layouts";
import {AlbumsPage} from "./pages/AlbumsPage/AlbumsPage";


const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'home'}/>}/>
                    <Route path={'home'} element={<HomePage/>}/>
                    <Route path={'users'} element={<UsersPage/>}/>

                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':postId'} element={<PostDetailsPage/>}/>
                    </Route>

                    <Route path={'todos'} element={<TodosPage/>}/>
                    <Route path={'albums'} element={<AlbumsPage/>}/>

                    <Route path={'comments'} element={<CommentsPage/>}>
                        <Route path={':postById'} element={<PostByCommentPage/>}/>
                    </Route>

                    <Route path={'about'} element={<AboutPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export {App};