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

    state = {
        reason: '',
        description: '',
        token: null,
        from: '',
        to: ''
    }

    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }

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
        // console.log(this.state.token, this.state.title, this.state.description)

        axios({
            method: 'POST',
            url: 'https://201751025.pythonanywhere.com/leave/',
            data: postData,
            headers: headers,
            }).then((response) => {
                console.log('done', response.data)
            }).catch((error) => {
                console.log('error')
            });        
            this.props.navigation.navigate('Complaint')
            // this.props.navigation.dispatch(NavigationActions.back())

    }

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
            <View KeyboardAvoidingView behaviour="padding" style={styles.container}>
                <TextField 
                    label='Leave Reason'
                    onChangeText={val => this.onChangeText('reason', val)}
                />
                <TextField 
                    label='From (Date in UTC)'
                    onChangeText={val => this.onChangeText('from', val)}
                />
                <TextField 
                    label='To (Date in UTC)'
                    onChangeText={val => this.onChangeText('to', val)}
                />
                <Button primary raised text="Send" onPress={this.createLeave}/>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20
    }
});

export default (Leave);

