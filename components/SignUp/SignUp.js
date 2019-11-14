import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Button,
    Text,
    TextInput,
    StatusBar,
    KeyboardAvoidingView
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

class SignUp extends React.Component {
    state = {
        email: '', password: '', re_password: '', first_name: '', last_name: ''
    }
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }
    signUp = async () => {
        const { email, first_name, last_name, password } = this.state
        try {
          console.log('SignUp ho gya')
        } catch (err) {
          console.log('Error aa gaya')
        }
    }


    render() {
        return (
            <View KeyboardAvoidingView behaviour="padding" style={styles.container}>
                <StatusBar backgroundColor="blue" barStyle="light-content" />
 
                <TextInput 
                    style = {styles.input}
                    placeholder="Email"
                    returnKeyType="next"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    onChangeText={val => this.onChangeText('email', val)}
                />
                <TextInput 
                    style = {styles.input}
                    placeholder="First Name"
                    returnKeyType="next"
                    autoCorrect={false}
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    onChangeText={val => this.onChangeText('first_name', val)}
                />
                 <TextInput 
                    style = {styles.input}
                    placeholder="Last Name"
                    returnKeyType="next"
                    autoCorrect={false}
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    onChangeText={val => this.onChangeText('last_name', val)}
                />
                <TextInput 
                    style = {styles.input}
                    placeholder="Password"
                    secureTextEntry
                    returnKeyType="next"
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    onChangeText={val => this.onChangeText('password', val)}
                    ref = {(input) => this.passwordInput=input}
                />
                <TextInput 
                    style = {styles.input}
                    placeholder="re-enter Password"
                    secureTextEntry
                    returnKeyType="go"
                    placeholderTextColor='rgba(255,255,255,0.7)'
                    onChangeText={val => this.onChangeText('re_password', val)}
                    ref = {(input) => this.passwordInput=input}
                />
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={this.signUp}
                >
                    <Text style={styles.button}> 
                        Sign Up
                    </Text>
                </TouchableOpacity>
                {/* Idhar ek login ka button bhi add karna hai */}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        height: '100%',
        flex: 1,
        backgroundColor: 'rgb(99, 110, 114)',
        padding: 20
    },
    buttonContainer: {
        backgroundColor: 'rgb(45, 52, 54)',
        height: 40,
        marginTop: 10,
        paddingTop: 10
    },
    button: {
        textAlign: 'center',
        color: 'white',
        
    },
    input: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        height: 40,
        color: 'white',
        paddingHorizontal: 10,
        marginBottom: 10
    }
});

export default SignUp;

