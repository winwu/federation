import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Shared from './Entry';

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <h1>Welcome to shared component library</h1>
        <Shared.Button />
        <Shared.Label />
    </React.StrictMode>,
);
