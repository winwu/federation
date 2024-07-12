import * as React from 'react';
import { Suspense } from 'react';

const RemoteButton = React.lazy(() => import('shared/CustomButton'));
const RemoteLabel = React.lazy(() => import('shared/CustomLabel'));

const App = () => {
    return (
        <div>
            <h1>This is App1 content</h1>
            <Suspense fallback={'loading...'}>
                <RemoteButton />
                <RemoteLabel />
            </Suspense>
        </div>
    );
};

export default App;
