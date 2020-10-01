import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    StatusBar,
    KeyboardAvoidingView
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-material-ui';
import { TextField } from 'react-native-materialui-textfield';
import axios from 'axios'

class Leave extends React.Component {

    //State for detail of leave
    state = {
        reason: '',
        description: '',
        token: null,
        from: '',
        to: ''
    }

    //Storing details in the state
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }

    //posting data in the database
    createLeave = () => {
        const headers = {
            'Authorization': 'Bearer ' + this.state.token
        }
        const postData = {
            'reason': this.state.reason,
            "location": "Vadodara",
            "start_date": this.state.from,
            "end_date": this.state.to,
            "status": "submitted"
        }
        console.log('here')

        //Using axios for POST method
        axios({
            method: 'POST',
            url: 'https://201751025.pythonanywhere.com/leave/',
            data: postData,
            headers: headers,
            }).then((response) => {
                console.log('done', response.data)
            }).catch((error) => {
                console.log(error)
            });        
            this.props.navigation.navigate('Complaint')
            // this.props.navigation.dispatch(NavigationActions.back())

    }

    //token is stored in the state when component mount
    componentDidMount(){
        this.setState({
            token: this.props.navigation.getParam('token', 'token')
        })
        console.log(
            'token2', this.props.navigation.getParam('token', 'token')
        )

    }

    render() {
        return (
            //Main View class
            <View KeyboardAvoidingView behaviour="padding" style={styles.container}>
                {/* Textfiled for leave reason */}
                <TextField 
                    label='Leave Reason'
                    onChangeText={val => this.onChangeText('reason', val)}
                />
                {/* Textfiled for date */}
                <TextField 
                    label='From (Date in UTC)'
                    onChangeText={val => this.onChangeText('from', val)}
                />
                {/* Textfiled for date */}
                <TextField 
                    label='To (Date in UTC)'
                    onChangeText={val => this.onChangeText('to', val)}
                />
                <Button primary raised text="Send" onPress={this.createLeave}/>
            </View>
        );
    }
};

//Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20
    }
});

export default (Leave);

