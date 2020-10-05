import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView
} from 'react-native';

export default class AboutScreenDetail extends Component {

  render() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <ImageBackground source={require('../assets/logo.png')} style={styles.header} />
                <Image style={styles.avatar} source={require('../assets/me.jpeg')}/>
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <Text style={styles.name}>Aditiya Permana</Text>
                        <Text style={styles.info}>Web Developer</Text>
                        <Text style={styles.description}>I am a web developer with strong problem solving skills and proven experience in creating and developing a web based application. I'm currently learning to develop a mobile application using React Native.</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "#0073b1",
    height:200,
    resizeMode: "cover",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    backgroundColor: "#FFFFFF",
    borderRadius:10,
    padding:10,
    marginTop:10,
  },
});
