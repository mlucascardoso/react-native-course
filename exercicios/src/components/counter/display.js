import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

import { styles } from '../styles';

export default props => {
    return (
        <View style={style.Display}>
            <Text style={[styles.fontSize18, style.DisplayText]}>
                {props.number}
            </Text>
        </View>
    );
};

const style = StyleSheet.create({
    Display: {
        backgroundColor: '#000',
        padding: 20,
        width: 300,
    },
    DisplayText: {
        color: '#FFF',
    },
});
