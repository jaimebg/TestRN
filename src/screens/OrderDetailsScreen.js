import React from 'react'
import { View, Text, useWindowDimensions, ScrollView, TouchableOpacity, Image, RefreshControl, ActionSheetIOS, Platform, Linking, Animated, Easing } from 'react-native'
import * as RootNavigation from '../navigation/RootNavigation'
import Timeline from 'react-native-timeline-flatlist'
import LottieView from 'lottie-react-native';

const OrderDetailsScreen = () => {
  const { width, height } = useWindowDimensions()
  const [refreshing, setRefreshing] = React.useState(false)
  const [expandableHeight, setExpandableHeight] = React.useState(new Animated.Value(115))
  const [isExpanded, setIsExpanded] = React.useState(false)

  const timelineData = [{ title: 'Pedido confirmado' }, { title: 'Asignando repartidor' }, { title: 'El repartido está avisado' }, { title: 'El reparidor está en el restaurante' }, { title: 'En camino' }, { title: 'El driver está cerca' }, { title: 'Disfruta de tu comida' }]

  animateExpand = () => {
    Animated.timing(expandableHeight, {
      toValue: 58 * timelineData.length,
      duration: 500,
      useNativeDriver: false,
      easing: Easing.elastic(0.8)
    }).start()
  }

  animateColapse = () => {
    Animated.timing(expandableHeight, {
      toValue: 115,
      duration: 500,
      useNativeDriver: false,
      easing: Easing.elastic(0.8)
    }).start()
  }

  return (
    <>
      <View style={{ position: 'relative', top: 0, height: 80, backgroundColor: '#b5d1d6', marginBottom: -55 }} />
      <ScrollView refreshControl={<RefreshControl tintColor={'black'} refreshing={refreshing} />} style={{ flex: 1, backgroundColor: 'white', marginTop: 50 }}>
        <View style={{ height: 240, backgroundColor: '#b5d1d6', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
          <View style={{ shadowColor: 'black', shadowOpacity: 0.15, elevation: 5, height: 80, backgroundColor: 'white', borderRadius: 10, margin: 10, flexDirection: 'row', padding: 15 }}>
            <View>
              <Text style={{ color: 'black', fontFamily: 'Taro-Regular' }}>Te gustaría que el reparto fuera a las</Text>
              <Text style={{ color: 'black', fontSize: 22, marginTop: 5, fontFamily: 'Taro-Bold' }}>12:45</Text>
            </View>
            <View style={{ width: width / 3 }}>
              <Image style={{ height: 35, width: 35, marginTop: 10, marginLeft: 10, marginRight: 20, alignSelf: 'center' }} source={require('../../assets/logo.png')} />
            </View>
          </View>
          <Animated.View style={{ shadowColor: 'black', shadowOpacity: 0.15, shadowRadius: 8, elevation: 5, height: expandableHeight, backgroundColor: 'white', borderRadius: 10, margin: 10, padding: 15 }}>
            <View style={{ flexDirection: 'row' }}>
              <View style={{ marginLeft: 8, width: 35, marginTop: 10 }}>
                <LottieView source={require('../../assets/pointer.json')} autoPlay loop style={{ height: 25, width: 25 }} />
                <View style={{ borderLeftColor: '#69696920', borderLeftWidth: 2, flex: 1, marginLeft: 12, marginBottom: -20, marginTop: -8 }} />
              </View>
              <View style={{ width: width * 0.7 }}>
                <Text style={{ fontFamily: 'Taro-Bold', color: 'black', fontSize: 20, marginTop: 5 }}>Pedido recibido</Text>
                <Text style={{ fontFamily: 'Taro-Regular', color: 'black', marginTop: 10 }}>El restaurante confirmará tu pedido justo después de las 12:00</Text>
              </View>
            </View>
            <Timeline
              style={{ marginTop: 20 }}
              circleSize={4}
              circleColor='#696969'
              lineColor='#69696920'
              showTime={false}
              data={timelineData}
              titleStyle={{ fontFamily: 'Taro-Regular', fontSize: 14, color: 'gray', marginTop: -13, marginBottom: 15 }}
            />
            {isExpanded ? <TouchableOpacity onPress={() => { animateColapse(); setIsExpanded(false) }} style={{ width: 40, height: 40, position: 'absolute', top: 0, right: 0, borderRadius: 50, backgroundColor: '#69696920', justifyContent: 'center', marginTop: 10, marginRight: 12 }}>
              <Image source={require('../../assets/expand_less.png')} style={{ width: 35, height: 35, alignSelf: 'center' }} />
            </TouchableOpacity> : <TouchableOpacity onPress={() => { animateExpand(); setIsExpanded(true) }} style={{ width: 40, height: 40, position: 'absolute', top: 0, right: 0, borderRadius: 50, backgroundColor: '#69696920', justifyContent: 'center', marginTop: 10, marginRight: 12 }}>
              <Image source={require('../../assets/expand_more.png')} style={{ width: 35, height: 35, alignSelf: 'center' }} />
            </TouchableOpacity>}
          </Animated.View>
        </View>
        <View style={{ zIndex: -1, elevation: -1, margin: 16 }}>
          <View style={{ marginTop: 20, flexDirection: 'row' }}>
            <View style={{ width: width - (width - 70) }}>
              <Image style={{ height: 35, width: 35, marginTop: 10, marginLeft: 10, marginRight: 20 }} source={require('../../assets/fruits.png')} />
            </View>
            <View style={{ width: width - 100 }}>
              <Text style={{ fontFamily: 'Taro-Bold', color: 'black' }}>Frutería Minimarket Torres</Text>
              <Text style={{ color: 'black', fontFamily: 'Taro-Regular' }}>Calle Párroco Francisco Rodríguez Rodríguez, 27, Las Palmas de Gran Canaria, 35010</Text>
              <Text style={{ fontFamily: 'Taro-Bold', color: 'black', textDecorationStyle: 'solid', textDecorationColor: 'black', textDecorationLine: 'underline', marginTop: 8 }}>Ver menú</Text>
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: 'Taro-Bold', color: 'black' }}>Entrega en:</Text>
            <Text style={{ fontFamily: 'Taro-Regular', color: 'black', marginTop: 5 }}>Calle Blasco Ibañez, 3, 3°B, Las Palmas de Gran Canaria, 35006</Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontFamily: 'Taro-Bold', color: 'black' }}>Nota para el restaurante</Text>
            <Text style={{ fontFamily: 'Taro-Regular', color: 'black', marginTop: 5 }}>Entrega sin contacto.</Text>
          </View>
          <View style={{ marginTop: 35 }}>
            <Text style={{ fontFamily: 'Taro-Bold', color: 'black' }}>Your receipt</Text>
            <Text style={{ fontFamily: 'Taro-Regular', color: 'black', marginTop: 5 }}>N.° de pedido  106831882</Text>
            <View style={{ fontFamily: 'Taro-Regular', flexDirection: 'row', marginTop: 10 }}>
              <Text style={{ fontFamily: 'Taro-Regular', color: 'black', width: (width * 0.8) - 16 }}>Naranja Mesa, 1Kl Aprox</Text>
              <Text style={{ fontFamily: 'Taro-Regular', color: 'black', width: (width * 0.2) - 16, textAlign: 'right' }}>1,60 €</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <Text style={{ fontFamily: 'Taro-Regular', color: 'black', width: (width * 0.8) - 16 }}>2 x Calabacín, 1Kl Aprox</Text>
              <Text style={{ fontFamily: 'Taro-Regular', color: 'black', width: (width * 0.2) - 16, textAlign: 'right' }}>3,80 €</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
              <Text style={{ fontFamily: 'Taro-Regular', color: 'black', width: (width * 0.8) - 16 }}>2 x Batata Blanca Lanzarote, 1Kl Aprox</Text>
              <Text style={{ fontFamily: 'Taro-Regular', color: 'black', width: (width * 0.2) - 16, textAlign: 'right' }}>4,80 €</Text>
            </View>
          </View>
          <View style={{ opacity: 0.5, borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 10 }} />
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Text style={{ fontFamily: 'Taro-Regular', color: 'black', width: (width * 0.8) - 16 }}>Subtotal</Text>
            <Text style={{ fontFamily: 'Taro-Regular', color: 'black', width: (width * 0.2) - 16, textAlign: 'right' }}>10,20 €</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <Text style={{ fontFamily: 'Taro-Regular', color: 'black', width: (width * 0.8) - 16 }}>Gastos de entrega</Text>
            <Text style={{ fontFamily: 'Taro-Regular', color: 'black', width: (width * 0.2) - 16, textAlign: 'right' }}>6,00 €</Text>
          </View>
          <View style={{ opacity: 0.5, borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 10 }} />
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <Text style={{ fontFamily: 'Taro-Regular', color: 'black', width: (width * 0.8) - 16 }}>Total</Text>
            <Text style={{ fontFamily: 'Taro-Regular', color: 'black', width: (width * 0.2) - 16, textAlign: 'right' }}>16,20 €</Text>
          </View>
          <View style={{ opacity: 0.5, borderBottomColor: 'gray', borderBottomWidth: 1, marginTop: 10 }} />
          <Text style={{ fontFamily: 'Taro-Regular', color: 'black', marginTop: 10 }}>Pagado por:</Text>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <Text style={{ fontFamily: 'Taro-Regular', color: 'black', width: (width * 0.8) - 16 }}>VISA</Text>
            <Text style={{ fontFamily: 'Taro-Regular', color: 'black', width: (width * 0.2) - 16, textAlign: 'right' }}>16,20 €</Text>
          </View>
          <TouchableOpacity onPress={() => (Platform.OS === 'ios' ? ActionSheetIOS.showActionSheetWithOptions(
            {
              options: ["Llamar al restaurante", "Ir a la página de ayuda", "Cancelar"],
              cancelButtonIndex: 2,
              userInterfaceStyle: 'light',
              title: '¿Cómo podemos ayudarte?\n\nSi deseas cambiar el pedido o saber a qué hora va a llegar, llama al restaurante. Para cualquier otro asunto, puedes hablar con nuestro equipo de atención al cliente.'
            },
            buttonIndex => {
              if (buttonIndex === 0) {
                Linking.openURL('https://www.just-eat.es/')
              } else if (buttonIndex === 1) {
                Linking.openURL('https://www.just-eat.es/')
              } else if (buttonIndex === 2) {
                console.log('cancel');
              }
            }
          ) : Linking.openURL('https://www.just-eat.es/'))} style={{ backgroundColor: '#87CEEB40', width: width - 32, borderRadius: 10, height: 45, justifyContent: 'center', marginTop: 10 }}>
            <Text style={{ fontFamily: 'Taro-Bold', color: 'black', marginLeft: 15 }}>¿Podemos ayudarte con algo?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={() => RootNavigation.pop()} style={{ width: 30, height: 30, position: 'absolute', top: 0, right: 0, borderRadius: 50, backgroundColor: 'white', justifyContent: 'center', marginTop: 40, marginRight: 16 }}>
        <Image source={require('../../assets/close.png')} style={{ width: 25, height: 25, alignSelf: 'center' }} />
      </TouchableOpacity>
    </>
  )
}

export default OrderDetailsScreen