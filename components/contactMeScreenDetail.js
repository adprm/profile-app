import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Linking,
} from 'react-native';

export default class ContactMeScreenDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1, title:"Gmail", url: "mailto:aditiyaprmn00@gmail.com",image:"https://img.icons8.com/color/70/000000/gmail.png"},
        {id:1, title:"Whatsapp", url: "https://wa.me/628558535877", image:"https://img.icons8.com/color/70/000000/whatsapp.png"},
        {id:2, title:"Linkedin", url: "https://www.linkedin.com/in/adprm/", image:"https://img.icons8.com/color/70/000000/linkedin.png"} ,
        {id:3, title:"Github", url: "https://github.com/adprm", image:"https://img.icons8.com/color/70/000000/github.png"} ,
        {id:4, title:"Instagram", url: "https://www.instagram.com/adprm_/", image:"https://img.icons8.com/color/70/000000/instagram.png"} ,
        {id:5, title:"Facebook", url: "https://web.facebook.com/aditiya.permanaa.3", image:"https://img.icons8.com/color/70/000000/facebook.png"} ,
      ]
    };
  }

  clickEventListener(item) {
    Linking.openURL(item.url)
  }

  render() {
    return (
      <View>
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.data}
          horizontal={false}
          numColumns={2}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
            return (
              <View>
                <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
                  <Image style={styles.cardImage} source={{uri:item.image}}/>
                </TouchableOpacity>

                <View style={styles.cardHeader}>
                  <View style={{alignItems:"center", justifyContent:"center"}}>
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </View>
              </View>
            )
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 5,
    backgroundColor:"#f6f6f6",
  },
  listContainer:{
    alignItems:'center'
  },
  /******** card **************/
  card:{
    shadowColor: '#474747',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 20,
    marginHorizontal: 40,
    backgroundColor:"#e2e2e2",
    //flexBasis: '42%',
    width:120,
    height:120,
    borderRadius:60,
    alignItems:'center',
    justifyContent:'center'
  },
  cardHeader: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems:"center", 
    justifyContent:"center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooter:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImage:{
    height: 50,
    width: 50,
    alignSelf:'center'
  },
  title:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#696969"
  },
});    