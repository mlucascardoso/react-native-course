import React from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

const Component1 = () => <Text style={styles.fontSize24}>Component 1!</Text>;
const Component2 = () => <Text style={styles.fontSize24}>Component 2!</Text>;
const Component3 = () => <Text style={styles.fontSize24}>Component 3!</Text>;

export { Component1, Component2, Component3 };
