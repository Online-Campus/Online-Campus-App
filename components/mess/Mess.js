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


export default class Mess extends Component {
  constructor(props) {
    super(props);
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
    return (
      <View style={styles.container}>
        {/* <Table borderStyle={{borderWidth: 1}}>
          <Row data={state.tableHead} flexArr={[1]} style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={styles.wrapper}>
            <Col data={state.tableTitle} style={styles.title} textStyle={styles.text}/>
            <Rows data={state.tableData} flexArr={[1]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
        </Table> */}
        <View style={styles.buttonContainer}>
          <Button onPress={() => this.props.navigation.navigate('Menu')} title="Monday" style={styles.button}>
          </Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={() => this.props.navigation.navigate('Menu')} title="Tuesday" style={styles.button}>
          </Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={() => this.props.navigation.navigate('Menu')} title="Wednesday" style={styles.button}>
          </Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={() => this.props.navigation.navigate('Menu')} title="Thursday" style={styles.button}>
          </Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={() => this.props.navigation.navigate('Menu')} title="Friday" style={styles.button}>
          </Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={() => this.props.navigation.navigate('Menu')} title="Saturday" style={styles.button}>
          </Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button onPress={() => this.props.navigation.navigate('Menu')} title="Sunday" style={styles.button}>
          </Button>
        </View>
      </View>
    )
  }
}

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