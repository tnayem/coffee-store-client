import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home/Home";
import AddCoffee from "../Pages/AddCoffee/AddCoffee";
import UpdateCoffee from "../Pages/UpdateCoffee/UpdateCoffee";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('http://localhost:4000/coffee')
            },
            {
                path:'/addCoffee',
                element:<AddCoffee></AddCoffee>
            },
            {
                path:'/updateCoffee/:id',
                element:<UpdateCoffee></UpdateCoffee>,
                loader:({params})=>fetch(`http://localhost:4000/coffee/${params.id}`)
            }
        ]
    }
])