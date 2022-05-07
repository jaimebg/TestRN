import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import * as RootNavigation from './RootNavigation';
import HomeScreen from '../screens/HomeScreen';
import ShopsScreen from '../screens/ShopsScreen';
import OrdersScreen from '../screens/OrdersScreen';
import AccountScreen from '../screens/AccountScreen';
import MainTabContainer from '../screens/MainTabContainer';
import OrderDetailsScreen from '../screens/OrderDetailsScreen';

const BaseNavigation = () => {
  const Stack = createNativeStackNavigator();
  const routeNameRef = React.useRef();

  return (
    <NavigationContainer ref={RootNavigation.navigationRef}>
      <Stack.Navigator initialRouteName={"MainTabContainer"} screenOptions={{ headerShown: false }} >
        <Stack.Group>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Shops" component={ShopsScreen} />
          <Stack.Screen name="Orders" component={OrdersScreen} />
          <Stack.Screen name="OrderDetails" component={OrderDetailsScreen} options={{ animation: 'slide_from_bottom' }} />
          <Stack.Screen name="Account" component={AccountScreen} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="MainTabContainer" component={MainTabContainer} options={{ animation: "fade" }} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default BaseNavigation
