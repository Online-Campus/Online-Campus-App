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
    state = {
        email: '', password: '', re_password: '', first_name: '', last_name: ''
    }
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }
    signUp = () => {
        console.log('clicked')
        const { email, first_name, last_name, password } = this.state

        const postData = {
            "first_name": first_name,
            "last_name": last_name,
            "username": email,
            "email": email,
            "password": password,
        }

        try {
            axios({
                method: 'POST',
                url: 'https://201751025.pythonanywhere.com/auth/register',
                data: postData
            }).then((response) => {
                console.log('resp', response.data)

            }).catch((error) => {
                console.log('error')
            });
        } catch (err) {
            console.log(err)
        }
        this.props.navigation.navigate('Login')
    }


    render() {
        return (
            <View KeyboardAvoidingView behaviour="padding" style={styles.container}>
                <StatusBar backgroundColor="blue" barStyle="light-content" />

                <TextField
                    label="Email"
                    returnKeyType="next"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    onChangeText={val => this.onChangeText('email', val)}
                />
                <TextField
                    style={styles.input}
                    label="First Name"
                    returnKeyType="next"
                    autoCorrect={false}
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    onChangeText={val => this.onChangeText('first_name', val)}
                />
                <TextField
                    style={styles.input}
                    label="Last Name"
                    returnKeyType="next"
                    autoCorrect={false}
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    onChangeText={val => this.onChangeText('last_name', val)}
                />
                <TextField
                    style={styles.input}
                    label="Password"
                    secureTextEntry
                    returnKeyType="next"
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    onChangeText={val => this.onChangeText('password', val)}
                    ref={(input) => this.passwordInput = input}
                />
                <TextField
                    style={styles.input}
                    label="Re-enter Password"
                    secureTextEntry
                    returnKeyType="go"
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    onChangeText={val => this.onChangeText('re_password', val)}
                    ref={(input) => this.passwordInput = input}
                />
                <View style={styles.Button}>
                    <Button primary raised text="Sign Up" onPress={this.signUp} />
                </View>
                <View style={styles.Button}>
                    <Button primary raised text="Already a user? Log In" onPress={() => { this.props.navigation.navigate('Login') }} />
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40
    },
    Button: {
        marginTop: 20,
    }
});

export default SignUp;

