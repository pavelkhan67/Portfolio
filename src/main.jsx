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
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=' md:w-11/12 lg:w-10/12 mx-auto'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
