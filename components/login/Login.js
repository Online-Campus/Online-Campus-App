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
        role: '',
        error: '',
        verify: false
    }


    onChangeText = (key, val) => {
        this.setState({ [key]: val })
        console.log('ok', this.state.username, this.state.password)
    }

    fetchDetails = () => {
        if(this.state.token){
            const postData = {'username': 'neeraj4', 'password': 'p'}
            const headers = {
                'Authorization': 'Bearer ' + this.state.token.access
            }
            //Using axios for GET method and storing role of user in the state
            axios({
                method: 'GET',
                url: 'https://201751025.pythonanywhere.com/auth/current_user',
                headers: headers
            }).then((response) => {
                // console.log('resp', response.data.current_user.account_type)
                this.setState({
                    role: response.data.current_user.account_type
                })
                console.log('final', this.state.token, response.data.current_user.is_verified)
<<<<<<< HEAD
                // if(response.data.current_user.is_verified  == false){
                //     this.props.navigation.navigate('Verify')
                //     // console.log()
                // }
                // else {
                //     this.props.navigation.navigate('Complaint', { 'token': this.state.token, 'role': response.data.current_user.account_type })
                // }
=======
>>>>>>> d7dbd2b16b338a756d92a49492c7005581f513c2
                this.props.navigation.navigate('Complaint', { 'token': this.state.token, 'role': response.data.current_user.account_type })
            }).catch((error) => {
                console.log(error)
            });
        }
    }


    //When username and password is entered.
    //Token is recieved if both fields are correct
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
            console.log(error);
            this.setState({
                error: 'Check your Email or Password'
            })
        });


        
    }

    render() {

        return (
            <View KeyboardAvoidingView behaviour="padding" style={styles.container}>
                <StatusBar
                    barStyle="light-content"
                />
                {/*Field for Username and email */}
                <TextField
                    style={styles.input}
                    label="Email or Username"
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={val => this.onChangeText('username', val)}
                />
                {/*Field for password */}
                <TextField
                    style={styles.input}
                    label="Password"
                    secureTextEntry
                    returnKeyType="go"
                    ref={(input) => this.passwordInput = input}
                    onChangeText={val => this.onChangeText('password', val)}
                />
                {/* Button for login which calls handlelogin function */}
                <View style={styles.Button}>
                    <Button primary raised text="Login" onPress={this.handleLogin} />
                </View>
                <Text style={styles.error}>
                    {this.state.error}
                </Text>
                {/* Signup button for new user */}
                <View style={styles.Button}>
                    <Button primary raised text="New User! Create New Account" onPress={() => { this.props.navigation.navigate('SignUp') }} />
                </View>
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
    },
    Button: {
        marginTop: 20,
    },
    error: {
        textAlign: 'center',
        fontSize: 20,
        color: 'red',
        marginTop: 5
    }
});

export default (Login);

