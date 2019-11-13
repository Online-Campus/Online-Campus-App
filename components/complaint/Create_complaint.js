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

class Create_complaint extends React.Component {

    render() {
        return (
            <View KeyboardAvoidingView behaviour="padding" style={styles.container}>
                <TextField label='Title'/>
                <TextField label='Description'/>
                <Button primary raised text="Create" />
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

export default (Create_complaint);

