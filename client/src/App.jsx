import React, { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import CommonLayout from './components/layouts/CommonLayout';
import UnprotectedRoutes from './routes/UnprotectedRoutes';
import '../src/assets/style.css'
import ProtectedRoutes from './routes/ProtectedRoutes';
const routes = [
  {
    element: <CommonLayout isProtected={false} />,
    children: UnprotectedRoutes,
  },
  {
    element: <CommonLayout isProtected={true} />,
    children: ProtectedRoutes,
  },
];

const App = () => {
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
};

export default App;