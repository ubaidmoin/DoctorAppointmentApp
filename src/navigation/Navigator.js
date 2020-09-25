import React from 'react';
import {TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FeatherIcon from 'react-native-vector-icons/Feather';

import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();

const HeaderWithMenu = (title, navigation) => ({
  title: title,
  headerTitleStyle: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 12,
  },
  headerStyle: {
    backgroundColor: '#32b6a6',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.pop()}>
      <FeatherIcon
        style={{marginLeft: 10}}
        name="menu"
        size={25}
        color={'#fff'}
      />
    </TouchableOpacity>
  ),
});

const HeaderWithBackButton = ({title}, navigation) => ({
  title: title,
  headerTitleStyle: {
    color: '#fff',
    fontWeight: '400',
    fontSize: 12,
  },
  headerStyle: {
    backgroundColor: '#32b6a6',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.pop()}>
      <FeatherIcon
        style={{marginLeft: 10}}
        name="chevron-left"
        size={17}
        color={'#fff'}
      />
    </TouchableOpacity>
  ),
});

function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={({navigation}) => HeaderWithMenu('Home', navigation)}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={({navigation}) =>
            HeaderWithBackButton('Dr. Profile', navigation)
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
