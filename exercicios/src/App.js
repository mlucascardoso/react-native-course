import React from 'react';
import { SafeAreaView } from 'react-native';

import { styles } from './components/styles';

// import { Component1, Component2, Component3 } from './components/multi';
// import WithProps from './components/with-props';
// import RandomNumber from './components/random-number';
// import Fragment from './components/fragment';
import Button from './components/button';

export default () => (
    <SafeAreaView style={styles.App}>
        {/* <First /> */}
        {/* <Component1 /> */}
        {/* <Component2 /> */}
        {/* <Component3 /> */}
        {/* <WithProps min={10} max={20} /> */}
        {/* <RandomNumber min={10} max={20} /> */}
        {/* <Fragment title="Cuka" subTitle="delas" /> */}
        <Button />
    </SafeAreaView>
);
