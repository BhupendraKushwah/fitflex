import { lazy } from 'react'

const Dashboard = lazy(() => import('@/components/trainer/Dashboard'));


/**
 * @type {import('react-router').RouteObject[]}
 */

const ProtectedRoutes = [
   { path: "/dashboard", element: <Dashboard /> },
]

export default ProtectedRoutes;
