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
// import IndirectParent from './components/indirect/parent';
// import CounterV2 from './components/counter/counter';
import Family from './components/relationship/family';
import FamilyMember from './components/relationship/member';

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
        {/* <IndirectParent /> */}
        {/* <CounterV2 /> */}
        <Family>
            <FamilyMember firstName="Cuka" lastName="da Silva" />
            <FamilyMember firstName="Cuka2" lastName="da Silva" />
            <FamilyMember firstName="Cuka23" lastName="da Silva" />
        </Family>
    </SafeAreaView>
);
