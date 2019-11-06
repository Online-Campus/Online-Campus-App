/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
// import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  StatusBar,
} from 'react-native';
import HomeScreen from './HomeScreen';
import Complaint from './Complaint';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Complaint: {screen: Complaint},
  Home: { screen: HomeScreen },
});

const App = createAppContainer(MainNavigator);

// export default createStackNavigator({
//   Home: { screen: HomeScreen },
//   Complaint: {screen: Complaint},
// });;

export default App;
