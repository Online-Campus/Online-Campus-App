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
// import { RadioButton } from 'react-native-material-ui';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
// import console = require('console');
// import console = require('console');

var radio_props = [
    { label: 'Posted', value: 0 },
    { label: 'Processing', value: 1 },
    { label: 'Done', value: 2 }
];

class editCView extends React.Component {
    // const {navigate} = this.props.navigation;
    constructor() {
        super()
    }


    render() {
        const role = this.props.navigation.getParam('role', 'role')
        const status = this.props.navigation.getParam('status', 'status')

        const statusField = (role == 'faculty')?(

            <RadioForm
                style={styles.radio}
                radio_props={radio_props}
                initial={0}
                onPress={(value) => { this.setState({ value: value }) }}
                // formHorizontal={true}
            />
        ):(
            <Text>
                {status}
            </Text>
        )

        return (
            <View style={styles.container}>
                <Text style={styles.title}>{this.props.navigation.getParam('title', 'title')}</Text>
                <Text style={styles.description}>{this.props.navigation.getParam('content', 'content')}</Text>
                <Text style={styles.status}>{status}</Text>
                {/* <RadioButton style={styles.radio} label="Pubished" checked value="Value" />
                <RadioButton label="Processing" value="Value" />
                <RadioButton label="Done" value="Value" /> */}
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
    status: {
        // textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 50,
        fontSize: 20,
        paddingLeft: 30,
    }
});

export default (editCView);

