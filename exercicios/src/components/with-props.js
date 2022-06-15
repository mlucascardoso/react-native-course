import React from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

export default props => (
    <Text style={styles.fontSize24}>
        The value of {props.max} is greater than {props.min}
    </Text>
);
