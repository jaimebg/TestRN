import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import TabBar from '../navigation/TabBar';
import AccountScreen from './AccountScreen';
import HomeScreen from './HomeScreen';
import OrdersScreen from './OrdersScreen';
import ShopsScreen from './ShopsScreen';
import messaging from '@react-native-firebase/messaging';
import * as RootNavigation from '../navigation/RootNavigation'

const MainTabContainer = () => {
  const TabStack = createNativeStackNavigator();

  useEffect(() => {
    async function requestUserPermission() {
      const authorizationStatus = await messaging().requestPermission();

      if (authorizationStatus) {
        console.log('Permission status:', authorizationStatus);
      }
    }

    async function initialNotif() {
      messaging().onNotificationOpenedApp(remoteMessage => {
        if (remoteMessage) {
          if (remoteMessage.notification.body.startsWith('Pedido')) RootNavigation.navigate('OrderDetails');
        }
      });

      messaging()
        .getInitialNotification()
        .then(async (remoteMessage) => {
          if (remoteMessage) {
            if (remoteMessage.notification.body.startsWith('Pedido')) RootNavigation.navigate('OrderDetails');
          }
        });
    }
    requestUserPermission()
    initialNotif()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexGrow: 1, overflow: 'visible' }}>
        <TabStack.Navigator initialRouteName={"Home"} screenOptions={{ headerShown: false }}>
          <TabStack.Group screenOptions={{}}>
            <TabStack.Screen name="Home" component={HomeScreen} options={{ animation: "fade" }} />
            <TabStack.Screen name="Shops" component={ShopsScreen} options={{ animation: "fade" }} />
            <TabStack.Screen name="Orders" component={OrdersScreen} options={{ animation: "fade" }} />
            <TabStack.Screen name="Account" component={AccountScreen} options={{ animation: "fade" }} />
          </TabStack.Group>
        </TabStack.Navigator>
      </View>
      <View style={{ flexShrink: 1, overflow: 'visible' }}>
        <TabBar />
      </View>
    </View>
  );
}

export default MainTabContainer;