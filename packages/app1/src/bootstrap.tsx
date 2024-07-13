import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';

import Main from './Main';

const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <Main />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
);
