import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import ChefSection from "../home/ChefSection/ChefSection";
import Home from "../home/Home/Home";


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
            }
        ]
    },
]);


export default router