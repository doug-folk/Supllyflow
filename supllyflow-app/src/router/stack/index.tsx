import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Login } from '../../pages/login';
import { SignUp1 } from '../../pages/signUp/signUp1';
import { SignUp2 } from '../../pages/signUp/signUp2';
import { SignUp3 } from '../../pages/signUp/signUp3';
import { Welcome } from '../../pages/signUp/welcome';
import { BottomNavigationBar } from '../../pages/bottomNavigationBar';
import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from '../../pages/dashboard';

const Stack = createStackNavigator();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{ headerShown: false }}  initialRouteName="login">
        <Stack.Screen name="login" component={Login}   />
        <Stack.Screen name="signUp1" component={SignUp1}   />
        <Stack.Screen name="SignUp2" component={SignUp2}   />
        <Stack.Screen name="SignUp3" component={SignUp3}   />
        <Stack.Screen name="welcome" component={Welcome} />
        <Stack.Screen name="bottomNavigationBar" component={BottomNavigationBar} />
        <Stack.Screen name="dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
