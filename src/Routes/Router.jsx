import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Error from "../Sheared/Error";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Experience from "../Pages/Experience/Experience";
import Project from "../Pages/Project/Project";
import Contact from "../Pages/Contact/Contact";
import Skills from "../Pages/Skills/Skills";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/experience",
                element: <Experience></Experience>
            },
            {
                path: "/skill",
                element: <Skills></Skills>
            },
            {
                path: "/project",
                element: <Project></Project>
            },
            {
                path: "/Contact",
                element: <Contact></Contact>
            },


        ]


    }
])