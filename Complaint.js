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

import Login from './components/login/Login'

class Complaint extends React.Component {

    render() {
        console.log('main_role', this.props.navigation.getParam('role', 'role'))
        return (
            //Main View class
            <View style={styles.container}>
                {/*Button for complaint page and passing the token and role of the user*/}
                <View style={styles.buttonContainer}>
                    <Button onPress={() => this.props.navigation.navigate('Home',
                        {
                            'token': this.props.navigation.getParam('token', 'token'),
                            'role': this.props.navigation.getParam('role', 'role')
                        }
                    )} title="Complaints" style={styles.button}>

                    </Button>
                </View>
                {/*Button for mess page and passing the token and role of the user*/}
                <View style={styles.buttonContainer}>
                    <Button 
                        onPress={() => this.props.navigation.navigate('Mess',
                            {
                                'token': this.props.navigation.getParam('token', 'token'),
                                'role': this.props.navigation.getParam('role', 'role')
                            }
                        )} title="Mess" style={styles.button}>
                    </Button>
                </View>
                {/*Button for leave application page and passing the token and role of the user*/}
                <View style={styles.buttonContainer}>
                    <Button onPress={() => this.props.navigation.navigate('LeaveDisplay',
                        {
                            'token': this.props.navigation.getParam('token', 'token'),
                            'role': this.props.navigation.getParam('role', 'role')
                        }
                    )} title="Leave Application" style={styles.button}>
                    </Button>
                </View>
                {/*Button for calender page and passing the token and role of the user*/}
                <View style={styles.buttonContainer}>
                    <Button onPress={() => this.props.navigation.navigate('Calender',                             {
                                'token': this.props.navigation.getParam('token', 'token'),
                                'role': this.props.navigation.getParam('role', 'role')
                            })} title="Calender" style={styles.button}>
                    </Button>
                </View>
                {/*Logout button*/}
                <View style={styles.out}>
                    <Button onPress={() => this.props.navigation.navigate('Login')} title="Sign Out" style={styles.outButton}>
                    </Button>
                </View>
            </View>
        );
    }
};


//Style
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    button: {
        width: 200,
        height: 70,
        backgroundColor: 'blue',
        marginTop: 150,
        marginLeft: 100,
    },
    buttonContainer: {
        marginTop: 30,
    },
    out: {
        bottom: 40,
        position: 'absolute',
        width: 100,
        left: 300,
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: 'red',
    },
    outButton: {
        backgroundColor: 'red',
    },
});

export default (Complaint);

