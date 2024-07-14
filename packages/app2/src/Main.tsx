import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Counter from './features/counter';
import './Main.css';

const Main = () => {
    return (
        <Provider store={store}>
            <Counter />
        </Provider>
    );
};

export default Main;
