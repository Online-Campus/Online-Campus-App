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
        fetch('http://127.0.0.1:8000/complaints/')
            .then((response) => response.json())
            .then(response => {
                this.setState({
                    complaints: response
                })
            })
    }

    componentDidMount() {
        // this.fetchComplaints();
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
        // console.log(this.state)
        complaints = this.state.complaints.map(
            c => (
                <Button
                    onPress={() => this.props.navigation.navigate('editCView',
                        {
                            'id': c.id,
                            'title': c.title,
                            'content': c.content
                        }
                    )}
                    title={c.title}
                    style={styles.button}
                    key={c.id}
                >
                </Button>
            )
        )
        return (

            <View style={styles.container}>
                {complaints}
                <View
                    style={styles.circleButton}
                >
                    <Button style={styles.createButton} raised primary text="+" onPress={() => this.props.navigation.navigate('Create_complaint')} title="Create_complaint" />
                </View>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1
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
        borderRadius: 400,
        right: 60,
        bottom: 80,
        position: "absolute",
    },
    createButton: {
        borderRadius:   1000,
    }
});

export default HomeScreen;
