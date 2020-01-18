import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import storage from './src/redux/store';
import { View, StyleSheet } from 'react-native';
import Router from './src/config/Router';

// const { store, persistor } = storage();

class App extends Component {
  render() {
    return (
      // <Provider store={store}>
      //   <PersistGate persistor={persistor}>
          <View style={styles.root}>
            <Router />
          </View>
      //   </PersistGate>
      // </Provider>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  }
})

export default App