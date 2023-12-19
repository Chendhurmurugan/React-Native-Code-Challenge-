import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import history from '../assets/history.png';
import launches from '../assets/launches2.png';
import rocket from '../assets/rocket1.png';
import {Image} from 'react-native';

import Rockets from '../pages/Rockets/Rockets';
import Launches from '../pages/Launches/Launches';
import History from '../pages/History/History';
import {createStackNavigator} from '@react-navigation/stack';
import RocketView from '../pages/Rockets/RocketView';
import LaunchesView from '../pages/Launches/LaunchesView'

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator();

  const Home = () => {
    return (
      <Tab.Navigator
        initialRouteName="rockets"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'history') {
              iconName = focused ? history : history;
            } else if (route.name === 'launches') {
              iconName = focused ? launches : launches;
            } else if (route.name === 'rockets') {
              iconName = focused ? rocket : rocket;
            }
            return (
              <Image
                source={iconName}
                style={{width: size, height: size, tintColor: color}}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: '#98989e',
          style: {
            borderTopColor: '3',
            borderTopWidth: 10,
          },
          tabStyle: {
            backgroundColor: '#343541',
            padding: 5,
          },
        }}>
        <Tab.Screen
          name="rockets"
          options={{
            headerShown: false,
          }}
          component={Rockets}
        />
        <Tab.Screen
          name="launches"
          options={{
            headerShown: false,
          }}
          component={Launches}
        />
        <Tab.Screen
          name="history"
          options={{
            headerShown: false,
          }}
          component={History}
        />
      </Tab.Navigator>
    );
  };

  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }} />
        <Stack.Screen name="RocketDetails" component={RocketView} />
        <Stack.Screen name="LaunchDetails" component={LaunchesView} />
      </Stack.Navigator>
  );
};
export default TabNavigator;
