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
import axios from 'axios'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-material-ui';
import { TextField } from 'react-native-materialui-textfield';


class Login extends React.Component {

    state = {
        username: '',
        password: '',
        token: null,
        role: ''
    }


    onChangeText = (key, val) => {
        this.setState({ [key]: val })
        console.log('ok', this.state.username, this.state.password)
    }

    // 201752006@iiitvadodara.ac.in
    fetchDetails = () => {
       //  console.log('clicked_token', this.state.token)
        if(this.state.token){
            const postData = {'username': 'neeraj4', 'password': 'p'}
            const headers = {
                'Authorization': 'Bearer ' + this.state.token.access
            }
            axios({
                method: 'GET',
                url: 'https://201751025.pythonanywhere.com/auth/current_user',
                headers: headers
            }).then((response) => {
                // console.log('resp', response.data.current_user.account_type)
                this.setState({
                    role: response.data.current_user.account_type
                })
                console.log('final', this.state.token, response.data.current_user.account_type)
                this.props.navigation.navigate('Complaint', { 'token': this.state.token, 'role': response.data.current_user.account_type })
            }).catch((error) => {
                console.log(error)
            });
        }
    }

    handleLogin = () => {
        console.log('clicked')
        const postData = {
            'username': this.state.username,
            'password': this.state.password
        }
        console.log('ok', this.state.username, this.state.password)
        // const postData = {'username': 'neeraj4', 'password': 'p'}
        axios({
            method: 'POST',
            url: 'https://201751025.pythonanywhere.com/auth/token/obtain',
            data: postData
        }).then((response) => {
            console.log('resp', response.data.access)
            this.setState({
                token: response.data
            })
            this.fetchDetails()
            // this.props.navigation.navigate('Complaint', { 'token': response.data })
        }).catch((error) => {
            console.log(error)
        });


        
    }

    render() {

        return (
            <View KeyboardAvoidingView behaviour="padding" style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                <TextField
                    style={styles.input}
                    label="Email"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={val => this.onChangeText('username', val)}
                />
                <TextField
                    style={styles.input}
                    label="Password"
                    secureTextEntry
                    returnKeyType="go"
                    ref={(input) => this.passwordInput = input}
                    onChangeText={val => this.onChangeText('password', val)}
                />
                <View style={styles.Button}>
                    <Button primary raised text="Login" onPress={this.handleLogin} />
                </View>
                <View style={styles.Button}>
                    <Button primary raised text="New User! Create New Account" onPress={() => { this.props.navigation.navigate('SignUp') }} />
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20
    },
    Button: {
        marginTop: 20,
    }
});

export default (Login);

