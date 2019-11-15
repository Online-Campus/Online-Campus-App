import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
 
export default class ExampleTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['', 'Breakfast', 'Lunch', 'Snacks','Dinner'],
      tableTitle: ['Monday', 'Tuesday', 'Wednesday', 'Thursday','Friday','Saturday','Sunday'],
      tableData: [
        ['1', '2', '3','4'],
        ['1', '2', '3','4'],
        ['1', '2', '3','4'],
        ['1', '2', '3','4'],
        ['1', '2', '3','4'],
        ['1', '2', '3','4'],
        ['1', '2', '3','4'],
      ]
    }
  }
 
  render() {
    const state = this.state;
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderWidth: 1}}>
          <Row data={state.tableHead} flexArr={[1]} style={styles.head} textStyle={styles.text}/>
          <TableWrapper style={styles.wrapper}>
            <Col data={state.tableTitle} style={styles.title} textStyle={styles.text}/>
            <Rows data={state.tableData} flexArr={[1]} style={styles.row} textStyle={styles.text}/>
          </TableWrapper>
        </Table>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: {  height: 40,  backgroundColor: '#f1f8ff'  },
  wrapper: { flexDirection: 'row' },
  title: { flex: 0.25,backgroundColor: '#f6f8fa' },
  row: {  height: 28  },
  text: { textAlign: 'center' }
});