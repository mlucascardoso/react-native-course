import React from 'react';

import Child from './child';

export default () => {
    const x = 13;
    const y = 10;

    return (
        <>
            <Child a={x} b={y} />
            <Child a={x + 100} b={y + 200} />
        </>
    );
};
