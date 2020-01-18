import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native'
import { Card } from 'native-base'
import LinearGradient from 'react-native-linear-gradient'
const styles = StyleSheet.create({
  root : {
    flex: 1,
  },
  input : {
    borderWidth:0.6,
    borderRadius: 8,
    paddingLeft: 20,
    margin : 10,
    fontSize: 15
  },
  formItem : {
    marginTop: 5,
    marginBottom: 5,
  },
  buttonText : {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 17,
    textTransform:'uppercase'
  },
  backgroundImage : {
    width : '100%',
    height : '100%',
    justifyContent : 'center',
    alignItems : 'center',
    flex : 1
  },
  container : {
    flex : 1,
    justifyContent: 'center'
  },
  row : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5
  },  
  card : {
    flexDirection: 'column',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius : 20, 
    width : 300, 
    // opacity: 0.6
    
  },
  linearGradient: {
    height: 45,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
  column : {
    flexDirection: 'column'
  },
  buttonLogin : {
    borderRadius: 8,
    height: 45,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  buttonTextLogin : {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 15,
  },
  buttonRegister : {
    backgroundColor: '#FFF',
    borderRadius: 8,
    height: 45,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
  },
  buttonTextRegister : {
    fontWeight: 'bold',
    color: 'rgb(231,101,100)',
    fontSize: 15
  },
  text : {
    fontWeight: 'bold',
    color: '#e76565',
    alignSelf: 'center',
    fontSize: 17,
  },

  buttonFacebook : {
    alignItems: 'center',
    width: 90,
    height: 30,
    backgroundColor : '#3A559F',
    borderRadius: 5,
    margin: 5,
  },
  buttonGoogle : {
    alignItems: 'center',
    width: 90,
    height: 30,
    backgroundColor : '#3f7fee',
    borderRadius: 5,
    margin: 5,
  }, 
  buttonLine : {
    alignItems: 'center',
    width: 90,
    height: 30,
    backgroundColor : '#5BD037',
    borderRadius: 5,
    margin: 5,
  },
  buttonTextLogin : {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 15,
  },
  buttonTextRegister : {
    fontWeight: 'bold',
    color: 'rgb(231,101,100)',
    fontSize: 15
  },
  buttonTextFacebook : {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 15,
    marginTop: 4
  },
  ImageFacebook : {
    height: 25,
    width: 20,
    backgroundColor: '#FFF',
    marginRight: 5
  },
  facebookRow : {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonTextGoogle : {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 15,
    marginTop: 1
  },
  ImageGoogle : {
    height: 23,
    width: 20,
    backgroundColor: '#FFF',
    marginRight: 5,
    borderRadius: 3,
  },
  googleRow : {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3
  },
  buttonTextLine : {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 15,
    marginTop: 1
  },
  ImageLine : {
    height: 23,
    width: 20,
    backgroundColor: '#FFF',
    marginRight: 5,
    borderRadius: 3
  },
  lineRow : {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3
  },
})
export default class App extends Component {
  render() {
    return (
      <ImageBackground source = {require('../../images/background.jpg')} style = { styles.root }>
        
        <View style = { styles.container }>
          <Card style = {styles.card} transparent>
            <View style={styles.formItem}>
              <TextInput style={styles.input} placeholder='Username' />
            </View>
            <View style={styles.formItem}>
              <TextInput style={styles.input} placeholder='Password' />
            </View>
            <View style = { styles.row }>
              <View style = { styles.row }>
                <LinearGradient style={styles.buttonLogin} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#e78d8d', '#e76565']} >
                  <TouchableOpacity style = { styles.buttonLogin }>
                    <Text style = { styles.buttonTextLogin }>MASUK</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
              <View style = { styles.row }>
                <TouchableOpacity style = { styles.buttonRegister }>
                  <Text style = { styles.buttonTextRegister }>BUAT AKUN</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style = { styles.column }>
              <Text style = { styles.text }>Sign In Dengan Cara Lain</Text>
            </View>
            <View style = { styles.row }>
              <View style = { styles.row }>
                <TouchableOpacity style = { styles.buttonFacebook }>
                  <View style = { styles.facebookRow }>
                    <Image style = { styles.ImageFacebook } source = {require('../../images/facebook.png')} />
                    <Text style = { styles.buttonTextFacebook }>Facebook</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style = { styles.buttonGoogle }>
                  <View style = { styles.googleRow }>
                    <Image style = { styles.ImageGoogle } source = {require('../../images/google.png')} />
                    <Text style = { styles.buttonTextGoogle }>Google</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity style = { styles.buttonLine }>
                  <View style = { styles.lineRow }>
                    <Image style = { styles.ImageLine } source = {require('../../images/line.png')} />
                    <Text style = { styles.buttonTextLine }>LINE</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </Card>
        </View>
       
      </ImageBackground>
    )
  }
}