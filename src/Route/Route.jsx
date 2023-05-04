import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import ChefSection from "../home/ChefSection/ChefSection";
import Home from "../home/Home/Home";
import ChefRecipe from "../home/ChefRecipe/ChefRecipe";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Blog from "../pages/Blog/Blog";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/chef',
                element: <ChefSection></ChefSection>
            },
            {
                path: '/chef/:id',
                element: <PrivateRoute><ChefRecipe></ChefRecipe></PrivateRoute>,
                loader: ({ params }) => fetch(`https://the-world-of-food-server-nurmorshed7987-gmailcom.vercel.app/chef/${params.id}`)
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    },
]);


export default router