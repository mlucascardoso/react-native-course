import React from 'react';
import { Button } from 'react-native';

export default props => {
    const generateRandomNumber = (min, max) => {
        const delta = max - min + 1;
        return Math.floor(Math.random() * delta) + min;
    };
    return (
        <>
            <Button
                title="Execute"
                onPress={() => {
                    const number = generateRandomNumber(props.min, props.max);
                    props.function(number);
                }}
            />
        </>
    );
};
