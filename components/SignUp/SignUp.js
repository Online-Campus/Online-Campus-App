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
import axios from 'axios';
import { TextField } from 'react-native-materialui-textfield';
import { Button } from 'react-native-material-ui';
import { TouchableOpacity } from 'react-native-gesture-handler';

class SignUp extends React.Component {
    // States for storing deatils entered by user
    state = {
        email: '', password: '', re_password: '', first_name: '', last_name: '', error: ''
    }

    // This function updates state as entered by user
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }

    // This validation function checks if email entered by the user matches the email regex
    validateEmail = (email) => {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    // This function will store user registration details in the database
    signUp = async () => {
        console.log('clicked')
        const { email, first_name, last_name, password, re_password } = this.state

        // Object containing the user details
        const postData = {
            "first_name": first_name,
            "last_name": last_name,
            "username": email,
            "email": email,
            "password": password,
        }

        // Regex defined for valid email
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        this.setState({
            error: ''
        })

        // This function throws error when entered email is incorrect
        if(!re.test(email)){
            this.setState({
                error: 'Email is incorrect.'
            })
            return;
        }

        // This function throws error when password and re-entered passwords do not match.
        if(password != re_password){
            this.setState({
                error: 'Password does not match'
            })
            return;
        }


        // Call to store details in the database
        try {
            await axios({
                method: 'POST',
                url: 'https://201751025.pythonanywhere.com/auth/register',
                data: postData
            }).then((response) => {
                console.log('resp', response.data)

            }).catch((err) => {
                this.setState({
                    error: 'Signup Failed'
                })
                console.log('error');
                // this.rre = true;
            });
        } catch (err) {
            console.log(err);
            // rre = true;
            this.setState({
                error: 'Signup Failed'
            })
        }
       
        console.log(this.state.error);
        if(this.state.error === 'Signup Failed'){
            console.log('Sign Up Failed');
            return;
        }

        // Move to login page if everything works fine
        this.props.navigation.navigate('Login')
    }


    render() {
        return (
            <View KeyboardAvoidingView behaviour="padding" style={styles.container}>
                <StatusBar backgroundColor="blue" barStyle="light-content" />
                {/* Textfield to store email entered by the user */}
                <TextField
                    label="Email"
                    returnKeyType="next"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    onChangeText={val => this.onChangeText('email', val)}
                />
                {/* Textfield to store First Name entered by the user */}
                <TextField
                    style={styles.input}
                    label="First Name"
                    returnKeyType="next"
                    autoCorrect={false}
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    onChangeText={val => this.onChangeText('first_name', val)}
                />
                {/* Textfield to store Last Name entered by the user */}
                <TextField
                    style={styles.input}
                    label="Last Name"
                    returnKeyType="next"
                    autoCorrect={false}
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    onChangeText={val => this.onChangeText('last_name', val)}
                />
                {/* Textfield to store Password entered by the user */}
                <TextField
                    style={styles.input}
                    label="Password"
                    secureTextEntry
                    returnKeyType="next"
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    onChangeText={val => this.onChangeText('password', val)}
                    ref={(input) => this.passwordInput = input}
                />
                {/* Textfield to store re-password entered by the user */}
                <TextField
                    style={styles.input}
                    label="Re-enter Password"
                    secureTextEntry
                    returnKeyType="go"
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    onChangeText={val => this.onChangeText('re_password', val)}
                    ref={(input) => this.passwordInput = input}
                />
                {/* SignUp button, which calls sinUp funtion */}
                <View style={styles.Button}>
                    <Button primary raised text="Sign Up" onPress={this.signUp} />
                </View>
                <Text style={styles.error}>
                    {this.state.error}
                </Text>
                {/* Button to redirect to Login page */}
                <View style={styles.Button}>
                    <Button primary raised text="Already a user? Log In" onPress={() => { this.props.navigation.navigate('Login') }} />
                </View>
            </View>
        );
    }
};


// Styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40
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

export default SignUp;

