import React from 'react'
import { View, Text, useWindowDimensions, ScrollView, TouchableOpacity } from 'react-native'
import * as RootNavigation from '../navigation/RootNavigation'

const OrdersScreen = () => {
  const { width, height } = useWindowDimensions()

  return (
    <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 14, color: 'black', textAlign: 'center', marginBottom: 30 }}>Orders</Text>
      <TouchableOpacity onPress={() => RootNavigation.navigate('OrderDetails')} style={{ backgroundColor: '#87CEEB40', width: width - 32, borderRadius: 10, height: 40, justifyContent: 'center' }}>
        <Text style={{ fontWeight: 'bold', color: 'black', textAlign: 'center' }}>Ver estado de mi pedido</Text>
      </TouchableOpacity>
    </View>
  )
}

export default OrdersScreen