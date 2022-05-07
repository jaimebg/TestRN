import React from 'react'
import { View, Text, useWindowDimensions, ScrollView, TouchableOpacity } from 'react-native'
import * as RootNavigation from '../navigation/RootNavigation'

const OrdersScreen = () => {
  const { width, height } = useWindowDimensions()

  return (
    <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 14, color: 'black', textAlign: 'center' }}>Orders</Text>
    </View>
  )
}

export default OrdersScreen