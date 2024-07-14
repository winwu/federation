import * as React from 'react';
import { Suspense } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { decrement, increment, selectCount } from './counterSlice';

const RemoteButton = React.lazy(() => import('shared/CustomButton'));
const RemoteLabel = React.lazy(() => import('shared/CustomLabel'));

const SyncCounter = () => {
    const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();

    return (
        <div>
            <h1>Synchronize Counter</h1>
            <div>{count}</div>
            <section>
                <Suspense fallback={'loading...'}>
                    <RemoteLabel htmlFor="increment-btn">
                        <RemoteButton
                            onClick={(e) => {
                                e.preventDefault();
                                console.log('increment!');
                                dispatch(increment());
                            }}
                        >
                            +
                        </RemoteButton>
                    </RemoteLabel>

                    <RemoteLabel htmlFor="decrement-btn">
                        <RemoteButton
                            onClick={(e) => {
                                e.preventDefault();
                                console.log('decrement!');
                                dispatch(decrement());
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

export default SyncCounter;
