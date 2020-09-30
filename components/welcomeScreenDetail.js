import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class WelcomeScreenDetail extends Component {

  // halaman utama
    render() {
        return (
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Welcome Screen</Text>
          </View>
        );
    }

}
