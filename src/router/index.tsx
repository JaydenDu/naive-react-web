import Home from '@/views/home';
import { createBrowserRouter } from 'react-router-dom';
import LayoutRoot from '../components/Layouts/LayoutRoot';

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
