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
import { TouchableOpacity } from 'react-native-gesture-handler';
// import console = require('console');
// import console = require('console');



class HomeScreen extends React.Component {
    // const {navigate} = this.props.navigation;
    constructor(){
        super();
        this.state = { 
            complaints: [
                {
                    'id': 1,
                    'author': 'Neeraj',
                    'title': 'Title 1',
                    'content': 'Khana shuddh nahi milta'
                },
                {
                    'id': 2,
                    'title': 'title 2',
                    'author': 'Jon esnow',
                    'content': 'XUIsdf'
                }
            ]
        }
    }

    addComplaint(){
        // console.log(this.state)
        let newComplaints = this.state.complaints
        newComplaints = [
            ...newComplaints,
            {
                'id': newComplaints.length + 1,
                'title': 'New Complaint',
                'author': '',
                'content': ''
            } 
        ]
        this.setState({
            complaints: newComplaints
        })
    }

    render() {
        // console.log(this.state)

        complaints = this.state.complaints.map(
            c => (
                    <Button 
                        onPress={() => this.props.navigation.navigate('Complaint')} 
                        title={c.title} 
                        style={styles.button} 
                        key={c.id}

                    >
                    </Button>
                )
        )
        return (
            
            <View style={styles.container}>
                { complaints }
                <View
                    style={styles.circleButton}
                >
                    <TouchableOpacity 
                        
                        onPress={this.addComplaint.bind(this)} 
                    >
                        <Text>Circle Button</Text>
                    </TouchableOpacity>
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
    circleButton:{
        padding: 5,
        height: 50,
        width: 50,  
        borderRadius:400, 
        right:60,
        bottom: 80,
        position: "absolute",
        backgroundColor:'#1CB9F0',
      }
});

export default HomeScreen;
