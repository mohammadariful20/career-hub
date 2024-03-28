import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import './index.css';
import Home from './components/Home/Home.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import AppliedJobs from './components/AppliedJobs/AppliedJobs.jsx';
import Blogs from './components/Blogs/Blogs.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import Details from './Details/Details.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/Applied",
        element: <AppliedJobs></AppliedJobs>,
        loader:()=>fetch('jobs.json')
      },
      {
        path: "/Blogs",
        element:<Blogs></Blogs>,
      },
      {
        path: "details/:id",
        element:<Details></Details>,
        loader:()=>fetch('jobs.json')
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

)
