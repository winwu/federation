import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import './Layout.css';

function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/app1">App1</NavLink>
                    </li>
                    <li>
                        <NavLink to="/app2">App2</NavLink>
                    </li>
                </ul>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Layout;
