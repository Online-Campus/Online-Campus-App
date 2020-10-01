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

import axios from 'axios';
import { Button } from 'react-native-material-ui';
import { TextField } from 'react-native-materialui-textfield';

export default class Mess extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: {},
            breakfast: '',
            lunch: '',
            snacks: '',
            dinner: ''
        }
    }

    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }

    postMenu = (course) => {
        const day = (this.props.navigation.getParam('day', 'day'))
        let menu = this.state.menu
        if (day == 'monday') {
            if (course == 'b') (menu.monday_breakfast) = this.state.breakfast
            if (course == 'l') (menu.monday_lunch) = this.state.lunch
            if (course == 's') (menu.monday_snacks) = this.state.snacks
            if (course == 'd') (menu.monday_dinner) = this.state.dinner
        } else if (day == 'tuesday') {
            if (course == 'b') (menu.tuesday_breakfast) = this.state.breakfast
            if (course == 'l') (menu.tuesday_lunch) = this.state.lunch
            if (course == 'd') (menu.tuesday_dinner) = this.state.dinner
            if (course == 's') (menu.tuesday_snacks) = this.state.snacks
        } else if (day == 'wednesday') {
            if (course == 'b') (menu.wednesday_breakfast) = this.state.breakfast
            if (course == 'l') (menu.wednesday_lunch) = this.state.lunch
            if (course == 'd') (menu.wednesday_dinner) = this.state.dinner
            if (course == 's') (menu.wednesday_snacks) = this.state.snacks
        } else if (day == 'thursday') {
            if (course == 'b') (menu.thursday_breakfast) = this.state.breakfast
            if (course == 'l') (menu.thursday_lunch) = this.state.lunch
            if (course == 'd') (menu.thursday_dinner) = this.state.dinner
            if (course == 's') (menu.thursday_snacks) = this.state.snacks
        } else if (day == 'friday') {
            if (course == 'b') (menu.friday_breakfast) = this.state.breakfast
            if (course == 'l') (menu.friday_lunch) = this.state.lunch
            if (course == 'd') (menu.friday_dinner) = this.state.dinner
            if (course == 's') (menu.friday_snacks) = this.state.snacks
        } else if (day == 'saturday') {
            if (course == 'b') (menu.saturday_breakfast) = this.state.breakfast
            if (course == 'l') (menu.saturday_lunch) = this.state.lunch
            if (course == 'd') (menu.saturday_dinner) = this.state.dinner
            if (course == 's') (menu.saturday_snacks) = this.state.snacks
        } else {
            if (course == 'b') (menu.sunday_breakfast) = this.state.breakfast
            if (course == 'l') (menu.sunday_lunch) = this.state.lunch
            if (course == 'd') (menu.sunday_dinner) = this.state.dinner
            if (course == 's') (menu.sunday_snacks) = this.state.snacks
        }



        const data = menu

        const token = this.props.navigation.getParam('token', 'token').access
        const headers = {
            'Authorization': 'Bearer ' + token
        }

        axios({
            method: 'PATCH',
            url: 'https://201751025.pythonanywhere.com/messmenu/menu/2',
            headers: headers,
            data: data
        }).then((response) => {
            console.log('Updated menu\n', response.data)
        }).catch((error) => {
            console.log(error)
        });

        this.props.navigation.navigate('Complaint')

    }

    getMenu() {
        console.log('role', this.props.navigation.getParam('role', 'role'))
        const token = this.props.navigation.getParam('token', 'token').access
        const headers = {
            'Authorization': 'Bearer ' + token
        }
        axios({
            method: 'GET',
            url: 'https://201751025.pythonanywhere.com/messmenu/menu/2',
            headers: headers,
        }).then((response) => {
            this.setState({
                menu: response.data
            })
        }).catch((error) => {
            console.log(error)
        });
    }

    componentDidMount() {
        this.getMenu()
    }

    // 201752006@iiitvadodara.ac.in
    render() {
        const menu = this.state.menu
        const day = (this.props.navigation.getParam('day', 'day'))
        const role = (this.props.navigation.getParam('role', 'role'))
        let breakfast = []; let lunch = []; let dinner = []; let snacks = [];

        if (menu.monday_breakfast) {
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
                    {role === "mess_manager" &&
                        <View style={styles.update}>
                            <TextField label="Update Breakfast" onChangeText={val => this.onChangeText('breakfast', val)}></TextField>
                            <Button primary raised text="Update Breakfast" onPress={() => { this.postMenu('b') }} />
                        </View>
                    }
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
                    {role === "mess_manager" &&
                        <View style={styles.update}>
                            <TextField label="Update Lunch" onChangeText={val => this.onChangeText('lunch', val)}></TextField>
                            <Button primary raised text="Update Lunch" onPress={() => { this.postMenu('l') }} />
                        </View>
                    }
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

                    {role === "mess_manager" &&
                        <View style={styles.update}>
                            <TextField label="Update Snacks" onChangeText={val => this.onChangeText('snacks', val)}></TextField>
                            <Button primary raised text="Update Snacks" onPress={() => { this.postMenu('s') }} />
                        </View>
                    }


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
                    {role === "mess_manager" &&
                        <View style={styles.update}>
                            <TextField label="Update Dinner" onChangeText={val => this.onChangeText('dinner', val)}></TextField>
                            <Button primary raised text="Update Dinner" onPress={() => { this.postMenu('d') }} />
                        </View>
                    }
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