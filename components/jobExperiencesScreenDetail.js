import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
  Alert
} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

export default class JobExperiencesScreenDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        {id:1,  description:"LiteTeknoID - Web Developer", jobdesc: "Build an attractive web appearance, Do a bug fix, Build mobile applications with React Native", date:"January 2020 - Present", completed:0},
        {id:2,  description:"ModanaID - Software Developer", jobdesc: "Developing the Web using Vue JS, Create a REST client API, Performed a bug fix", date:"September 2019 - December 2019", completed:1},
      ],
      showAlert: false
    };
  }

  // menampilkan alert
  showAlert = (item) => {
    this.setState({
      showAlert: true,
      messageJobDesc: item.jobdesc,
    });
  };

  __getCompletedIcon = (item) => {
    if(item.completed == 1) {
      return "https://img.icons8.com/flat_round/64/000000/checkmark.png";
    } else {
        return "https://img.icons8.com/fluent/48/000000/process.png";
    }
  }

  render() {
    const {showAlert} = this.state;
    const {messageJobDesc} = this.state;

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
            <TouchableOpacity style={styles.card} onPress={() => {this.showAlert(item)}}>
              <Image style={styles.image} source={{uri: this.__getCompletedIcon(item)}}/>
              <View style={styles.cardContent}>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
            </TouchableOpacity>
          )}}/>
            <AwesomeAlert
              show={showAlert}
              title="Deskripsi Pekerjaan"
              message={messageJobDesc}
              closeOnTouchOutside={true}
            />
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
    borderColor: "#0073b1",
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
    color:"#008080",
    fontWeight: "bold",
  },
  date:{
    fontSize:14,
    flex:1,
    color:"#696969",
    marginTop:5
  },
}); 