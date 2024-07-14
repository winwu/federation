import * as React from 'react';
import { createRoot } from 'react-dom/client';

import Main from './Main';

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>,
);
