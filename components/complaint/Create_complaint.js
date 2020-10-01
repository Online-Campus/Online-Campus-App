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
import axios from 'axios';
// import console = require('console');

class Create_complaint extends React.Component {

    state = {
        title: '',
        description: '',
        token: null
    }

    //Text value is stored in state
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }

    //Posting complaint on the database
    createComplaint = () => {
        const headers = {
            'Authorization': 'Bearer ' + this.state.token
        }
        const postData = {
            'title': this.state.title,
            'description': this.state.description
        }

        //Using axios for POST method and storing in complaint state
        axios({
            method: 'POST',
            url: 'https://201751025.pythonanywhere.com/complaint/',
            data: postData,
            headers: headers,
        }).then((response) => {
            this.setState({
                complaints: response.data
            })
        }).catch((error) => {
            console.log('error')
        });
        this.props.navigation.navigate('Complaint')

    }

    //Storing the token in state when component mount
    componentDidMount() {
        this.setState({
            token: this.props.navigation.getParam('token', 'token')
        })
        console.log(
            'token2', this.props.navigation.getParam('token', 'token')
        )

    }

    render() {
        return (
            //View class
            <View KeyboardAvoidingView behaviour="padding" style={styles.container}>
                {/* Text filed for title*/}
                <TextField
                    label='Title'
                    onChangeText={val => this.onChangeText('title', val)}
                />
                {/* Text filed for description*/}
                <TextField
                    label='Description'
                    onChangeText={val => this.onChangeText('description', val)}
                />
                {/* Button for creating*/}
                <Button primary raised text="Create" onPress={this.createComplaint} />
            </View>
        );
    }
};

//Style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 20
    }
});

export default (Create_complaint);

