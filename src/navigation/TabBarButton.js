import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";

const TabBarButton = props => {
  return (
    <TouchableOpacity onPress={props.onPressed} style={{ justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ alignItems: 'center', position: 'relative' }}>
        <Text style={{ color: props.active ? 'black' : 'grey', fontSize: 12 }} >{props.text}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default TabBarButton;