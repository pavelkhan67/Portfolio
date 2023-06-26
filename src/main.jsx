import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Pages/Home/Home';
import Main from './Pages/Main/Main';
import Projects from './Pages/Projects/Projects';
import AboutMe from './Pages/AboutMe/AboutMe';
import Skills from './Pages/Skills/Skills';

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
        path: '/projects',
        element: <Projects></Projects>
      },
      {
        path: '/skill',
        element: <Skills></Skills>
      },
      {
        path: '/about',
        element: <AboutMe></AboutMe>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='w-11/12 lg:w-10/12 mx-auto'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
