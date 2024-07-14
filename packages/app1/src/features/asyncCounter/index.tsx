import * as React from 'react';
import { Suspense } from 'react';

const RemoteApp2 = React.lazy(() => import('app2/Main'));

const AsyncCounter = () => {
    return (
        <Suspense fallback={'loading...'}>
            <RemoteApp2 />
        </Suspense>
    );
};

export default AsyncCounter;
