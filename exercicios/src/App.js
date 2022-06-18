import React from 'react';
import { SafeAreaView } from 'react-native';

import { styles } from './components/styles';

// import { Component1, Component2, Component3 } from './components/multi';
// import WithProps from './components/with-props';
// import RandomNumber from './components/random-number';
// import Fragment from './components/fragment';
// import Button from './components/button';
// import Counter from './components/counter';
// import DirectParent from './components/direct/parent';
import IndirectParent from './components/indirect/parent';

export default () => (
    <SafeAreaView style={styles.App}>
        {/* <First /> */}
        {/* <Component1 /> */}
        {/* <Component2 /> */}
        {/* <Component3 /> */}
        {/* <WithProps min={10} max={20} /> */}
        {/* <RandomNumber min={10} max={20} /> */}
        {/* <Fragment title="Cuka" subTitle="delas" /> */}
        {/* <Button /> */}
        {/* <Counter initialValue={10} /> */}
        {/* <DirectParent /> */}
        <IndirectParent />
    </SafeAreaView>
);
