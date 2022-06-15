import React from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

const getRandomNumber = ({ min, max }) => {
    const delta = max - min + 1;
    const random = Math.floor(Math.random() * delta) + min;
    return random;
};

export default props => (
    <Text style={styles.fontSize24}>
        <Text>The random number is {getRandomNumber(props)}</Text>
    </Text>
);
