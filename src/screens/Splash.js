import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import { connect } from 'react-redux';

// create a component
class Splash extends Component {
    componentDidMount() {
        setTimeout(() => {
            if (!this.props.auth.data.token) {
                this.props.navigation.navigate('UserAuthentication')
            } else {
                this.props.navigation.navigate('Home')
            }
        }, 3000)
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/icons/favicon.png')} style={styles.logo} />
                <Text style={styles.title}>Fodel</Text>
            </View>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 110,
        height: 110,
    },
    title: {
        fontFamily: 'Nunito-Regular',
        fontSize: 40,
        color: '#2c7c96',
    }
});


const mapStateToProps = state => {
    return {
        auth: state.auth,
    }
}

//make this component available to the app
export default connect(mapStateToProps)(Splash);