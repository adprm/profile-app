import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';
// import components
import WelcomeScreenDetail from './components/welcomeScreenDetail';
import AboutMeScreenDetail from './components/aboutMeScreenDetail';
import ContactMeScreenDetail from './components/contactMeScreenDetail';
import SkillsScreenDetail from './components/skillsScreenDetail';
import JobExperiencesScreenDetail from './components/jobExperiencesScreenDetail';
import EducationalScreenDetail from './components/educationalScreenDetail';

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
      tabBarOptions={{ activeTintColor: '#0073b1', inactiveTintColor: 'gray',
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
function WelcomeScreen({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Halaman Utama" component={WelcomeScreenDetail} options={{
        headerLeft: () => (
          <Ionicons style={{ fontSize: 30, paddingLeft: 5 }} name="ios-menu" onPress={() => navigation.openDrawer()} />
        )
      }} />
    </Stack.Navigator>
  );
}

// Stack Tentang Saya
function AboutMeScreen({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tentang Saya" component={AboutMeScreenDetail} options={{
        headerLeft: () => (
          <Ionicons style={{ fontSize: 30, paddingLeft: 5 }} name="ios-menu" onPress={() => navigation.openDrawer()} />
        )
      }} />
    </Stack.Navigator>
  );
}

// Stack HUbungi Saya
function ContactMeScreen({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Hubungi Saya" component={ContactMeScreenDetail} options={{
        headerLeft: () => (
          <Ionicons style={{ fontSize: 30, paddingLeft: 5 }} name="ios-menu" onPress={() => navigation.openDrawer()} />
        )
      }} />
    </Stack.Navigator>
  );
}

// Stack keahlian
function SkillsScreen({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Keahlian" component={SkillsScreenDetail} options={{
        headerLeft: () => (
          <Ionicons style={{ fontSize: 30, paddingLeft: 5 }} name="ios-menu" onPress={() => navigation.openDrawer()} />
        )
      }} />
    </Stack.Navigator>
  );
}

// Stack riwayat pekerjaan
function JobExperiencesScreen({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pekerjaan" component={JobExperiencesScreenDetail} options={{
        headerLeft: () => (
          <Ionicons style={{ fontSize: 30, paddingLeft: 5 }} name="ios-menu" onPress={() => navigation.openDrawer()} />
        )
      }} />
    </Stack.Navigator>
  );
}

// Stack pendidikan
function EducationalScreen({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pendidikan" component={EducationalScreenDetail} options={{
        headerLeft: () => (
          <Ionicons style={{ fontSize: 30, paddingLeft: 5 }} name="ios-menu" onPress={() => navigation.openDrawer()} />
        )
      }} />
    </Stack.Navigator>
  );
}

// drawer variable
const Drawer = createDrawerNavigator();

// export drawer default App
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Halaman Utama" screenOptions={({ route }) => ({
        drawerIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Halaman Utama') {
            iconName = focused ? 'ios-home' : 'ios-home';
          } else if (route.name === 'Keahlian') {
            iconName = focused ? 'ios-rocket' : 'ios-rocket';
          } else if (route.name === 'Pekerjaan') {
            iconName = focused ? 'ios-construct' : 'ios-construct';
          } else if (route.name === 'Pendidikan') {
            iconName = focused ? 'ios-school' : 'ios-school';
          }
          return <Ionicons name={iconName} size={size} color={color} />
        },
      })}
      drawerContentOptions={{ activeTintColor: 'tomato', inactiveTintColor: 'gray' }} >
        <Drawer.Screen  name="Halaman Utama" component={HomeScreen} />
        <Drawer.Screen name="Keahlian" component={SkillsScreen} />
        <Drawer.Screen name="Pekerjaan" component={JobExperiencesScreen} />
        <Drawer.Screen name="Pendidikan" component={EducationalScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


