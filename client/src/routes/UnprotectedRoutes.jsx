import { lazy } from 'react'
const Home = lazy(() => import('@/components/unprotected/home/Home'));
const Login = lazy(() => import('@/components/unprotected/Login'));
const Dashboard = lazy(() => import('@/components/trainer/Dashboard'));


/**
 * @type {import('react-router').RouteObject[]}
 */

const UnprotectedRoutes = [
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    // { path: "/dashboard", element: <Dashboard /> },


]

export default UnprotectedRoutes;