import React, { Component } from 'react';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  StatusBar,
} from 'react-native';
// import console = require('console');
// import console = require('console');


export default class Mess extends Component {
  constructor(props) {
    super(props);
    //Creating states
    this.state = {
      tableHead: ['', 'Breakfast', 'Lunch', 'Snacks', 'Dinner'],
      tableTitle: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      tableData: [
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
      ]
    }
  }

  render() {
    const state = this.state;
    const token = (this.props.navigation.getParam('token', 'token'))
    console.log('mess role', this.props.navigation.getParam('role', 'role'))
    return (
      //Main View class
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          {/*Creating button with text Monday and onPress passing the token, role and day detail to Menu page */}
          <Button onPress={() => this.props.navigation.navigate('Menu',
              {
                'token': token,
                'role': this.props.navigation.getParam('role', 'role'),
                'day': 'Monday'
              }
          )} title="Monday" style={styles.button}>
          </Button>
        </View>
        <View style={styles.buttonContainer}>
          {/*Creating button with text Tuesday and onPress passing the token, role and day detail to Menu page */}
          <Button onPress={() => this.props.navigation.navigate('Menu',
                {
                  'token': token,
                  'role': this.props.navigation.getParam('role', 'role'),
                  'day': 'tuesday'
                }
          )} title="Tuesday" style={styles.button}>
          </Button>
        </View>
        <View style={styles.buttonContainer}>
          {/*Creating button with text Wednesday and onPress passing the token, role and day detail to Menu page */}
          <Button onPress={() => this.props.navigation.navigate('Menu',
                {
                  'token': token,
                  'role': this.props.navigation.getParam('role', 'role'),
                  'day': 'wednesday'
                }
          )} title="Wednesday" style={styles.button}>
          </Button>
        </View>
        <View style={styles.buttonContainer}>
          {/*Creating button with text Thursday and onPress passing the token, role and day detail to Menu page */}
          <Button onPress={() => this.props.navigation.navigate('Menu',
              {
                'token': token,
                'role': this.props.navigation.getParam('role', 'role'),
                'day': 'thursday'
              }
          )} title="Thursday" style={styles.button}>
          </Button>
        </View>
        <View style={styles.buttonContainer}>
          {/*Creating button with text Friday and onPress passing the token, role and day detail to Menu page */}
          <Button onPress={() => this.props.navigation.navigate('Menu',
            {
              'token': token,
              'role': this.props.navigation.getParam('role', 'role'),
              'day': 'friday'
            }
          )} title="Friday" style={styles.button}>
          </Button>
        </View>
        <View style={styles.buttonContainer}>
          {/*Creating button with text Saturday and onPress passing the token, role and day detail to Menu page */}
          <Button onPress={() => this.props.navigation.navigate('Menu',
              {
                'token': token,
                'role': this.props.navigation.getParam('role', 'role'),
                'day': 'saturday'
              }
          )} title="Saturday" style={styles.button}>
          </Button>
        </View>
        <View style={styles.buttonContainer}>
          {/*Creating button with text Sunday and onPress passing the token, role and day detail to Menu page */}
          <Button onPress={() => this.props.navigation.navigate('Menu',
            {
              'token': token,
              'role': this.props.navigation.getParam('role', 'role'),
              'day': 'sunday'
            }
          )} title="Sunday" style={styles.button}>
          </Button>
        </View>
      </View>
    )
  }
}


//Styles
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  button: {
    width: 200,
    height: 70,
    backgroundColor: 'blue',
    marginTop: 150,
    marginLeft: 100,
  },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  wrapper: { flexDirection: 'row' },
  title: { flex: 0.25, backgroundColor: '#f6f8fa' },
  row: { height: 28 },
  text: { textAlign: 'center' },
  buttonContainer: {
    marginTop: 30,
  }
});