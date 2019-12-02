// Component name: editCView
// This component will display the complaint details and edit access to Faculty

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Button,
    Text,
    StatusBar,
} from 'react-native';

import axios from 'axios'

import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';


var radio_props = [
    { label: 'submitted', value: 0 },
    { label: 'Processing', value: 1 },
    { label: 'closed', value: 2 }
];

// submitted, processing, closed

class editCView extends React.Component {
    // This constructor function initialises the state's application status
    constructor() {
        super()
        state = {
            value: null
        }
    }

    // This function will give the initial application status to the state
    setStatus = () => {
        this.setState(
            { value: this.props.navigation.getParam('status', 'status') }
        )
    }

    // This function will change the application status as provided by the faculty
    changeStatus = () => {
        console.log('changestatus', this.state.value)
        const idx = this.props.navigation.getParam('id', 'id')
        let label = 'submitted'
        if (this.state.value == 1) {
            label = 'processing'
        } else if (this.state.value == 2) {
            label = 'closed'
        }
        const patchData = {
            'status': label
        }
        const headers = {
            'Authorization': 'Bearer ' + this.props.navigation.getParam('token', 'token')
        }
        axios({
            method: 'PATCH',
            url: 'https://201751025.pythonanywhere.com/complaint/update/' + idx,
            headers: headers,
            data: patchData
        }).then((response) => {
            console.log('resp', response.data)
        }).catch((error) => {
            console.log(error)
        });

        this.props.navigation.navigate('Complaint')
    }


    // This function will call the application status once the component mounts
    componentDidMount() {
        this.setStatus()
    }

    render() {
        const role = this.props.navigation.getParam('role', 'role')
        const status = this.props.navigation.getParam('status', 'status')
        const token = this.props.navigation.getParam('token', 'token')

        let val = 0;
        if (status == 'processing') val = 1
        if (status == 'closed') val = 2
        
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.navigation.getParam('title', 'title')}</Text>
                <Text style={styles.description}>{this.props.navigation.getParam('content', 'content')}</Text>
                <Text style={styles.statusDescription}>Status:</Text>
                {/* Radio form will be displayed only when user is a faculty */}
                {role == "faculty" &&
                    <View style={styles.status}>
                        <RadioForm
                            radio_props={radio_props}
                            initial={val}
                            onPress={(value) => { this.setState({ value: value }) }}
                        />

                        <Button title='Update Status' onPress={this.changeStatus}> </Button>
                    </View>
                }
                {/* Application status will be visible to the students */}
                {
                    role != "faculty" &&
                    <Text style={styles.status}>{status}</Text>
                }

            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 5,
    },
    button: {
        width: 200,
        height: 70,
        backgroundColor: 'blue',
        marginTop: 150,
        marginLeft: 100,
    },
    radio: {
        // marginLeft: 'auto',
        // marginRight: 'auto',
        paddingLeft: 30,
        marginTop: 20,
    },
    title: {
        marginTop: 5,
        color: '#1976d2',
        fontSize: 40,
        paddingLeft: 30,
        textAlign: 'center'
    },
    description: {
        fontSize: 20,
        paddingLeft: 30,
        marginTop: 20,
        marginBottom: 40
    },
    statusDescription: {
        paddingLeft: 30,
        fontSize: 20,
        marginTop: 50,
        fontWeight: 'bold',
    },
    status: {
        // textAlign: 'center',
        fontSize: 20,
        paddingLeft: 30,
    }
});

export default (editCView);

