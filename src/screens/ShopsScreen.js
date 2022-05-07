import React from 'react'
import { View, Text } from 'react-native'
import * as RootNavigation from '../navigation/RootNavigation'

const ShopsScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 14, color: 'black', textAlign: 'center' }}>Shops</Text>
    </View>
  )
}

export default ShopsScreen