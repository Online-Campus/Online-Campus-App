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

class Login extends React.Component {

    render() {
        return (
            <View KeyboardAvoidingView behaviour="padding" style={styles.container}>
                <TextInput 
                    style = {styles.input}
                    placeholder="email"
                    returnKeyType="next"
                    placeholderTextColor='rgba(255,255,255,0.7)'
                />
                <TextInput 
                    style = {styles.input}
                    placeholder="password"
                    secureTextEntry
                    returnKeyType="go"
                    placeholderTextColor='rgba(255,255,255,0.7)'
                />
                <TouchableOpacity
                    style={styles.buttonContainer}
                >
                    <Text style={styles.button}> 
                        Login
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
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

export default (Login);

