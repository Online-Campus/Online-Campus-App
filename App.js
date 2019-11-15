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
import HomeScreen from './HomeScreen'
import Complaint from './Complaint'
import editCView from './editCView'
import Login from './components/login/Login'
import Create_complaint from './components/complaint/Create_complaint'
import Mess from './components/mess/Mess'
import Leave from './components/Leave/Leave'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Login: {screen: Login},
  Complaint: {screen: Complaint},
  Home: { screen: HomeScreen },
  editCView: { screen: editCView },
  Create_complaint: {screen: Create_complaint},
  Leave: {screen: Leave},
  Mess: {screen: Mess},
});

const App = createAppContainer(MainNavigator);

// export default createStackNavigator({
//   Home: { screen: HomeScreen },
//   Complaint: {screen: Complaint},
// });;

export default App;
