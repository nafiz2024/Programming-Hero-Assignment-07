import {createBrowserRouter} from "react-router";
import MainLayout from "../Layout/MainLayout.jsx";
import Homepage from "../Components/HomePage/Homepage.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        component: MainLayout,
        children: [
            {
                index: true,
                Component: Homepage,
            }
        ]
    }
])