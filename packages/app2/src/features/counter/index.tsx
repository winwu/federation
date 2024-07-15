import * as React from 'react';
import { Suspense } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { asyncIncrement, asyncDecrement } from './counterSlice';
import Shared from '../../../../../shared/components/src/Entry';

// const Shared.Button = React.lazy(() => import('shared/CustomButton'));
// const Shared.Label = React.lazy(() => import('shared/CustomLabel'));

const Counter = () => {
    const dispatch = useAppDispatch();

    const { value: count, loading } = useAppSelector((state) => state.counter);

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Asynchronous Counter</h1>
            <div>{count}</div>
            <section>
                <Suspense fallback={'loading...'}>
                    <Shared.Label htmlFor="increment-btn">
                        <Shared.Button
                            id="increment-btn"
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(asyncIncrement());
                            }}
                        >
                            +
                        </Shared.Button>
                    </Shared.Label>

                    <Shared.Label htmlFor="decrement-btn">
                        <Shared.Button
                            id="decrement-btn"
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(asyncDecrement());
                            }}
                        >
                            -
                        </Shared.Button>
                    </Shared.Label>
                </Suspense>
            </section>

            <small>{loading === true && 'Loading'}</small>
        </div>
    );
};

export default Counter;
