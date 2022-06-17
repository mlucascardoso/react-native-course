import React from 'react';
import { Button } from 'react-native';

export default props => {
    const execute = () => console.warn('cuka');
    return <Button title="Executar" onPress={execute} />;
};
