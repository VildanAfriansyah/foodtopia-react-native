import React, { Component } from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Icon from 'react-native-vector-icons/FontAwesome'

import MainScreen from '../screens/MainScreen'
import Profile from '../screens/Profile'
import UserRedirect from '../screens/UserRedirect'
import Whistlist from '../screens/Whistlist'
import Cart from '../screens/Cart'
import DetailItem from '../screens/DetailItem'
import ListItem from '../screens/ListItem'

const navHome = createStackNavigator({
    Home: {
        screen: MainScreen,
        navigationOptions: {
            headerShown: false,
        }
    },
    List: {
        screen: ListItem,
        navigationOptions: {
            headerShown: false,
        }
    },
    Detail: {
        screen: DetailItem,
        navigationOptions: {
            headerShown: false,
        }
    }
},{ initialRouteName: 'Home' })

navHome.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        if(navigation.state.List){
            tabBarVisible = true
        }else{
            tabBarVisible = false
        }
    }
    return {
        tabBarVisible,
    } 
}

const navWhistlist = createStackNavigator({
    whistlist: {
        screen: Whistlist,
        navigationOptions: {
            headerShown: false,
        }
    },
},{ initialRouteName: 'whistlist' })

const navCart = createStackNavigator({
    cart: {
        screen: Cart,
        navigationOptions: {
            headerShown: false,
        }
    },
},{ initialRouteName: 'cart' })

const navProfile = createStackNavigator({
    profile: {
        screen: Profile,
        navigationOptions: {
            headerShown: false,
        }
    },
}, { initialRouteName: 'profile' }) 

const BottomNav = createBottomTabNavigator({
    MainScreen: {
        screen: navHome,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Icon name="home" size={25} color={tintColor} />;
            },
        },
    },
    whistlist: {
        screen: navWhistlist,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Icon name="heart" size={25} color={tintColor} />;
            },
        },
    },
    cart: {
        screen: navCart,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Icon name="cart-arrow-down" size={25} color={tintColor} />;
            },
        },
    },
    Profile: {
        screen: navProfile,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <Icon name="user" size={25} color={tintColor} />;
            },
        },
    },
}, {
    initialRouteName: 'MainScreen',
    tabBarOptions: {
        activeTintColor: 'white',
        activeBackgroundColor: '#e76565',
        inactiveTintColor: '#e76565',
        style: {
            backgroundColor: 'white',
            borderTopColor: 'transparent',
        },
        showLabel: false
    }
})

const SwitchNav = createSwitchNavigator({
    // SplashNav,
    BottomNav,
}, {
    initialRouteName: 'BottomNav',
})

const AppContainer = createAppContainer(SwitchNav)

// create a component
class Router extends Component {
    render() {
        return (
            <AppContainer />
        );
    }
}

//make this component available to the app
export default Router;