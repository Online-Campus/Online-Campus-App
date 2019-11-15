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
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
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
        return (
            <View style={styles.container}>
                <Text>{this.props.navigation.getParam('title', 'title')}</Text>
                <Text>{this.props.navigation.getParam('content', 'content')}</Text>
                <RadioForm
                    // style={styles.radio}
                    radio_props={radio_props}
                    initial={0}
                    onPress={(value) => { this.setState({ value: value }) }}
                    // formHorizontal={true}
                />
                {/* <RadioButton style={styles.radio} label="Pubished" checked value="Value" />
                <RadioButton label="Processing" value="Value" />
                <RadioButton label="Done" value="Value" /> */}
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
    radio: {
        marginTop: 3,
    }
});

export default (editCView);

