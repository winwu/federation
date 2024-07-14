import * as React from 'react';
import { Suspense } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectCount, incrementAsync, decrementAsync } from './counterSlice';
import Shared from '../../../../../shared/components/src/Entry';

// const Shared.Button = React.lazy(() => import('shared/CustomButton'));
// const Shared.Label = React.lazy(() => import('shared/CustomLabel'));

const Counter = () => {
    const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();

    return (
        <div>
            <h1>Asynchronous Counter</h1>
            <div>{count}</div>
            <section>
                <Suspense fallback={'loading...'}>
                    <Shared.Label htmlFor="increment-btn">
                        <Shared.Button
                            id="increment-btn"
                            onClick={(e) => {
                                e.preventDefault();
                                dispatch(incrementAsync(1));
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
                                dispatch(decrementAsync(1));
                            }}
                        >
                            -
                        </Shared.Button>
                    </Shared.Label>
                </Suspense>
            </section>
        </div>
    );
};

export default Counter;
