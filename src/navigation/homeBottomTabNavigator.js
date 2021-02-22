import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import plusIcon from '../assets/images/plus-icon.png';

import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const HomeBottomTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
          backgroundColor: '#000',
        },
        activeTintColor: '#fff',
      }}>
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Entypo name={'home'} color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name={'Search'}
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <EvilIcons name={'search'} color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name={'Upload'}
        component={Home}
        options={{
          tabBarIcon: () => (
            <Image
              source={plusIcon}
              style={{height: 35, resizeMode: 'contain'}}
            />
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tab.Screen
        name={'Inbox'}
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name={'inbox'} color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name={'Profile'}
        component={Home}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name={'user'} color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeBottomTabNavigator;
