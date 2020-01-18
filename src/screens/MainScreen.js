import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import { 
  Input, 
  CardItem,
  Card,
} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import StarRating from 'react-native-star-rating'

const styles = StyleSheet.create({
  root : {
    flex:1,
    backgroundColor: '#FFF',
  },
  container : {
    backgroundColor: '#FFF',
    margin: 20,
  },
  header : {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
  },
  headerLeft : {
    flexDirection: 'row',
    marginTop: 5,
  },
  headerRight : {
    flexDirection: 'row',
  },
  headerRow : {
    flexDirection: 'row',
  },
  headerColumn : {
    flexDirection: 'column',
  },
  headerIcon : {
    color: '#b71515',
    marginLeft: 5,
    marginTop: -2,
    fontSize: 18,
  },
  headerIconRight : {
    marginLeft: 5,
    marginTop: 4,
    fontSize: 25,
  },
  headerText : {
    color: '#575252',
    fontSize: 12,
  },
  searchItem : {
    marginTop: 20,
    flexDirection: 'row',
    backgroundColor: '#f2f2f2', 
    borderRadius: 3,
    borderColor: '#ebebeb',
    borderWidth: 1,
    height: 40,
  },
  recentIcon : {
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 10,
    width: 35,
    height: 35,
  },
  searchIcon : {
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
    width: 25,
    height: 25,
  },
  searchContent : {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    // backgroundColor: 'blue',
  },
  searchPlaceholder : {
    fontSize: 12,
  },
  banner : {
    flexDirection: 'row',
  },
  bannerImages : {
    flexDirection: 'row',
    width: 250,
    height: 150,
    marginTop: 20,
    borderRadius: 10,
    backgroundColor: 'blue',
    margin: 20,
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'#cccccc',
    marginLeft: 20,
    marginRight: 20,
  },
  list : {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  listColumn : {
    flexDirection: 'column',
  },
  listRow : {
    flexDirection: 'row'
  },
  listTitle : {
    fontWeight: 'bold',
  },
  listTitle2 : {
    color: '#747272'
  },
  listTitleRight : {
    color: '#5dc318',
    fontWeight: 'bold'
  },
  card : {
    width: 120,
    borderRadius: 15,
    marginRight: 20,
  },  
  listImage : {
    width: 120,
    height : 150,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },  
  listCard : {
    flexDirection: 'row',
    marginLeft: 18,
    marginBottom: 18,
  },
  listItemColumn : {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  listItemRow : {
    flexDirection: 'row'
  },
  listTextItem : {
    color : '#6f5d5d'
  },
  listTextPrice : {
    fontWeight: 'bold'
  },
  listTextRating : {
    color: '#ffed47'
  },
  categoryTitle : {
    fontWeight: 'bold',
  },
  category : {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardCategory : {
    flexDirection: 'column',
    borderRadius: 15,
    width: 100,
    height: 120,
    marginLeft: -2,
    marginRight: 8,
  },
  categoryImage : {
    width: 100,
    height: 100
  },
  categoryItem : {
    flexDirection: 'row',
    alignSelf: 'center'
  },
  CategoryText : {
    color : '#6f5d5d'
  },
  footer : {
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderTopColor: '#CECECE',
    borderTopWidth: 0.2,
  }, 
  buttonFooter : {
    width: 80,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  iconFooter : {
    fontSize: 30,
  },
  iconCartFooter : {
    fontSize: 30,
    // marginBottom: -30
  },
  badge : {
    position: 'absolute',
    marginLeft: 40,
    height: 20,
    justifyContent: 'flex-start'
  },
  cartImage : {
    width: 30,
    height : 30,
  }, 
  
})



export default class MainScreen extends Component {
  render() {
    return (
      <View style = { styles.root }>
        <View style = { styles.container }>
          <View style = { styles.header }>
            <View style = { styles.headerColumn }>
              <View style = { styles.headerRow }>
                <Text style = { styles.headerText }>Lokasi Kamu</Text>
                <Icon style = { styles.headerIcon } name = 'angle-down' />
              </View>
              <View style = { styles.headerColumn }>
                <Text>Arkademy, Bogor Camp</Text>
              </View>
            </View>
            <View style = { styles.headerRight }>
              <Image style = { styles.recentIcon } source = {require('../../icon/rec.png')} />
              <Icon style = { styles.headerIconRight } name = 'heart-o' />
            </View>
          </View>
          <View style = { styles.searchItem }>
            <View style = { styles.searchContent }>
              <Image style = { styles.searchIcon } source = {require('../../icon/search.png')} />
              <Input style = { styles.searchPlaceholder } placeholderTextColor = '#bababa' placeholder = 'Mau makan apa hari ini ?' />
            </View>
          </View>
        </View>


        
        <ScrollView>
        <View style = { styles.banner }>
          <ScrollView horizontal = { true }>
            <Image style = { styles.bannerImages } source = {require('../../images/1.jpg')} />
            <Image style = { styles.bannerImages } source = {require('../../images/1.jpg')} />
            <Image style = { styles.bannerImages } source = {require('../../images/1.jpg')} />
            <Image style = { styles.bannerImages } source = {require('../../images/1.jpg')} />
          </ScrollView>
        </View>



        <View style = { styles.lineStyle } />



        <View style = { styles.container }>
          <View style = { styles.list}>
            <View style = { styles.listColumn }>
              <View style = { styles.listRow }>
                <Text style = { styles.listTitle }>Makan siangnya, kakaak !</Text>
              </View>
              <View style = { styles.listColumn }>
                <Text style = { styles.listTitle2 }>Kami tebak, kamu bakal doyan ini</Text>
              </View>
            </View>
            <TouchableOpacity onPress = { ()=>this.props.navigation.navigate('List')}>
              <View style = { styles.headerRight }>
                  <Text style = { styles.listTitleRight }>Lihat semua</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View>
        <ScrollView horizontal = { true }>
            <View style = { styles.listCard }>
              <TouchableOpacity onPress = { ()=>this.props.navigation.navigate('Detail')}>
                <Card style = { styles.card } >
                    <Image style = { styles.listImage } source = {require('../../images/1.jpg')} />
                  <CardItem style = { styles.card }>
                    <View style = { styles.listItemColumn }>
                      <View style = { styles.listItemRow }>
                        <Text style = { styles.listTextItem }>Item</Text>
                      </View>
                      <View style = { styles.listItemRow }>
                        <StarRating style = { styles.rating }
                            fullStarColor = { '#F5D200' }
                            starSize = { 15 }
                            disabled = { true }
                            maxStars = { 5 }
                            rating = { 5 } 
                            selectedStar = { (rating) => this.onStarRatingPress(rating)} 
                        />
                      </View>
                      <View style = { styles.listItemRow }>
                        <Text style = { styles.listTextPrice }>price</Text>
                      </View>
                    </View>
                  </CardItem>
                </Card>
              </TouchableOpacity>
              <Card style = { styles.card }>
                  <Image style = { styles.listImage } source = {require('../../images/1.jpg')} />
                <CardItem style = { styles.card }>
                  <View style = { styles.listItemColumn }>
                    <View style = { styles.listItemRow }>
                      <Text style = { styles.listTextItem }>Item</Text>
                    </View>
                    <View style = { styles.listItemRow }>
                      <Text style = { styles.listTextRating }>Rating</Text>
                    </View>
                    <View style = { styles.listItemRow }>
                      <Text style = { styles.listTextPrice }>price</Text>
                    </View>
                  </View>
                </CardItem>
              </Card>
              <Card style = { styles.card }>
                  <Image style = { styles.listImage } source = {require('../../images/1.jpg')} />
                <CardItem style = { styles.card }>
                  <View style = { styles.listItemColumn }>
                    <View style = { styles.listItemRow }>
                      <Text style = { styles.listTextItem }>Item</Text>
                    </View>
                    <View style = { styles.listItemRow }>
                      <Text style = { styles.listTextRating }>Rating</Text>
                    </View>
                    <View style = { styles.listItemRow }>
                      <Text style = { styles.listTextPrice }>price</Text>
                    </View>
                  </View>
                </CardItem>
              </Card>
              <Card style = { styles.card }>
                  <Image style = { styles.listImage } source = {require('../../images/1.jpg')} />
                <CardItem style = { styles.card }>
                  <View style = { styles.listItemColumn }>
                    <View style = { styles.listItemRow }>
                      <Text style = { styles.listTextItem }>Item</Text>
                    </View>
                    <View style = { styles.listItemRow }>
                      <Text style = { styles.listTextRating }>Rating</Text>
                    </View>
                    <View style = { styles.listItemRow }>
                      <Text style = { styles.listTextPrice }>price</Text>
                    </View>
                  </View>
                </CardItem>
              </Card>
              <Card style = { styles.card }>
                  <Image style = { styles.listImage } source = { require('../../images/1.jpg') } />
                <CardItem style = { styles.card }>
                  <View style = { styles.listItemColumn }>
                    <View style = { styles.listItemRow }>
                      <Text style = { styles.listTextItem }>Item</Text>
                    </View>
                    <View style = { styles.listItemRow }>
                      <Text style = { styles.listTextRating }>Rating</Text>
                    </View>
                    <View style = { styles.listItemRow }>
                      <Text style = { styles.listTextPrice }>price</Text>
                    </View>
                  </View>
                </CardItem>
              </Card>
              <Card style = { styles.card }>
                  <Image style = { styles.listImage } source = {require('../../images/1.jpg')} />
                <CardItem style = { styles.card }>
                  <View style = { styles.listItemColumn }>
                    <View style = { styles.listItemRow }>
                      <Text style = { styles.listTextItem }>Item</Text>
                    </View>
                    <View style = { styles.listItemRow }>
                      <Text style = { styles.listTextRating }>Rating</Text>
                    </View>
                    <View style = { styles.listItemRow }>
                      <Text style = { styles.listTextPrice }>price</Text>
                    </View>
                  </View>
                </CardItem>
              </Card>
              <Card style = { styles.card }>
                  <Image style = { styles.listImage } source = {require('../../images/1.jpg')} />
                <CardItem style = { styles.card }>
                  <View style = { styles.listItemColumn }>
                    <View style = { styles.listItemRow }>
                      <Text style = { styles.listTextItem }>Item</Text>
                    </View>
                    <View style = { styles.listItemRow }>
                      <Text style = { styles.listTextRating }>Rating</Text>
                    </View>
                    <View style = { styles.listItemRow }>
                      <Text style = { styles.listTextPrice }>price</Text>
                    </View>
                  </View>
                </CardItem>
              </Card>
            </View>
          </ScrollView>
        </View>



        <View style = { styles.lineStyle } />



        <View style = { styles.container }>
          <View style = { styles.list}>
            <View style = { styles.listColumn }>
              <View style = { styles.listRow }>
                <Text style = { styles.listTitle }>Takasimuraaa!</Text>
              </View>
              <View style = { styles.listColumn }>
                <Text style = { styles.listTitle2 }>Cek menu yang lagi diskon</Text>
              </View>
            </View>
            <View style = { styles.headerRight }>
                <Text style = { styles.listTitleRight }>Lihat semua</Text>
            </View>
          </View>
        </View>
        <View>
          <ScrollView horizontal = { true }>
              <View style = { styles.listCard }>
                <Card style = { styles.card }>
                    <Image style = { styles.listImage } source = {require('../../images/1.jpg')} />
                  <CardItem style = { styles.card }>
                    <View style = { styles.listItemColumn }>
                      <View style = { styles.listItemRow }>
                        <Text style = { styles.listTextItem }>Item</Text>
                      </View>
                      <View style = { styles.listItemRow }>
                        <StarRating style = { styles.rating }
                            fullStarColor = { '#F5D200' }
                            starSize = { 15 }
                            disabled = { true }
                            maxStars = { 5 }
                            rating = { 5 } 
                            selectedStar = { (rating) => this.onStarRatingPress(rating)} 
                        />
                      </View>
                      <View style = { styles.listItemRow }>
                        <Text style = { styles.listTextPrice }>price</Text>
                      </View>
                    </View>
                  </CardItem>
                </Card>
                <Card style = { styles.card }>
                    <Image style = { styles.listImage } source = {require('../../images/1.jpg')} />
                  <CardItem style = { styles.card }>
                    <View style = { styles.listItemColumn }>
                      <View style = { styles.listItemRow }>
                        <Text style = { styles.listTextItem }>Item</Text>
                      </View>
                      <View style = { styles.listItemRow }>
                        <Text style = { styles.listTextRating }>Rating</Text>
                      </View>
                      <View style = { styles.listItemRow }>
                        <Text style = { styles.listTextPrice }>price</Text>
                      </View>
                    </View>
                  </CardItem>
                </Card>
                <Card style = { styles.card }>
                    <Image style = { styles.listImage } source = {require('../../images/1.jpg')} />
                  <CardItem style = { styles.card }>
                    <View style = { styles.listItemColumn }>
                      <View style = { styles.listItemRow }>
                        <Text style = { styles.listTextItem }>Item</Text>
                      </View>
                      <View style = { styles.listItemRow }>
                        <Text style = { styles.listTextRating }>Rating</Text>
                      </View>
                      <View style = { styles.listItemRow }>
                        <Text style = { styles.listTextPrice }>price</Text>
                      </View>
                    </View>
                  </CardItem>
                </Card>
                <Card style = { styles.card }>
                    <Image style = { styles.listImage } source = {require('../../images/1.jpg')} />
                  <CardItem style = { styles.card }>
                    <View style = { styles.listItemColumn }>
                      <View style = { styles.listItemRow }>
                        <Text style = { styles.listTextItem }>Item</Text>
                      </View>
                      <View style = { styles.listItemRow }>
                        <Text style = { styles.listTextRating }>Rating</Text>
                      </View>
                      <View style = { styles.listItemRow }>
                        <Text style = { styles.listTextPrice }>price</Text>
                      </View>
                    </View>
                  </CardItem>
                </Card>
                <Card style = { styles.card }>
                    <Image style = { styles.listImage } source = {require('../../images/1.jpg')} />
                  <CardItem style = { styles.card }>
                    <View style = { styles.listItemColumn }>
                      <View style = { styles.listItemRow }>
                        <Text style = { styles.listTextItem }>Item</Text>
                      </View>
                      <View style = { styles.listItemRow }>
                        <Text style = { styles.listTextRating }>Rating</Text>
                      </View>
                      <View style = { styles.listItemRow }>
                        <Text style = { styles.listTextPrice }>price</Text>
                      </View>
                    </View>
                  </CardItem>
                </Card>
                <Card style = { styles.card }>
                    <Image style = { styles.listImage } source = {require('../../images/1.jpg')} />
                  <CardItem style = { styles.card }>
                    <View style = { styles.listItemColumn }>
                      <View style = { styles.listItemRow }>
                        <Text style = { styles.listTextItem }>Item</Text>
                      </View>
                      <View style = { styles.listItemRow }>
                        <Text style = { styles.listTextRating }>Rating</Text>
                      </View>
                      <View style = { styles.listItemRow }>
                        <Text style = { styles.listTextPrice }>price</Text>
                      </View>
                    </View>
                  </CardItem>
                </Card>
                <Card style = { styles.card }>
                    <Image style = { styles.listImage } source = {require('../../images/1.jpg')} />
                  <CardItem style = { styles.card }>
                    <View style = { styles.listItemColumn }>
                      <View style = { styles.listItemRow }>
                        <Text style = { styles.listTextItem }>Item</Text>
                      </View>
                      <View style = { styles.listItemRow }>
                        <Text style = { styles.listTextRating }>Rating</Text>
                      </View>
                      <View style = { styles.listItemRow }>
                        <Text style = { styles.listTextPrice }>price</Text>
                      </View>
                    </View>
                  </CardItem>
                </Card>
              </View>
            </ScrollView>
          </View>


          <View style = { styles.lineStyle } />



          <View style = { styles.container }>
            <Text style = { styles.categoryTitle }>Pilih dari kategori</Text>
            <View style = { styles.category }>
              <Card style = { styles.cardCategory }>
                <Image style = { styles.categoryImage } source = {require('../../images/food.png')} />
                  <View style = { styles.categoryColumn }>
                    <View style = { styles.categoryItem }>
                      <Text style = { styles.CategoryText }>Makanan</Text>
                    </View>
                  </View>
              </Card>
              <Card style = { styles.cardCategory }>
                <Image style = { styles.categoryImage } source = {require('../../images/drink.png')} />
                  <View style = { styles.categoryColumn }>
                    <View style = { styles.categoryItem }>
                      <Text style = { styles.CategoryText }>Minuman</Text>
                    </View>
                  </View>
              </Card>
              <Card style = { styles.cardCategory }>
                <Image style = { styles.categoryImage } source = {require('../../images/ice.png')} />
                  <View style = { styles.categoryColumn }>
                    <View style = { styles.categoryItem }>
                      <Text style = { styles.CategoryText }>Ice Cream</Text>
                    </View>
                  </View>
              </Card>
              <Card style = { styles.cardCategory }>
                <Image style = { styles.categoryImage } source = {require('../../images/food.png')} />
                  <View style = { styles.categoryColumn }>
                    <View style = { styles.categoryItem }>
                      <Text style = { styles.CategoryText }>Restoran</Text>
                    </View>
                  </View>
              </Card>
              <Card style = { styles.cardCategory }>
                <Image style = { styles.categoryImage } source = {require('../../images/food.png')} />
                  <View style = { styles.categoryColumn }>
                    <View style = { styles.categoryItem }>
                      <Text style = { styles.CategoryText }>Harga</Text>
                    </View>
                  </View>
              </Card>
              <Card style = { styles.cardCategory }>
                <Image style = { styles.categoryImage } source = {require('../../images/food.png')} />
                  <View style = { styles.categoryColumn }>
                    <View style = { styles.categoryItem }>
                      <Text style = { styles.CategoryText }>Baru minggu ini</Text>
                    </View>
                  </View>
              </Card>
            </View>
          </View>



        </ScrollView>
      </View>
    )
  }
}
