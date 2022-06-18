import React, { useState } from 'react';
import { Text } from 'react-native';

import Child from './child';
import { styles } from '../styles';

export default () => {
    const [number, setNumber] = useState(0);
    const showGeneratedRandomNumber = randomNumber => setNumber(randomNumber);

    return (
        <>
            <Text style={styles.fontSize24}>{number}</Text>
            <Child min={1} max={60} function={showGeneratedRandomNumber} />
        </>
    );
};
