import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import LayoutRoot from '../components/Layouts/LayoutRoot';

const Home: any = lazy(() => import('../views/home/index'));

const routes = [
    {
        path: '/',
        element: <Home />,
    },
];

const finalRoutes = routes.map((route) => {
    return {
        ...route,
        element: <LayoutRoot>{route.element}</LayoutRoot>,
    };
});

const router = createBrowserRouter(finalRoutes);

export default router;
