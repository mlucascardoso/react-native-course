import React from 'react';
import { Text } from 'react-native';

export default props => {
    return (
        <>
            <Text>A: {props.a}</Text>
            <Text>B: {props.b}</Text>
        </>
    );
};
