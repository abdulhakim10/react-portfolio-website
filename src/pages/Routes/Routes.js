import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import AboutMe from "../AboutMe/AboutMe";
import ContactMe from "../ContactMe/ContactMe";

import Home from "../Home/Home";
import PersonalProjects from "../PersonalProjects/PersonalProjects";
import ProjectDetails from "../PersonalProjects/ProjectDetails";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path: '/aboutme',
                element: <AboutMe></AboutMe>
            },
            {
                path: '/personalprojects',
                loader: () => fetch('projects.json'),
                element: <PersonalProjects></PersonalProjects>
            },
            {
                path: '/contact',
                element: <ContactMe></ContactMe>
            },
            {
                path: '/projects/:id',
                loader: () => fetch('/projects.json'),
                element: <ProjectDetails></ProjectDetails>
            }
        ]

    }
])