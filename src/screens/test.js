import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Input} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient'

const styles = StyleSheet.create({
    root : {
        flexDirection: 'column',
        backgroundColor: '#EEE'
    },
    container : {
        margin: 20,
    },
    lineStyle:{
        borderWidth: 0.6,
        borderColor:'#cccccc',
        marginTop: 10,
        marginBottom: 10
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
        marginBottom: 5,
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
        fontSize: 15
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
        justifyContent: 'space-between'
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
        padding: 10,
        borderTopColor: '#bababa',
        borderTopWidth: 0.8,
    },
    addCart : {
        borderRadius: 10,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textAddCart : {
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
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconWhislist : {
        fontSize: 30,
        color: '#ff0000'
    }

})

export default class Cart extends Component {
    render() {
        return (
            <View style = { styles.root }>
               <View style = { styles.container }>
                    <ScrollView>
                        <View style = { styles.card }>
                            <View style = { styles.column }>
                                <View style = { styles.row }>
                                    <View style = { styles.image }>
                                        <Image style = { styles.image } source = {require('../../images/1.jpg')} />
                                    </View>
                                    <View style = { styles.column }>
                                        <View>
                                            <Text style = { styles.title }>Title</Text>
                                        </View>
                                        <View>
                                            <Text style = { styles.rating }>rating</Text>
                                        </View>
                                        <View>
                                            <Text style = { styles.price }>Price</Text>
                                        </View>
                                        <View>
                                            <Text style = { styles.price }>Total</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style = { styles.rowTotal }>
                                <View style = { styles.row }>
                                <View style = { styles.row }>
                                    <TouchableOpacity>
                                        <Icon style = { styles.buttonTotal } name = 'minus-square' />
                                    </TouchableOpacity>
                                </View>
                                <View style = { styles.input }>
                                    <Input style = { styles.textInput } value = '1' />
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


                            <View style = { styles.lineStyle } />

                            <View style = { styles.column }>
                                <View style = { styles.row }>
                                    <View style = { styles.image }>
                                        <Image style = { styles.image } source = {require('../../images/1.jpg')} />
                                    </View>
                                    <View style = { styles.column }>
                                        <View>
                                            <Text style = { styles.title }>Title</Text>
                                        </View>
                                        <View>
                                            <Text style = { styles.rating }>rating</Text>
                                        </View>
                                        <View>
                                            <Text style = { styles.price }>Price</Text>
                                        </View>
                                        <View>
                                            <Text style = { styles.price }>Total</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                            <View style = { styles.rowTotal }>
                                <View style = { styles.row }>
                                <View style = { styles.row }>
                                    <TouchableOpacity>
                                        <Icon style = { styles.buttonTotal } name = 'minus-square' />
                                    </TouchableOpacity>
                                </View>
                                <View style = { styles.input }>
                                    <Input style = { styles.textInput } value = '1' />
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


                            <View style = { styles.lineStyle } />


                        </View>

                        
                    </ScrollView>
                    
               </View>
               <View style = { styles.footer }>
                        <View style = { styles.rowCart }>
                            <View style = { styles.whislist }>
                                <TouchableOpacity>
                                    <Icon style = { styles.iconWhislist } name="heart" />
                                </TouchableOpacity>
                            </View>
                            <View style = { styles.row }>
                                <TouchableOpacity style = { styles.addCart }>
                                    <LinearGradient style = { styles.addCart } start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#ffbf80', '#ffa64d']} >
                                        <Text style = { styles.textAddCart }>Beli Sekarang</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                            <View style = { styles.row }>
                                <TouchableOpacity style = { styles.addCart }>
                                    <LinearGradient style = { styles.addCart } start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#e78d8d', '#e76565']} >
                                        <Text style = { styles.textAddCart }>Tambah ke Keranjang</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
            </View>
        )
    }
}
