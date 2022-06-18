import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

export default props => {
    return (
        <View style={style.Buttons}>
            <Button style={style.Button} title="+" onPress={props.increment} />
            <Button style={style.Button} title="-" onPress={props.decrement} />
        </View>
    );
};

const style = StyleSheet.create({
    Buttons: {
        flexDirection: 'row',
        padding: 10,
    },
    Button: {
        width: 100,
        padding: 20,
    },
});
