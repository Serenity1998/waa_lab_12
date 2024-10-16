import { Routes, Route } from "react-router-dom";
import PostsList from "./pages/PostsList";
import PostDetails from "./pages/PostDetails";
import App from "./App";
import EditPost from "./pages/EditPost";

const Router = () => {
    const publicRoutes = [
        { path: "/", component: App },
        { path: "/posts", component: PostsList },
        { path: "/posts/:id", component: PostDetails },
        { path: "/posts/:id/edit", component: EditPost },
    ]

    return (
        <Routes>
            <Route>
                {publicRoutes.map((route, idx) => (
                    <Route
                        key={idx}
                        path={route.path}
                        element={<route.component />}
                    />
                ))}
            </Route>
        </Routes>
    );
};

export default Router;
