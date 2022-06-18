import React from 'react';
import { Text } from 'react-native';

import { styles } from '../styles';
export default props => {
    return (
        <Text style={styles.fontSize24}>
            {props.firstName} {props.lastName}
        </Text>
    );
};
