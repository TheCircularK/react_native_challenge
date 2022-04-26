/* Grab some modeules */
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; /* Get the navigation bar */
import Clock from 'react-live-clock'; /* Clocks are nice */
import {LineChart} from 'react-native-charts-wrapper'; /* So are graphs */

/* Define the clock screen */
function ClockScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'top', padding: 20, alignItems: 'center' }}>
      <Text>Clock</Text>
      <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
    </View>
  );
}

function GraphScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Graph</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function CreateTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Clock" component={ClockScreen} />
      <Tab.Screen name="Graph" component={GraphScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <CreateTabs />
    </NavigationContainer>
  );
}
