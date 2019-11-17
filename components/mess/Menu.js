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
            breakfast: 'paneer',
            lunch: '-',
            snacks: '-',
            dinner: '-',
        }
    }

    render() {
        const state = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.head}>
                    Breakfast
                </Text>
                <Text style={styles.detail}>
                    {this.state.breakfast}{'\n'}{'\n'}
                </Text>
                <Text style={styles.head}>
                    Lunch
                </Text>
                <Text style={styles.detail}>
                    {this.state.lunch}{'\n'}{'\n'}
                </Text>
                <Text style={styles.head}>
                    Snacks
                </Text>
                <Text style={styles.detail}>
                    {this.state.snacks}{'\n'}{'\n'}
                </Text>
                <Text style={styles.head}>
                    Dinner
                </Text>
                <Text style={styles.detail}>
                    {this.state.dinner}{'\n'}{'\n'}
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