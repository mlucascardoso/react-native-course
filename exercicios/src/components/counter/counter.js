import React, { useState } from 'react';
import { Text } from 'react-native';

import { styles } from '../styles';
import Display from './display';
import Buttons from './buttons';

export default () => {
    const [number, setNumber] = useState(0);

    const increment = () => setNumber(number + 1);
    const decrement = () => setNumber(number - 1);

    return (
        <>
            <Text style={styles.fontSize24}>Counter</Text>
            <Display number={number} />
            <Buttons increment={increment} decrement={decrement} />
        </>
    );
};
