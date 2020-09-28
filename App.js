import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';

// bottom tabs
const Tab = createBottomTabNavigator();

// home / beranda/ Bottom Tabs
function HomeScreen() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Utama') {
            iconName = focused ? 'ios-home' : 'ios-home';
        } else if (route.name === 'Tentang Saya') { 
          iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
        } else if (route.name === 'Kontak') { 
          iconName = focused ? 'ios-person' : 'ios-person';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },

    })}
      tabBarOptions={{ activeTintColor: 'tomato', inactiveTintColor: 'gray',
      }} >
        <Tab.Screen name="Utama" component={WelcomeScreen} />
        <Tab.Screen name="Tentang Saya" component={AboutMeScreen} />
        <Tab.Screen name="Kontak" component={ContactScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

// stack halaman utama
function WelcomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Beranda" component={WelcomeScreenDetail} />
    </Stack.Navigator>
  );
}

// selamat Datang Screen
function WelcomeScreenDetail({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Welcome Screen</Text>
      <Button onPress={() => navigation.openDrawer()} title="Menu"></Button>
    </View>
  );
}

// Tentang Saya Screen
function AboutMeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>About Me Screen</Text>
    </View>
  );
}

// Kontak Screen
function ContactScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Contact Screen</Text>
    </View>
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
