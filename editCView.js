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

class editCView extends React.Component {
    // const {navigate} = this.props.navigation;
    constructor(){
        super()
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text>{ this.props.navigation.getParam('title', 'title') }</Text>
                <Text>{ this.props.navigation.getParam('content', 'content') }</Text>
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

export default (editCView);

