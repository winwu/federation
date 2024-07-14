import * as React from 'react';
import { Suspense } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectCount, incrementAsync, decrementAsync } from './counterSlice';

const RemoteButton = React.lazy(() => import('shared/CustomButton'));
const RemoteLabel = React.lazy(() => import('shared/CustomLabel'));

const Counter = () => {
    const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();

    return (
        <div>
            <h1>Asynchronous Counter</h1>
            <div>{count}</div>
            <section>
                <Suspense fallback={'loading...'}>
                    <RemoteLabel htmlFor="increment-btn">
                        <RemoteButton
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(incrementAsync(1));
                            }}
                        >
                            +
                        </RemoteButton>
                    </RemoteLabel>

                    <RemoteLabel htmlFor="decrement-btn">
                        <RemoteButton
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(decrementAsync(1));
                            }}
                        >
                            -
                        </RemoteButton>
                    </RemoteLabel>
                </Suspense>
            </section>
        </div>
    );
};

export default Counter;
