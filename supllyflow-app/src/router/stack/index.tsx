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
import { CreateProduct } from '../../pages/products/createProduct';
import { DetailsSuppiler } from '../../pages/supplier/detailsSupplier';
import { CreateSupplier } from '../../pages/supplier/createSupplier';
import { UpdateSupplier } from '../../pages/supplier/updateSupplier';
import { DetailsProduct } from '../../pages/products/detailsProduct';
import { UpdateProduct } from '../../pages/products/updateProduct';
import { DueDate } from '../../pages/duedate';
import { Notifications } from '../../pages/notifications';

const   Stack = createStackNavigator();

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
        <Stack.Screen name="createSupplier" component={CreateSupplier} />
        <Stack.Screen name="updateSupplier" component={UpdateSupplier} />
        <Stack.Screen name="createProduct" component={CreateProduct} />
        <Stack.Screen name="detailsSuppiler" component={DetailsSuppiler} />
        <Stack.Screen name="detailsProduct" component={DetailsProduct} />
        <Stack.Screen name="updateProduct" component={UpdateProduct} />
        <Stack.Screen name="dueDate" component={DueDate} />
        <Stack.Screen name="notifications" component={Notifications} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
