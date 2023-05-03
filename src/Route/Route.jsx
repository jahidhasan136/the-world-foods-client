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


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
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
                element: <ChefRecipe></ChefRecipe>,
                loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
            },
            {
                path: '/racipe',
                element: <ChefRecipe></ChefRecipe>
            },
            {
                path: '/register',
                element: <Registration></Registration>
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
]);


export default router