/* Grab some modeules */
import * as React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; /* Get the navigation bar */
import Clock from 'react-live-clock'; /* Clocks are nice */
/* So are graphs */
import { BarChart } from 'react-native-chart-kit'

/* Define the clock screen */
function ClockScreen() {

  let count = 0;

  /*
  useEffect(() => {
    document.getElementById('counter').innerHTML = 'You clicked ${count} times';
  });
  */
 
  return (
    <View style={ styles.titles }>
      <Text style={{ fontSize: 18 }}>Clock</Text>
      <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />

    </View>
  )
}

/* Set the data */
let dataList = [20, 45, 28, 80, 99, 43]
let labelList = ['January', 'February', 'March', 'April', 'May', 'June']

/*const getData = () => {
  return fetch('api.census.gov/data/2021/pep/population?get=POP_2021,NAME&for=STATE')
    .then(response => response.json())
    .then((json) => {
      return json.census;
    })
    .catch((error) => {
      console.error(error);
    });
};*/

/* Define the graph screen */
function GraphScreen() {

  return (
    <SafeAreaView style={ styles.titles }>
      <Text>Graph</Text>
        <BarChart
          data={{
            labels: labelList,
            datasets: [
              {
                data: dataList,
                strokeWidth: 2,
              },
            ],
          }}
          width={Dimensions.get('window').width - 50}
          height={220}
          chartConfig={{
            backgroundColor: '#1cc910',
            backgroundGradientFrom: '#eff3ff',
            backgroundGradientTo: '#efefef',
            decimalPlaces: 2,
            color: (opacity = 1) => 'rgba(0, 0, 0, .75)',
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
    </SafeAreaView>
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
    justifyContent: 'flex-start',
    padding: 20,
    alignItems: 'center'
  },
  bottom: {
    flex: 1,
    fontSize: 50,
    justifyContent: 'bottom',
    padding: 20,
    alignItems: 'center'
  },
})