import React, { Component } from 'react';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
// import console = require('console');
import axios from 'axios';
import { Button } from 'react-native-material-ui';
import { TextField } from 'react-native-materialui-textfield';

export default class Mess extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: {}
        }
    }

    getMenu() {
        console.log('clickeddd')
        const token = this.props.navigation.getParam('token', 'token').access
        const headers = {
            'Authorization': 'Bearer ' + token
        }
        axios({
            method: 'GET',
            url: 'https://201751025.pythonanywhere.com/messmenu/',
            headers: headers,
        }).then((response) => {
            this.setState({
                menu: response.data[0]
            })
            // console.log('d', response.data[0])
        }).catch((error) => {
            console.log(error)
        });
    }

    componentWillMount() {
        this.getMenu()
    }

    // 201752006@iiitvadodara.ac.in
    render() {
        const menu = this.state.menu
        const day = (this.props.navigation.getParam('day', 'day'))
        let breakfast = []; let lunch = []; let dinner = []; let snacks = [];

        if (menu.monday_breakfast) {
            console.log(
                (menu.monday_breakfast).split(',')
            )
            if (day == 'monday') {
                breakfast = (menu.monday_breakfast).split(',')
                lunch = (menu.monday_lunch).split(',')
                snacks = (menu.monday_snacks).split(',')
                dinner = (menu.monday_dinner).split(',')
            } else if (day == 'tuesday') {
                breakfast = (menu.tuesday_breakfast).split(',')
                lunch = (menu.tuesday_lunch).split(',')
                dinner = (menu.tuesday_dinner).split(',')
                snacks = (menu.tuesday_snacks).split(',')
            } else if (day == 'wednesday') {
                breakfast = (menu.wednesday_breakfast).split(',')
                lunch = (menu.wednesday_lunch).split(',')
                dinner = (menu.wednesday_dinner).split(',')
                snacks = (menu.wednesday_snacks).split(',')
            } else if (day == 'thursday') {
                breakfast = (menu.thursday_breakfast).split(',')
                lunch = (menu.thursday_lunch).split(',')
                dinner = (menu.thursday_dinner).split(',')
                snacks = (menu.thursday_snacks).split(',')
            } else if (day == 'friday') {
                breakfast = (menu.friday_breakfast).split(',')
                lunch = (menu.friday_lunch).split(',')
                dinner = (menu.friday_dinner).split(',')
                snacks = (menu.friday_snacks).split(',')
            } else if (day == 'saturday') {
                breakfast = (menu.saturday_breakfast).split(',')
                lunch = (menu.saturday_lunch).split(',')
                dinner = (menu.saturday_dinner).split(',')
                snacks = (menu.saturday_snacks).split(',')
            } else {
                breakfast = (menu.sunday_breakfast).split(',')
                lunch = (menu.sunday_lunch).split(',')
                dinner = (menu.sunday_dinner).split(',')
                snacks = (menu.sunday_snacks).split(',')
            }
        }

        return (
            <View style={styles.container}>
                <ScrollView>
                    <Text style={styles.head}>
                        Breakfast
                </Text>
                    <Text style={styles.detail}>
                        {
                            breakfast.map(
                                item => {
                                    return (
                                        <Text>
                                            {item}
                                            {'\n'}
                                        </Text>
                                    )
                                }
                            )
                        }
                    </Text>
                    <View style={styles.update}>
                        <TextField label="Update Breakfast"></TextField>
                        <Button primary raised text="Update Breakfast" onPress={() => { this.props.navigation.navigate('SignUp') }} />
                    </View>
                    <Text style={styles.head}>
                        Lunch
                </Text>
                    <Text style={styles.detail}>
                        {
                            lunch.map(
                                item => {
                                    return (
                                        <Text>
                                            {item}
                                            {'\n'}
                                        </Text>
                                    )
                                }
                            )
                        }
                    </Text>
                    <View style={styles.update}>
                        <TextField label="Update Lunch"></TextField>
                        <Button primary raised text="Update Lunch" onPress={() => { this.props.navigation.navigate('SignUp') }} />
                    </View>
                    <Text style={styles.head}>
                        Snacks
                </Text>
                    <Text style={styles.detail}>
                        {
                            snacks.map(
                                item => {
                                    return (
                                        <Text>
                                            {item}
                                            {'\n'}
                                        </Text>
                                    )
                                }
                            )
                        }
                    </Text>
                    <View style={styles.update}>
                        <TextField label="Update Snacks"></TextField>
                        <Button primary raised text="Update Snacks" onPress={() => { this.props.navigation.navigate('SignUp') }} />
                    </View>
                    <Text style={styles.head}>
                        Dinner
                </Text>
                    <Text style={styles.detail}>
                        {
                            dinner.map(
                                item => {
                                    return (
                                        <Text>
                                            {item}
                                            {'\n'}
                                        </Text>
                                    )
                                }
                            )
                        }
                    </Text>
                    <View style={styles.update}>
                        <TextField label="Update Dinner"></TextField>
                        <Button primary raised text="Update Dinner" onPress={() => { this.props.navigation.navigate('SignUp') }} />
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#1976d2',
        textAlign: 'center',
    },
    detail: {
        fontSize: 18,
        textAlign: 'center',
    },
    update: {
        // width: 250,
        marginBottom: 35
    }
});