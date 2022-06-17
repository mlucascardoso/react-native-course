import React, { useState } from 'react';
import { Text, Button } from 'react-native';

export default props => {
    const [number, setNumber] = useState(props.initialValue);
    const increment = () => setNumber(number + 1);
    const decrement = () => setNumber(number - 1);

    return (
        <>
            <Text>{number}</Text>
            <Button title="Increment" onPress={increment} />
            <Button title="Decremenet" onPress={decrement} />
        </>
    );
};
