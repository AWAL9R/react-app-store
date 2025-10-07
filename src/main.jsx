import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Main from './components/Main';
import Home from './components/home/Home';
import Apps from './components/apps/Apps';
import Installs from './components/installs/Installs';
import Error404 from './components/Error404';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        index: true,
        Component: Home,
      },
      {
        path:"/apps",
        Component: Apps
      },
      {
        path:"/apps/:appId",
        Component: Apps
      },
      {
        path:"/installed",
        Component: Installs
      },
      {
        path:"*",
        Component: Error404
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
