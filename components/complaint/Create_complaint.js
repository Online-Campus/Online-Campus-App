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

    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }

    createComplaint = () => {
        const headers = {
            'Authorization': 'Bearer ' + this.state.token
        }
        const postData = {
            'title': this.state.title,
            'description': this.state.description
        }

        axios({
            method: 'POST',
            url: 'https://201751025.pythonanywhere.com/complaint/',
            data: postData,
            headers: headers,
            }).then((response) => {
            // console.log('', response.data)
            this.setState({
                complaints: response.data
            })
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
                    label='Title'
                    onChangeText={val => this.onChangeText('title', val)}
                />
                <TextField 
                    label='Description'
                    onChangeText={val => this.onChangeText('description', val)}
                />
                <Button primary raised text="Create" onPress={this.createComplaint}/>
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

