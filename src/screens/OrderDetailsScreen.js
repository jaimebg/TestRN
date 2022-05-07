import React from 'react'
import { View, Text, useWindowDimensions, ScrollView, TouchableOpacity, Image, RefreshControl } from 'react-native'

const OrderDetailsScreen = () => {
  const { width, height } = useWindowDimensions()
  const [refreshing, setRefreshing] = React.useState(false)

  return (
    <>
      <View style={{ position: 'relative', top: 0, height: 80, backgroundColor: 'skyblue', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginBottom: -55 }} />
      <ScrollView refreshControl={<RefreshControl tintColor={'black'} refreshing={refreshing} />} style={{ flex: 1, backgroundColor: 'white', marginTop: 45 }}>
        <View style={{ height: 230, backgroundColor: 'skyblue', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
          <View style={{ height: 70, backgroundColor: 'white', borderRadius: 10, margin: 10 }}>

          </View>
          <View style={{ height: 100, backgroundColor: 'white', borderRadius: 10, margin: 10 }}>

          </View>
        </View>
        <View style={{ margin: 16 }}>
          <View>
            <Text style={{ fontWeight: 'bold', color: 'black' }}>Fruteria Frutero</Text>
            <Text style={{ color: 'black' }}>Texto texto texto texto te</Text>
            <Text style={{ fontWeight: 'bold', color: 'black', textDecorationStyle: 'solid', textDecorationColor: 'black', textDecorationLine: 'underline' }}>Ver menú</Text>
          </View>
          <View>
            <Text style={{ fontWeight: 'bold', color: 'black' }}>Entrega en</Text>
            <Text style={{ color: 'black' }}>Calle calle calle calle</Text>
          </View>
          <View>
            <Text style={{ fontWeight: 'bold', color: 'black' }}>Nota para el restaurante</Text>
            <Text style={{ color: 'black' }}>Entrega sin contacto.</Text>
          </View>
          <View>
            <Text style={{ fontWeight: 'bold', color: 'black' }}>Your receipt</Text>
            <Text style={{ color: 'black' }}>Entrega sin contacto.</Text>
            <Text style={{ color: 'black' }}>Entrega sin contacto.</Text>
            <Text style={{ color: 'black' }}>Entrega sin contacto.</Text>
            <Text style={{ color: 'black' }}>Entrega sin contacto.</Text>
          </View>
          <View style={{ opacity: 0.5, borderBottomColor: 'gray', borderBottomWidth: 1 }} />
          <Text style={{ color: 'black' }}>Entrega sin contacto.</Text>
          <Text style={{ color: 'black' }}>Entrega sin contacto.</Text>
          <View style={{ opacity: 0.5, borderBottomColor: 'gray', borderBottomWidth: 1 }} />
          <Text style={{ color: 'black' }}>Entrega sin contacto.</Text>
          <View style={{ opacity: 0.5, borderBottomColor: 'gray', borderBottomWidth: 1 }} />
          <Text style={{ color: 'black' }}>Entrega sin contacto.</Text>
          <Text style={{ color: 'black' }}>Entrega sin contacto.</Text>
          <TouchableOpacity style={{ backgroundColor: '#87CEEB40', width: width - 32, borderRadius: 10, height: 40, justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', color: 'black', textAlign: 'center' }}>¿Podemos ayudarte con algo?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity style={{ width: 30, height: 30, position: 'absolute', top: 0, right: 0, borderRadius: 50, backgroundColor: 'white', justifyContent: 'center', marginTop: 40, marginRight: 16 }}>
        <Image source={require('../../assets/close.png')} style={{ width: 25, height: 25, alignSelf: 'center' }} />
      </TouchableOpacity>
    </>
  )
}

export default OrderDetailsScreen