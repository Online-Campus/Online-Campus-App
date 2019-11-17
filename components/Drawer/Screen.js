import { createAppContainer } from 'react-navigation';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation-stack';
import HomeScreen from '../../HomeScreen';
import HomeScreen from '../../Complaint';

const MyDrawerNavigator = createDrawerNavigator({
    Complaint: {
        screen: Complaint,
    },
    HomeScreen: {
        screen: HomeScreen,
    },
});

const App = createAppContainer(MyDrawerNavigator);

// export default createStackNavigator({
//   Home: { screen: HomeScreen },
//   Complaint: {screen: Complaint},
// });;

export default App;
