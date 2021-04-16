import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard, 
  LostReportScreen
} from './src/screens'


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        > 
        <Stack.Screen name="startscreen" component={StartScreen} />
        <Stack.Screen name="registerscreen" component={RegisterScreen} />
        <Stack.Screen name="loginscreen" component={LoginScreen} />
        <Stack.Screen name="forgotpasswordscreen" component={ForgotPasswordScreen} />
        <Stack.Screen name="dashboard" component={Dashboard} />
        <Stack.Screen name="lostreport" component={LostReportScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;