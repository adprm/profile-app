import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class WelcomeScreenDetail extends Component {

  // halaman utama
    render() {
        return (
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Welcome Screen</Text>
            <Button onPress={() => this.props.navigation.openDrawer()} title="Menu"></Button>
          </View>
        );
    }

}
