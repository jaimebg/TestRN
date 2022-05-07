import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";

const icon = name => {
  switch (name) {
    case 'shops':
      return require('../../assets/shops.png');
    case 'orders':
      return require('../../assets/orders.png');
    case 'account':
      return require('../../assets/account.png');
    case 'home':
      return require('../../assets/home.png');
  }
}

const TabBarButton = props => {
  return (
    <TouchableOpacity onPress={props.onPressed} style={{ justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ alignItems: 'center', position: 'relative' }}>
        <Text style={{ color: props.active ? 'orangered' : 'grey', fontSize: 12 }} >{props.text}</Text>
        <Image style={{ tintColor: props.active ? 'orangered' : 'grey' }} source={icon(props.icon)} name={props.icon} width={25} height={25} />
      </View>
    </TouchableOpacity>
  )
}

export default TabBarButton;