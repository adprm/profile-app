import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

export default class WelcomeScreenDetail extends Component {
  
  constructor(props) {
    super(props);
    this.state = { showAlert: false };
  };

  // menampilkan alert
  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };

  // halaman utama
    render() {
      const {showAlert} = this.state;
        return (
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Image style={styles.logo} source={require('../assets/logo.png')} />

            <TouchableOpacity onPress={() => {
              this.showAlert();
            }}>
              <View style={styles.button}>
                <Text style={styles.text}>Halo!</Text>
              </View>
            </TouchableOpacity>

            <AwesomeAlert
              show={showAlert}
              title="Hai!"
              message="Semoga harimu menyenangkan!"
              closeOnTouchOutside={true}
            />
          </View>
        );
    }

}

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
  },
  button: {
    margin: 10,
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 5,
    backgroundColor: "#0073b1",
    width: 150,
  },
  text: {
    color: '#fff',
    textAlign: "center",
    fontSize: 15
  }
});
