import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FilmDetail from '../Components/FilmDetail';
import Search from '../Components/Search';
import Home from '../Components/home';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      {/* <Stack.Screen name="Home" component={Home}  options={{title: "Welcome"}} /> */}
      <Stack.Screen name="Search" component={Search} options={{title: 'Welcome'}}/>
      <Stack.Screen name="Details" component={FilmDetail}   />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack;