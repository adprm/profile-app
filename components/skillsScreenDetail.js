import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';

export default class SkillsScreenDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1,  description:"Build backend system with CodeIgniter and MySQL database.",                                        date:"2019-03-25 09:12:00", color:"#0073b1"},
        {id:2,  description:"Build an attractive website appearance using HTML / CSS, JavaScript and the Bootstrap framework.", date:"2019-03-25 10:23:00", color:"#0073b1"},
        {id:3,  description:"Create a RESTful API service.",                                                                     date:"2019-03-25 11:45:00", color:"#0073b1"},
        {id:4,  description:"Coding languages : HTML/CSS, JavaScript, PHP, SQL.",                                                date:"2019-03-25 09:27:00", color:"#0073b1"},
        {id:5,  description:"Framework: CodeIgniter, React Native, Bootstrap, jQuery.",                                          date:"2019-03-25 08:13:00", color:"#0073b1"},
        {id:6,  description:"Tools and Systems Service : NPM, Expo, NodeJS, RESTful API, Git Control.",                                  date:"2019-03-25 10:22:00", color:"#0073b1"},
      ]
    };
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
              <View style={styles.cardContent}>
                <Text style={styles.description}>{item.description}</Text>
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
    backgroundColor:"#fff"
  },
  tasks:{
    flex:1,
  },
  cardContent: {
    marginLeft:20,
  },
  card:{
    height: 100,
    borderRadius: 10,
    shadowColor: '#00000021',
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

  description:{
    fontSize:18,
    flex:1,
  },
}); 