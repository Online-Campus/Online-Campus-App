import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-material-ui';
import axios from 'axios';
import { Divider } from 'react-native-material-ui';
// import console = require('console');
// import console = require('console');



class HomeScreen extends React.Component {
    // const {navigate} = this.props.navigation;
    constructor() {
        super();
        this.state = {
            complaints: [

            ]
        }
    }

    fetchComplaints() {
        // console.log('token', this.props.navigation.getParam('token', 'token'))
        const headers = {
            'Authorization': 'Bearer ' + this.props.navigation.getParam('token', 'token').access
        }
        axios({
            method: 'GET',
            url: 'https://201751025.pythonanywhere.com/complaint/',
            headers: headers,
        }).then((response) => {
            // console.log('resp', response.data)
            this.setState({
                complaints: response.data
            })

        }).catch((error) => {
            console.log(error)
        });

    }

    componentDidMount() {
        this.fetchComplaints()
        
    }

    componentDidUpdate(){
        this.fetchComplaints()
    }

    addComplaint() {
        console.log(this.state)
        let newComplaints = this.state.complaints
        const newComplaint = {
            'id': newComplaints.length + 1,
            'title': 'New Complaint',
            'author': '',
            'content': ''
        }
        newComplaints = [
            ...newComplaints,
            newComplaint
        ]
        this.setState({
            complaints: newComplaints
        })

        this.props.navigation.navigate('editCView', newComplaint)
    }

    render() {
        // console.log('cpl', this.state.complaints)
        // console.log(this.state)
        // console.log('entered', this.props.navigation.getParam('token', 'token'), this.props.navigation.getParam('role', 'role'))
        complaints = this.state.complaints.map(
            c => (
                <View style={styles.list} key={c.id}>
                    <Button
                        onPress={() => this.props.navigation.navigate('editCView',
                            {
                                'id': c.id,
                                'title': c.title,
                                'content': c.description,
                                'role': this.props.navigation.getParam('role', 'role'),
                                'status': c.status
                            }
                        )}
                        text={c.title}
                        key={c.id} 
                        raised
                        primary
                    />
                    <Divider />
                </View>
            )
        )
        // console.log('token', this.props.navigation.getParam('token', 'token'))
        // const token = this.props.navigation.getParam('token', 'token')
        const token = this.props.navigation.getParam('token', 'token')
        return (

            <View style={styles.container}>
                {complaints}
                <View
                    style={styles.circleButton}
                >
                    <Button 
                        style={styles.createButton} raised primary text="+" 
                        onPress={() => this.props.navigation.navigate('Create_complaint', { 'token': token.access })} 
                        title="Create_complaint" 
                    />
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    list: {
        marginTop: 30,
    },
    button: {
        width: 200,
        height: 70,
        backgroundColor: 'blue',
        marginTop: 150,
        marginLeft: 100,
    },
    circleButton: {
        padding: 5,
        height: 50,
        width: 50,
        // borderRadius: 400,
        right: 60,
        bottom: 80,
        position: "absolute",
        // borderWidth: 3,
        // borderColor: 'blue',
    },
    createButton: {
        borderRadius: 1000,
    }
});

export default HomeScreen;
