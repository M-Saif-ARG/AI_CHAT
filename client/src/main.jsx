import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import './index.css'
import Homepage from './routes/homepage/Homepage';
import DashboardPage from './routes/dashboard/DashboardPage';
import ChatPage from './routes/chatpage/Chatpage';
import RootLayout from './layouts/rootLayout/RootLayout';
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout';
import SignInPage from './routes/signin/SignInPage';
import SignUpPage from './routes/signup/SignUpPage';

const router = createBrowserRouter([
  {
    element : <RootLayout />,
    children : [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/sign-in/*",
        element: <SignInPage />,
      },
      {
        path: "/sign-up/*",
        element: <SignUpPage />,
      },
      {
        element: <DashboardLayout />,
        children : [
          {
            path: "/dashboard",
            element:<DashboardPage />
          },
          {
            path:"/dashboard/chats/:id", 
            element:<ChatPage />
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
