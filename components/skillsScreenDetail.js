import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';

export default class JobExperiencesScreenDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1,  title:"Coding Languages",        skill:"HTML/CSS, JavaScript, PHP, SQL",               color:"#0073b1"},
        {id:2,  title:"Frameworks",              skill:"CodeIgniter, React Native, Bootstrap, jQuery", color:"#0073b1"},
        {id:3,  title:"Tools & Systems Service", skill:"RESTful API, NPM, Git Control, NodeJS, Expo",  color:"#0073b1"},
      ],
      showAlert: false,
    };
  }

  __getCompletedIcon = (item) => {
    if(item.id === 1) {
      return "https://img.icons8.com/fluent/48/000000/code.png"
    } else if (item.id === 2) {
      return "https://img.icons8.com/color/48/000000/php-designer.png";
    } else if (item.id === 3) {
      return "https://img.icons8.com/fluent/48/000000/administrative-tools.png";
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          style={styles.tasks}
          columnWrapperStyle={styles.listContainer}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
          return (
            <TouchableOpacity style={[styles.card, {borderColor:item.color}]}>
              <Image style={styles.image} source={{uri: this.__getCompletedIcon(item)}}/>
              <View style={styles.cardContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.skill}>{item.skill}</Text>
              </View>
            </TouchableOpacity>
          )}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#eeeeee"
  },
  tasks:{
    flex:1,
  },
  cardContent: {
    marginLeft:20,
    marginTop:10,
  },
  image:{
    width:25,
    height:25,
  },
  card:{
    shadowColor: '#00000021',
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 10,
    marginHorizontal:20,
    backgroundColor:"white",
    flexBasis: '46%',
    padding: 10,
    flexDirection:'row',
    flexWrap: 'wrap',
    borderLeftWidth:6,
  },
  title:{
    fontSize:18,
    flex:1,
    color:"#008080",
    fontWeight: "bold",
  },
  skill:{
    fontSize:14,
    flex:1,
    color:"#696969",
    marginTop:5
  },
}); 