import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import ErrorPage from './../Pages/ErrorPage';
import Overview from "../Pages/shared/Overview";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Overview></Overview>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    },
]);