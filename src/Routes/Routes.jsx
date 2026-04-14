import {createBrowserRouter} from "react-router";
import MainLayout from "../Layout/MainLayout.jsx";
import Homepage from "../Pages/HomePage/Homepage.jsx";
import FriendsDetails from "../Pages/FriendsDetails/FriendsDetails.jsx";
import Timeline from "../Pages/Timeline/Timeline.jsx";
import ErrorPage from "../Pages/ErrorPage/ErrorPage.jsx";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                Component: Homepage,
            },
            {
                path: 'timeline',
                Component: Timeline,
            },
            {
                path: 'friendsdetails',
                Component: FriendsDetails,
            },
        ]

    }
])
