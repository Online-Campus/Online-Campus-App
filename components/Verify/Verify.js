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


// This page asks user to verify email for account activation
class Verify extends React.Component {

    render() {
        return (
            //Main View container
            <View KeyboardAvoidingView behaviour="padding" style={styles.container}>
                <Text style={styles.textVerify}>Please verify your account</Text>
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
    textVerify: {
        fontSize: 30,
        textAlign: 'center'
    }
});

export default (Verify);

