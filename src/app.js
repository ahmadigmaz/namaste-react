import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body";
import ContactUs from "./components/ConatctUs"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import { Error } from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu"; 
const Cart = lazy(()=>import("./components/Cart"))
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const AppLayout = () =>{
    return (
        <Provider store={appStore}>
        <div className = "app">
            <Header/>
            <Outlet/>
        </div>
        </Provider>
    );
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
            {
            path:"/",
            element: <Body/>
            },
            {
            path: "/about",
            element: <About/>,
            },
            {
            path: "/contact",
            element: <ContactUs/>,
            },
            {
            path: "/restaurant/:resId",
            element: <RestaurantMenu/>,
            },
            {
            path: "/cart",
            element: <Suspense fallback = {<h1>Loading......</h1>}><Cart/></Suspense>
            }
        ],
        errorElement: <Error/>,

    },
]) 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)