import React from 'react';
import { StyleSheet, Button, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
// import components
import WelcomeScreenDetail from './components/welcomeScreenDetail';
import AboutMeScreenDetail from './components/aboutMeScreenDetail';
import ContactMeScreenDetail from './components/contactMeScreenDetail';

// bottom tabs variable
const Tab = createBottomTabNavigator();

// Bottom Tabs
function HomeScreen() {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Halaman Utama') {
            iconName = focused ? 'ios-home' : 'ios-home';
        } else if (route.name === 'Tentang Saya') { 
          iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
        } else if (route.name === 'Hubungi Saya') { 
          iconName = focused ? 'ios-person' : 'ios-person';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },

    })}
      tabBarOptions={{ activeTintColor: 'tomato', inactiveTintColor: 'gray',
      }} >
        <Tab.Screen name="Halaman Utama" component={WelcomeScreen} />
        <Tab.Screen name="Tentang Saya" component={AboutMeScreen} />
        <Tab.Screen name="Hubungi Saya" component={ContactMeScreen} />
    </Tab.Navigator>
  );
}

// stack variable
const Stack = createStackNavigator();

// stack halaman utama
function WelcomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Beranda" component={WelcomeScreenDetail} />
    </Stack.Navigator>
  );
}

// Stack Tentang Saya
function AboutMeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tentang Saya" component={AboutMeScreenDetail} />
    </Stack.Navigator>
  );
}

// Stack HUbungi Saya
function ContactMeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Hubungi Saya" component={ContactMeScreenDetail} />
    </Stack.Navigator>
  );
}

// halaman keahlian
function SkillsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Skills Screen</Text>
      <Button onPress={() => navigation.goBack()} title="Go back to home"></Button>
    </View>
  );
}

// drawer variable
const Drawer = createDrawerNavigator();

// export drawer default App
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
