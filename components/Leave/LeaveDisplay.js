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



class LeaveDisplay extends React.Component {
    // const {navigate} = this.props.navigation;
    constructor() {
        super();
        this.state = {
            leave: [

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
            url: 'https://201751025.pythonanywhere.com/leave/',
            headers: headers,
        }).then((response) => {
            console.log('resp', response.data)
            this.setState({
                leave: response.data
            })

        }).catch((error) => {
            console.log(error)
        });

    }

    componentDidMount() {
        // this.fetchComplaints()

    }

    componentDidUpdate() {
        // this.fetchComplaints()
    }

    addComplaint() {
        console.log(this.state)
        // let newComplaints = this.state.complaints
        // const newComplaint = {
        //     'id': newComplaints.length + 1,
        //     'title': 'New Complaint',
        //     'author': '',
        //     'content': ''
        // }
        // newComplaints = [
        //     ...newComplaints,
        //     newComplaint
        // ]
        // this.setState({
        //     complaints: newComplaints
        // })

        this.props.navigation.navigate('Leave', Leave)
    }

    render() {
        // console.log('cpl', this.state.complaints)
        // console.log(this.state)
        // console.log('entered', this.props.navigation.getParam('token', 'token'), this.props.navigation.getParam('role', 'role'))
        // complaints = this.state.complaints.map(
        //     c => (
        //         <View style={styles.list} key={c.id}>
        //             <Button
        //                 onPress={() => this.props.navigation.navigate('editCView',
        //                     {
        //                         'id': c.id,
        //                         'title': c.title,
        //                         'content': c.description,
        //                         'role': this.props.navigation.getParam('role', 'role'),
        //                         'status': c.status,
        //                         'token': this.props.navigation.getParam('token', 'token').access
        //                     }
        //                 )}
        //                 text={c.title}
        //                 key={c.id}
        //                 raised
        //                 primary
        //             />
        //             <Divider />
        //         </View>
        //     )
        // )
        // console.log('token', this.props.navigation.getParam('token', 'token'))
        // const token = this.props.navigation.getParam('token', 'token')
        const token = this.props.navigation.getParam('token', 'token')
        return (

            <View style={styles.container}>
                <View>
                    <ScrollView style={styles.scroll}>
                        {/* {complaints} */}
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
