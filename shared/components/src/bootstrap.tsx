import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Shared from './Entry';

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <h1>Welcome to shared component library</h1>
        <div>
            <Shared.Button
                id="a-btn"
                onClick={(e) => {
                    e.preventDefault();
                    alert('hello!');
                }}
            >
                This is a button
            </Shared.Button>
        </div>
        <div>
            <Shared.Label htmlFor="a-btn">This is label</Shared.Label>
        </div>
    </React.StrictMode>,
);
