import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/app1">App1</Link>
                    </li>
                    <li>
                        <Link to="/app2">App2</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default Layout;
