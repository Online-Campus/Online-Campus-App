// Component name: HomeScreen
// This component will list all the complaints lodged by the user

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

class HomeScreen extends React.Component {
    // This constructor function initialises the state's complaint list
    constructor() {
        super();
        this.state = {
            complaints: [

            ]
        }
    }

    // This function fetches complaints by the logged in user from the server
    fetchComplaints() {
        const headers = {
            'Authorization': 'Bearer ' + this.props.navigation.getParam('token', 'token').access
        }
        axios({
            method: 'GET',
            url: 'https://201751025.pythonanywhere.com/complaint/',
            headers: headers,
        }).then((response) => {
            this.setState({
                complaints: response.data
            })

        }).catch((error) => {
            console.log(error)
        });

    }

    // This hook calls the function to fetch the complaints when Complaint component is mounted
    componentDidMount() {
        this.fetchComplaints()
    }

    // This hook calls the function to fetch the complaints when Complaint component is updated
    componentDidUpdate() {
        this.fetchComplaints()
    }

    render() {
        //complaints is the list of Buttons leading to detail view of all the fetched complaints
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
                                'status': c.status,
                                'token': this.props.navigation.getParam('token', 'token').access
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
        
        const token = this.props.navigation.getParam('token', 'token')
        return (
            <View style={styles.container}>
                <View>
                    <ScrollView style={styles.scroll}>
                        {complaints}
                    </ScrollView>
                </View>
                <View
                    style={styles.circleButton}
                >
                    {/* Radio button access to change the status of complaint */}
                    {  this.props.navigation.getParam('role', 'role') == "student" &&
                        (<Button
                            style={styles.createButton} raised primary text="+"
                            onPress={() => this.props.navigation.navigate('Create_complaint', { 'token': token.access })}
                            title="Create_complaint"
                        />)
                    }
                </View>
            </View>
        );
    }
};


// Styles of all the elements used in this component
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    list: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 30
    },
    scroll: {
        height: 500,
        paddingBottom: 50
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
        right: 60,
        bottom: 40,
        position: "absolute",
    },
    createButton: {
        borderRadius: 1000,
        right: 60,
        bottom: 80,
        position: "absolute",
    }
});

export default HomeScreen;
