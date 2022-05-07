import React from 'react'
import { View, Text, useWindowDimensions, ScrollView, TouchableOpacity } from 'react-native'
import * as RootNavigation from '../navigation/RootNavigation'

const OrdersScreen = () => {
  const { width, height } = useWindowDimensions()

  return (
    <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontFamily: 'Taro-Regular', fontSize: 14, color: 'black', textAlign: 'center', marginBottom: 30 }}>Orders</Text>
      <TouchableOpacity onPress={() => RootNavigation.navigate('OrderDetails')} style={{ backgroundColor: '#87CEEB40', width: width - 32, borderRadius: 10, height: 45, justifyContent: 'center' }}>
        <Text style={{ fontFamily: 'Taro-Bold', color: 'black', textAlign: 'center' }}>Ver estado de mi pedido</Text>
      </TouchableOpacity>
    </View>
  )
}

export default OrdersScreen