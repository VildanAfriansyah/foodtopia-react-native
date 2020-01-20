import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Input} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient'
import StarRating from 'react-native-star-rating'
import { connect } from 'react-redux'
import AsyncStorage from '@react-native-community/async-storage'
import jwt_decode from 'jwt-decode'
import NumberFormat from 'react-number-format'

import { getCart } from '../redux/action/Cart'

const styles = StyleSheet.create({
    root : {
        backgroundColor: '#eee', 
        flex:1 
    },
    container : {
        flex:1, 
        marginHorizontal:20, 
        marginTop:20
    },
    lineStyle:{
        borderWidth: 0.6,
        borderColor:'#cccccc',
        marginTop: 20,
        marginBottom: 20
    },
    column : {
        flexDirection: 'column'
    },
    row : {
        flexDirection: 'row',
    },
    card : {
        flexDirection: 'column',
        backgroundColor: '#FFF',
        padding: 10,
        borderRadius: 10,
    },
    image : {
        width: 100,
        height: 100,
        marginBottom: 15,
        borderRadius: 10,
        marginRight: 20
    },
    title : {
        fontWeight: 'bold',
        fontSize: 20,
    },
    rating : {
        color: '#ffed47',
        fontSize: 15
    },
    price : {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#8cfc03'
    },
    input : {
        borderWidth:0.6,
        borderRadius: 8,
        margin : 5,
        fontSize: 15,
        width: 40,
        height: 40,
        marginTop: -1
    },
    rowTotal : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    buttonTotal : {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#ffbf80',
        height: 40,
    },
    textInput : {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        alignContent: 'center',
        width: 20
    },
    buttonDelete : {
        fontSize: 30,
        color: '#ff0000',
        marginLeft: 10
    },
    buy : {
        borderRadius: 10,
        height: 40,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textBuy : {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#FFF',
        marginLeft: 10,
        marginRight: 10
    },
    footer : {
        flexDirection: 'column',
        backgroundColor: '#FFF',
        paddingTop: 10,
        paddingHorizontal: 10,
        borderTopColor: '#bababa',
        borderTopWidth: 0.8,
    },
    buyNow : {
        borderRadius: 10,
        height: 50,
        width: 110,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textbuyNow : {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#FFF',
        marginLeft: 10,
        marginRight: 10
    },
    delete : {
        borderRadius: 10,
        height: 50,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textDelete : {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#FFF',
        marginLeft: 10,
        marginRight: 10
    },
    addBuy : {
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textAddBuy : {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#FFF',
        marginLeft: 10,
        marginRight: 10
    },
    rowCart : {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    whislist : {
        marginLeft: -20,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconWhislist : {
        fontSize: 30,
        color: '#ff0000'
    },
    rowFooter : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 10,
    },
    subtotal : {
        fontWeight: 'bold',
        fontSize: 15
    }

})

class Cart extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
          name: ''
        }
      }

      async componentDidMount (){
        const token = this.props.login.data.auth
        const decode = jwt_decode(token)
        const id = decode.id
        console.log(token,id)
        await this.props.dispatch(getCart(id,token))
      }
    
    

    render() {
        return (
            <View style={ styles.root }>
                <View style={ styles.container }>

                    
                    <ScrollView>
                    <View style = { styles.card }>
                        {!this.state.isLoading && this.props.cart.data.map((v, i) => { 
                    return(
                        <>
                            <View style = { styles.column } key = { v.id_cart }>
                                <View style = { styles.row }>
                                    <View style = { styles.image }>
                                        <Image style = { styles.image } source = {require('../../images/1.jpg')} />
                                    </View>
                                    <View style = { styles.column }>
                                        <View>
                                            <Text style = { styles.title }>{ v.item_name }</Text>
                                        </View>
                                        <View style = { styles.rating }>
                                            <StarRating 
                                                fullStarColor = { '#F5D200' }
                                                starSize = { 15 }
                                                disabled = { true }
                                                maxStars = { 5 }
                                                rating = { v.rate } 
                                                selectedStar = { (rating) => this.onStarRatingPress(rating)} 
                                            />
                                        </View>
                                        <View>
                                            <NumberFormat 
                                                value={v.price} 
                                                displayType={'text'} 
                                                thousandSeparator={true} 
                                                prefix={'Rp. '} 
                                                renderText={value => <Text style = { styles.price }>{value}</Text>} 
                                            />
                                        </View>
                                        <View>
                                            <NumberFormat 
                                                value={v.price * v.total} 
                                                displayType={'text'} 
                                                thousandSeparator={true} 
                                                prefix={'Rp. '} 
                                                renderText={value => <Text>{value}</Text>} 
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                            

                            {/* <View style = { styles.lineStyle } /> */}
                            
                            <View style = { styles.rowTotal }>
                                <View style = { styles.row }>
                                    <View style = { styles.row }>
                                        <TouchableOpacity>
                                            <Icon style = { styles.buttonTotal } name = 'minus-square' />
                                        </TouchableOpacity>
                                    </View>
                                    <View style = { styles.input }>
                                            <Input style = { styles.textInput }  >{ v.total }</Input>
                                    </View>
                                    <View style = { styles.row }>
                                        <TouchableOpacity>
                                            <Icon style = { styles.buttonTotal } name = 'plus-square' />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style = { styles.row }>
                                    <TouchableOpacity>
                                        <Icon style = { styles.buttonDelete } name = 'trash' />
                                    </TouchableOpacity>
                                </View>
                                <View style = { styles.row }>
                                    <TouchableOpacity style = { styles.addCart }>
                                        <LinearGradient style = { styles.buy } start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#e78d8d', '#e76565']} >
                                            <Text style = { styles.textBuy }>Beli</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            </>
                            )
                        })}

                            <View style = { styles.lineStyle } />




                        </View>
                    </ScrollView>
                </View>
                <View style = { styles.footer }>
                    <View style = { styles.rowCart }>
                        <View style = { styles.whislist }>
                            <Text style = { styles.subtotal }>Total : Rp. 60.000</Text>
                        </View>
                        <View style = { styles.row }>
                            <View style = { styles.rowFooter }>
                                <TouchableOpacity style = { styles.delete }>
                                    <LinearGradient style = { styles.delete } start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#ffbf80', '#ffa64d']} >
                                        <Text style = { styles.textDelete }>Hapus</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                            <View style = { styles.rowFooter }>
                                <TouchableOpacity style = { styles.buyNow }>
                                    <LinearGradient style = { styles.buyNow } start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#e78d8d', '#e76565']} >
                                        <Text style = { styles.textbuyNow }>Beli Sekarang</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>


                    <View style = { styles.lineStyle } />


                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        login: state.login,
        cart: state.cart
    }
  }
  
export default connect(mapStateToProps)(Cart)