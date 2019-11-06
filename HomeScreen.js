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

    render() {
        // console.log(this.state)

        xy = this.state.complaints.map(
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
                { xy }
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
    }
});

export default HomeScreen;
