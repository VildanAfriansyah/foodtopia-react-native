import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native'
import { 
    Input, 
    CardItem,
    Card,
} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome'
import StarRating from 'react-native-star-rating'
import LinearGradient from 'react-native-linear-gradient'


const styles = StyleSheet.create({
  root : {
    flex:1,
    backgroundColor: '#FFF',
  },
  container : {
    backgroundColor: 'red',
    margin: 20,
  },
  box : {
    marginHorizontal:20, 
    marginTop:20
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
    marginBottom: 20
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
      elevation: 50,
      marginBottom: 10
  },
    image : {
    width: 100,
    height: 100,
    marginBottom: 15,
    borderRadius: 10,
    marginRight: 20
  },
  lineStyle:{
    borderWidth: 0.6,
    borderColor:'#cccccc',
    marginTop: 10,
    marginBottom: 10
  },
    
    
  })

export default class listItem extends Component {
    render() {
        return (
            <View style = { styles.root }>
              <View style = { styles.box }>
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
                </View>
                <View style = { styles.searchItem }>
                  <View style = { styles.searchContent }>
                    <Image style = { styles.searchIcon } source = {require('../../icon/search.png')} />
                    <Input style = { styles.searchPlaceholder } placeholderTextColor = '#bababa' placeholder = 'Mau makan apa hari ini ?' />
                  </View>
                </View>
              </View>
              
              <ScrollView>

              <View style = { styles.box }>


                <TouchableOpacity onPress = { ()=>this.props.navigation.navigate('Detail')}>
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
                            <StarRating style = { styles.rating }
                                fullStarColor = { '#F5D200' }
                                starSize = { 15 }
                                disabled = { true }
                                maxStars = { 5 }
                                rating = { 5 } 
                                selectedStar = { (rating) => this.onStarRatingPress(rating)} 
                            />
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


                  <View style = { styles.lineStyle } />


                  </View>
                </TouchableOpacity>

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
                          <StarRating style = { styles.rating }
                              fullStarColor = { '#F5D200' }
                              starSize = { 15 }
                              disabled = { true }
                              maxStars = { 5 }
                              rating = { 5 } 
                              selectedStar = { (rating) => this.onStarRatingPress(rating)} 
                          />
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


                <View style = { styles.lineStyle } />


                </View>

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
                          <StarRating style = { styles.rating }
                              fullStarColor = { '#F5D200' }
                              starSize = { 15 }
                              disabled = { true }
                              maxStars = { 5 }
                              rating = { 5 } 
                              selectedStar = { (rating) => this.onStarRatingPress(rating)} 
                          />
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


                <View style = { styles.lineStyle } />


                </View>
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
                          <StarRating style = { styles.rating }
                              fullStarColor = { '#F5D200' }
                              starSize = { 15 }
                              disabled = { true }
                              maxStars = { 5 }
                              rating = { 5 } 
                              selectedStar = { (rating) => this.onStarRatingPress(rating)} 
                          />
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


                <View style = { styles.lineStyle } />


                </View>
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
                          <StarRating style = { styles.rating }
                              fullStarColor = { '#F5D200' }
                              starSize = { 15 }
                              disabled = { true }
                              maxStars = { 5 }
                              rating = { 5 } 
                              selectedStar = { (rating) => this.onStarRatingPress(rating)} 
                          />
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


                <View style = { styles.lineStyle } />


                </View>
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
                          <StarRating style = { styles.rating }
                              fullStarColor = { '#F5D200' }
                              starSize = { 15 }
                              disabled = { true }
                              maxStars = { 5 }
                              rating = { 5 } 
                              selectedStar = { (rating) => this.onStarRatingPress(rating)} 
                          />
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


                <View style = { styles.lineStyle } />


                </View>

            </View>
            </ScrollView>
          </View>
        )
    }
}
