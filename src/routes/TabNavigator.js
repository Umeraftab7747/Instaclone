import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();
import {Icon} from 'react-native-elements';

import {Image} from 'react-native';

import {Dashboard, Search, Camera, Notification, Account} from '../screens';

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      tab
      tabBarOptions={{
        tabStyle: {
          backgroundColor: '#fff',
        },
        activeTintColor: '#000',
        inactiveTintColor: '#0004',
      }}>
      <Tab.Screen
        name="Home"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Icon size={38} name="home-sharp" type="ionicon" color="#000" />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Icon size={38} name="search-outline" type="ionicon" color="#000" />
          ),
        }}
      />
      <Tab.Screen
        name="Camera"
        component={Camera}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Image
              source={require('../assets/Add.png')}
              style={{width: 30, height: 46, marginTop: 5}}
              resizeMode={'contain'}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Icon size={38} name="heart-outline" type="ionicon" color="#000" />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          tabBarLabel: '',
          tabBarIcon: ({color, size}) => (
            <Icon size={38} name="person-outline" type="ionicon" color="#000" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
