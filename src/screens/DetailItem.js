import React, { Component } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { 
    CardItem,
    Card,
} from 'native-base'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/FontAwesome'
import StarRating from 'react-native-star-rating'
import { connect } from 'react-redux'
import NumberFormat from 'react-number-format'


import { getItem } from '../redux/action/Item'
import { getCommentById } from '../redux/action/Comment'
import { APP_URL } from '../config/Config'
import Loading from './Loading'

const styles = StyleSheet.create({
    root : {
        flex: 1,
        backgroundColor: '#EEE'
    },
    image : {
        width: '100%',
        height: 200,
        marginBottom: 5
    },
    container : {
        marginTop: -20
    },
    row : {
        flexDirection: 'row',
    },
    column : {
        flexDirection: 'column',
        marginTop: 10,
        marginBottom: 10
    },
    columnRating : {
        flexDirection: 'column',
        width: 100
    },
    card : {
        flexDirection: 'column',
        backgroundColor: '#FFF',
        padding: 20,
        marginBottom: 15
    },
    cardImage : {
        flexDirection: 'column',
        backgroundColor: '#FFF',
    },
    cardItem : {
        flexDirection: 'column',
        backgroundColor: '#FFF',
        padding: 20,
        marginBottom: 15,
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
    lineStyle:{
        borderWidth: 0.6,
        borderColor:'#cccccc',
        marginTop: 10,
        marginBottom: 10
    },
    titleComment : {
        fontWeight: 'bold',
        fontSize: 30
    },
    textUsername : {
        fontWeight: 'bold',
        fontSize: 20
    },
    textComment : {
        fontSize: 15
    },
    textReview : {
        color: '#006600',
        fontWeight: 'bold',
        marginTop: 15,
    },
    rowAddReview : {
        alignSelf: 'center',
        width : 200
    },
    buttonAddReview : {
        width: 150,
        backgroundColor: '#F5D200',
        marginBottom: 10
    },
    titleRecommendation : {
        fontWeight: 'bold',
        fontSize: 30
    },
    listCard : {
        flexDirection: 'row',
        marginLeft: 18,
        marginRight: -20,
        marginBottom: 18,
    },
    cardRecommendation : {
        width: 120,
        borderRadius: 15,
        marginRight: 20,
    },  
    listItemColumn : {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
    },
    listImage : {
        width: 120,
        height : 120,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    footer : {
        flexDirection: 'column',
        backgroundColor: '#FFF',
        padding: 10,
        borderTopColor: '#bababa',
        borderTopWidth: 0.8
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
    },
    listItemColumn : {
        flexDirection: 'column',
        height: 100
    }

})

class DetailItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starCount: 0,
            isLoading: true,
        }
    }

    async componentDidMount() {
        const id = this.props.navigation.getParam('id')
        await this.props.dispatch(getItem(id))
        await this.props.dispatch(getCommentById(id))
        await this.setState({ isLoading: false })
    }
    

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }


    render() {
        return(
            <>
            {this.state.isLoading && <Loading />}
          { !this.state.isLoading &&
            <View style = { styles.root }>
                {!this.state.isLoading && this.props.item.dataId.data.map((v, i) => { 
                    return(
                <View style = { styles.cardImage } key = { v.id_item }>
                    <View style = { styles.image }>
                        <Image style = { styles.image } source = {{uri: APP_URL.concat(`image/item/${v.images}`)}} />
                    </View>
                </View>
                )})}

                
                <ScrollView>
                    <View style = { styles.container }>
                        <View style = { styles.column }>
                            {!this.state.isLoading && this.props.item.dataId.data.map((v, i) => { 
                                return(
                                    <View style = { styles.cardItem } key = { v.id_item }>
                                        <View style = { styles.column }>
                                            <Text style = { styles.title }>{ v.item_name }</Text>
                                        </View>
                                        <View style = { styles.columnRating }>
                                            <StarRating
                                                fullStarColor = { '#F5D200' }
                                                starSize = { 15 }
                                                disabled = { true }
                                                maxStars = { 5 }
                                                rating = { v.rate } 
                                                selectedStar = { (rating) => this.onStarRatingPress(rating)} 
                                            />
                                        </View>
                                        <View style = { styles.column }>
                                            <NumberFormat 
                                                value={v.price} 
                                                displayType={'text'} 
                                                thousandSeparator={true} 
                                                prefix={'Rp. '} 
                                                renderText={value => <Text style = { styles.price }>{value}</Text>} 
                                            />
                                        </View>
                                        <View style = { styles.column }>
                                            <Text style = { styles.description }>{ v.description }</Text>
                                        </View>
                                    </View>
                                )
                            })}

                            <View style = { styles.card }>


                                <View style = { styles.rowAddReview }>
                                    <StarRating style = { styles.rating }
                                        fullStarColor = { '#F5D200' }
                                        starSize = { 30 }
                                        disabled = { false }
                                        maxStars = { 5 }
                                        rating = { this.state.starCount } 
                                        selectedStar = { (rating) => this.onStarRatingPress(rating)} 
                                    />
                                </View>


                                <View style = { styles.lineStyle } />
                            

                                <View style = { styles.column }>
                                    <Text style = { styles.titleComment }>Komentar</Text>
                                </View>


                                <View style = { styles.lineStyle } />

                                {!this.state.isLoading && this.props.comment.data.data.map((v, i) => { 
                                return(
                                    <>
                                        <View style = { styles.column } key = {v.id_item}>
                                            <Text style = { styles.textUsername }>{ v.name_user }</Text>
                                        </View>
                                        <View style = { styles.columnRating }>
                                            <StarRating style = { styles.rating }
                                                fullStarColor = { '#F5D200' }
                                                starSize = { 15 }
                                                disabled = { true }
                                                maxStars = { 5 }
                                                rating = { v.rating } 
                                                selectedStar = { (rating) => this.onStarRatingPress(rating)} 
                                            />
                                        </View>
                                        <View style = { styles.column }>
                                            <Text style = { styles.textComment }>{ v.comment }</Text>
                                        </View>

                                        <View style = { styles.lineStyle } />
                                    </>
                                    )
                                })}

                                
                                <View style = { styles.row }>
                                    <Text style = { styles.textReview }>Lihat semua ulasan</Text>
                                </View>
                            </View>

                            <View style = { styles.card }>
                                <View style = { styles.row }>
                                    <Text style = { styles.titleRecommendation }>
                                        Rekomendasi
                                    </Text>
                                </View>
                            </View>

                            <ScrollView horizontal = { true }>

                            {!this.state.isLoading && this.props.item.dataId.sugest.map((v, i) => { 
                                return(
                                <View style = { styles.row } key = { v.id_item }>
                                    <View style = { styles.listCard }>
                                        <TouchableOpacity onPress = { ()=>this.props.navigation.push('Detail',{id : v.id_item})}>
                                            <Card style = { styles.cardRecommendation }>
                                                <Image style = { styles.listImage } source = {{uri: APP_URL.concat(`image/item/${v.images}`)}} />
                                                <CardItem style = { styles.card }>
                                                    <View style = { styles.listItemColumn }>
                                                        <View style = { styles.listItemRow }>
                                                            <Text style = { styles.title }>{ v.item_name }</Text>
                                                        </View>
                                                        <View style = { styles.columnRating }>
                                                            <StarRating style = { styles.rating }
                                                                fullStarColor = { '#F5D200' }
                                                                starSize = { 15 }
                                                                disabled = { true }
                                                                maxStars = { 5 }
                                                                rating = { v.rate } 
                                                                selectedStar = { (rating) => this.onStarRatingPress(rating)} 
                                                            />
                                                        </View>
                                                        <View style = { styles.price }>
                                                            <NumberFormat 
                                                                value={v.price} 
                                                                displayType={'text'} 
                                                                thousandSeparator={true} 
                                                                prefix={'Rp. '} 
                                                                renderText={value => <Text style = { styles.price }>{value}</Text>} 
                                                            />
                                                        </View>
                                                    </View>
                                                </CardItem>
                                            </Card>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                )
                            })}

                            </ScrollView>
                        </View>
                    </View>
                </ScrollView>


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
    }
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        item: state.item,
        comment : state.comment
    }
  }
  
export default connect(mapStateToProps)(DetailItem)