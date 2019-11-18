import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    StatusBar,
    KeyboardAvoidingView,
    Linking
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-material-ui';
import axios from 'axios';
import { TextField } from 'react-native-materialui-textfield';

class Calender extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            academic: '',
            holiday: '',
            exam: ''
        }
    }

    fetchDates() {
        // console.log('token', this.props.navigation.getParam('token', 'token'))
        const headers = {
            'Authorization': 'Bearer ' + this.props.navigation.getParam('token', 'token').access
        }
        axios({
            method: 'GET',
            url: 'https://201751025.pythonanywhere.com/dates/1',
            headers: headers,
        }).then((response) => {
            console.log('resp', response.data)
            this.setState({
                academic: response.data.academic_link,
                exam: response.data.exam_link,
                holiday: response.data.holiday_link,
            })

        }).catch((error) => {
            console.log(error)
        });

    }

    componentDidMount() {
        this.fetchDates()

    }

    componentDidUpdate() {
        this.fetchDates()
    }

    render() {
        return (
            <View KeyboardAvoidingView behaviour="padding" style={styles.container}>
                <View style={styles.button}>
                    <Button style={styles.button} onPress={() => Linking.openURL(this.state.academic)} primary raised text="Academic Calender" />
                </View>
                <View style={styles.button}>
                    <Button style={styles.button} onPress={() => Linking.openURL(this.state.holiday)} primary raised text="Holiday Dates" />
                </View>
                <View style={styles.button}>
                    <Button style={styles.button} onPress={() => Linking.openURL(this.state.exam)} primary raised text="Exam Dates" />
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20,
    },
    button: {
        marginTop: 50,
        marginBottom: 30
    }
});

export default (Calender);

