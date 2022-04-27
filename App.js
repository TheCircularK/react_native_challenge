/* Grab some modeules */
import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Dimensions, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; /* Get the navigation bar */
import Clock from 'react-live-clock'; /* Clocks are nice */
/* So are graphs */
import { LineChart } from 'react-native-chart-kit'

/* Define the clock screen */
function ClockScreen() {
  return (
    <View style={ styles.titles }>
      <Text style= {{ fontSize: 18 }}>Clock</Text>
      <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
    </View>
  );
}

function GraphScreen() {
  return (
    <View style={ styles.titles }>
      <Text>Graph</Text>
        <LineChart
          data={{
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [20, 45, 28, 80, 99, 43],
                strokeWidth: 2,
              },
            ],
          }}
          width={Dimensions.get('window').width - 16}
          height={220}
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#efefef',
            decimalPlaces: 2,
            color: (opacity = 1) => 'rgba(0, 0, 0, .5)',
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
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

const styles = StyleSheet.create({
  titles: {
    flex: 1,
    fontSize: 50,
    justifyContent: 'top',
    padding: 20,
    alignItems: 'center'
  }
})