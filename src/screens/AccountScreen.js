import React from 'react'
import { View, Text } from 'react-native'
import * as RootNavigation from '../navigation/RootNavigation'

const AccountScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 14, color: 'black', textAlign: 'center', fontFamily: 'Taro-Regular' }}>Account</Text>
    </View>
  )
}

export default AccountScreen