import React from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

export default props => (
    <>
        <Text style={styles.fontSize24}>{props.title}</Text>
        <Text style={styles.fontSize18}>{props.subTitle}</Text>
    </>
);
