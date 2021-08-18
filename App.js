import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Instagram from './screens/IG';
import Facebook from './screens/Fb';

export default class App extends React.Component{
  render(){
  return (  
     <AppContainer/>
  );
 }
}

const tabNavigator = createBottomTabNavigator({
  INSTAGRAM : { screen:Instagram },
  FACEBOOK : { screen:Facebook } 
  },
  {
  defaultNavigationOptions : ({navigation}) => ({
    tabBarIcon : () => {
      const routeName = navigation.state.routeName;
      if (routeName === "INSTAGRAM"){
        return (
          <Image
           source = {require('./assets/ig.jpg')}
           style = {{ width: 40, height: 30 }}/>
        );
      }
      else if (routeName === "FACEBOOK"){
        return (
          <Image
           source = {require('./assets/fb.png')}
           style = {{ width: 40, height: 30 }}/>
        );
      }
    }
  })
})
  

const AppContainer = createAppContainer(tabNavigator);



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
