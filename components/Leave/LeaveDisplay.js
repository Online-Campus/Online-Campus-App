import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import leaveView from './leaveView'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Button } from 'react-native-material-ui';
import axios from 'axios';
import { Divider } from 'react-native-material-ui';
// import console = require('console');
// import console = require('console');



class LeaveDisplay extends React.Component {
    // const {navigate} = this.props.navigation;
    constructor() {
        super();
        this.state = {
            leave: [

            ]
        }
    }

    fetchLeaves =()=> {
        console.log('token', this.props.navigation.getParam('token', 'token'))
        const token = this.props.navigation.getParam('token', 'token').access
        const headers = {
            'Authorization': 'Bearer ' + token
        }
        axios({
            method: 'GET',
            url: 'https://201751025.pythonanywhere.com/leave/',
            headers: headers,
        }).then((response) => {
            console.log('respo', response.data)
            this.setState({
                leave: response.data
            })

        }).catch((error) => {
            console.log(error)
        });

    }

    componentDidMount() {
        this.fetchLeaves()

    }

    render() {
        // console.log('cpl', this.state.complaints)
        // console.log(this.state)
        // console.log('entered', this.props.navigation.getParam('token', 'token'), this.props.navigation.getParam('role', 'role'))
        leaves = this.state.leave.map(
            c => (
                <View style={styles.list} key={c.id}>
                    <Button
                        onPress={() => this.props.navigation.navigate('leaveView',
                            {
                                'id': c.id,
                                'reason': c.reason,
                                'location': c.location,
                                 'sdate': c.start_date,
                                  'edate': c.end_date,
                                'role': this.props.navigation.getParam('role', 'role'),
                                'status': c.status,
                                'token': this.props.navigation.getParam('token', 'token').access
                            }
                        )}
                        text={c.reason}
                        key={c.id}
                        raised
                        primary
                    />
                    <Divider />
                </View>
            )
        )
        // console.log('token', this.props.navigation.getParam('token', 'token'))
        const token = this.props.navigation.getParam('token', 'token')
        const role = this.props.navigation.getParam('role', 'role')
        console.log(role)
        return (
            <View style={styles.container}>

                <View>
                    <ScrollView style={styles.scroll}>
                        {leaves}
                    </ScrollView>
                </View>
                <View
                    style={styles.circleButton}
                >
                    <Button
                        style={styles.createButton} raised primary text="Create Leave application"
                        onPress={() => this.props.navigation.navigate('Leave', { 'token': token.access })}
                        title="Leave"
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
        // width: 50,
        // borderRadius: 400,
        right: 60,
        bottom: 40,
        position: "absolute",
        // borderWidth: 3,
        // borderColor: 'blue',
    },
    createButton: {
        borderRadius: 1000,
        right: 60,
        bottom: 80,
        position: "absolute",
    }
});

export default LeaveDisplay;
