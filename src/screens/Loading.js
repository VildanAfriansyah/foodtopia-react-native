import React, { Component } from 'react'
import { 
  Text, 
  View, 
  ImageBackground, 
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal
} from 'react-native'
import { Spinner } from 'native-base'
import LinearGradient from 'react-native-linear-gradient'


const styles = StyleSheet.create({
  roots : {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  table : {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  column : {
    flexDirection: 'column'
  },
  row : {
    flexDirection: 'row'
  },
  
})

export default class App extends Component {

    state = {
        modalVisible: false,
      };

    componentDidMount() {
        this.setState({modalVisible: true})
        setTimeout(()=>{this.setState({modalVisible: false})},1000)
    }
    
    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }

  render() {
    return (
      <View style = { styles.roots }>
              <Spinner />
      </View>
    )
  }
}
