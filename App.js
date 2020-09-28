import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';

// bottom tabs
const Tab = createBottomTabNavigator();

// home / beranda
function HomeScreen({ navigation }) {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({focused, color, size}) => {
        let iconName;
        if (route.name === 'Beranda') {
          iconName = focused ? 'ios-home' : 'ios-home-outline';
        } else if (route.name === 'Saya') {
          iconName = focused ? 'ios-contact' : 'ios-contact-outline';
        } else if (route.name === 'Kontak') {
          iconName = focused === 'ios-md-contacts';
        }
      }
    })}></Tab.Navigator>
  );
}

// keahlian
function SkillsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Skills Screen</Text>
      <Button onPress={() => navigation.goBack()} title="Go back to home"></Button>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Beranda">
        <Drawer.Screen name="Beranda" component={HomeScreen} />
        <Drawer.Screen name="Keahlian" component={SkillsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
