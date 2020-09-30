import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class SkillsScreenDetail extends Component {

    // halaman keahlian
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Skills Screen</Text>
                <Button onPress={() => this.props.navigation.goBack()} title="Go back to home"></Button>
            </View>
        );
    }

}