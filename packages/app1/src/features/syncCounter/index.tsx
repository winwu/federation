import * as React from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { decrement, increment, selectCount } from './counterSlice';
import Shared from '../../../../../shared/components/src/Entry';

// const CustomButton = React.lazy(() => import('shared/CustomButton'));
// const CustomLabel = React.lazy(() => import('shared/CustomLabel'));

const SyncCounter = () => {
    const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();

    return (
        <div>
            <h1>Synchronize Counter</h1>
            <div>{count}</div>
            <section>
                <Shared.Label htmlFor="increment-btn">
                    <Shared.Button
                        id="increment-btn"
                        onClick={(e) => {
                            e.preventDefault();
                            console.log('increment!');
                            dispatch(increment());
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
                            console.log('decrement!');
                            dispatch(decrement());
                        }}
                    >
                        -
                    </Shared.Button>
                </Shared.Label>
            </section>
        </div>
    );
};

export default SyncCounter;
