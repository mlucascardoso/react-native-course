import React from 'react';
import { SafeAreaView } from 'react-native';

import { Component1, Component2, Component3 } from './components/multi';
import { styles } from './components/styles';

export default () => (
    <SafeAreaView style={styles.App}>
        {/* <First /> */}
        <Component1 />
        <Component2 />
        <Component3 />
    </SafeAreaView>
);
