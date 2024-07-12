import * as React from 'react';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';
import App from './App';
import Layout from './Layout';
import './Main.css';

const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <Navigate to="app1" replace /> },
            {
                path: 'app1',
                element: <App />,
            },
            {
                path: 'app2',
                element: <div>app2 home</div>,
            },
        ],
    },
    { path: '404', element: <div>Not found</div> },
    { path: '*', element: <Navigate to="404" replace /> },
];

const Main = () => {
    const element = useRoutes(routes);

    return <div>{element}</div>;
};

export default Main;
