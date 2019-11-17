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
            breakfast: ['some', 'unhealthy', 'fried', 'food'],
            lunch:  ['paneer', 'dal', 'rice'],
            snacks: ['again', 'some', 'unhealthy', 'fried', 'food'],
            dinner:   ['paneer', 'dal', 'rice'],
        }
    }

    render() {
        const breakfast = this.state.breakfast.map(
            (item, index) => (
                
                    <Text>{item}{'\n'}{'\n'}</Text>
                
            )
        )

        const lunch = this.state.lunch.map(
            (item, index) => (
                
                    <Text>{item}{'\n'}{'\n'}</Text>
                
            )
        )

        const snacks = this.state.snacks.map(
            (item, index) => (
                
                    <Text>{item}{'\n'}{'\n'}</Text>
                
            )
        )

        const dinner = this.state.dinner.map(
            (item, index) => (
                
                    <Text>{item}{'\n'}{'\n'}</Text>
                
            )
        )
    

        return (
            <View style={styles.container}>
                <Text style={styles.head}>
                    Breakfast
                </Text>
                <Text style={styles.detail}>
                    {breakfast}
                </Text>
                <Text style={styles.head}>
                    Lunch
                </Text>
                <Text style={styles.detail}>
                    {lunch}{'\n'}{'\n'}
                </Text>
                <Text style={styles.head}>
                    Snacks
                </Text>
                <Text style={styles.detail}>
                    {snacks}{'\n'}{'\n'}
                </Text>
                <Text style={styles.head}>
                    Dinner
                </Text>
                <Text style={styles.detail}>
                    {dinner}{'\n'}{'\n'}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'blue',
        textAlign: 'center',
    },
    detail: {
        fontSize: 18,
        textAlign: 'center',
    }
});