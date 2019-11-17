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
import SignUp from './components/SignUp/SignUp'
import Login from './components/login/Login'
import Create_complaint from './components/complaint/Create_complaint'
import Mess from './components/mess/Mess'
import Menu from './components/mess/Menu'
import Leave from './components/Leave/Leave'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  SignUp: {
    screen: SignUp, navigationOptions: {
      title: 'SignUp',
      headerLeft: null
    }
  },
  Login: {
    screen: Login, navigationOptions: {
      title: 'Login',
      headerLeft: null
    }
  },
  Complaint: {
    screen: Complaint, navigationOptions: {
      title: 'HomeScreen',
      headerLeft: null
    }
  },
  Home: {
    screen: HomeScreen, navigationOptions: {
      title: 'Complaint',
    }
  },
  editCView: {
    screen: editCView, navigationOptions: {
      title: 'Complaint Description',
    }
  },
  Create_complaint: {
    screen: Create_complaint, navigationOptions: {
      title: 'Create Complaint',
    }
  },
  Leave: {
    screen: Leave, navigationOptions: {
      title: 'Leave Application',
    }
  },
  Mess: {
    screen: Mess, navigationOptions: {
      title: 'Mess',
    }
  },
  Menu: {
    screen: Menu, navigationOptions: {
      title: 'Menu',
    }
  },
});

const App = createAppContainer(MainNavigator);

// export default createStackNavigator({
//   Home: { screen: HomeScreen },
//   Complaint: {screen: Complaint},
// });;

export default App;
