import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as RootNavigation from './RootNavigation';
import TabBarButton from './TabBarButton';

const TabBar = () => {
  const [currentTab, setCurrentTab] = React.useState("Home")

  function replaceAndSetCurrentTab(tab) {
    setCurrentTab(tab)
    RootNavigation.replace(tab)
  }

  return (
    <View style={styles.TabBar}>
      <TabBarButton icon="home" active={currentTab == 'Home'} text="Inicio" onPressed={() => replaceAndSetCurrentTab('Home')} />
      <TabBarButton icon="shops" active={currentTab == 'Shops'} text="Tiendas" onPressed={() => replaceAndSetCurrentTab('Shops')} />
      <TabBarButton icon="orders" active={currentTab == 'Orders'} text="Pedidos" onPressed={() => replaceAndSetCurrentTab('Orders')} />
      <TabBarButton icon="account" active={currentTab == 'Account'} text="Cuenta" onPressed={() => replaceAndSetCurrentTab('Account')} />
    </View>
  );
};

const styles = StyleSheet.create({
  TabBar: { backgroundColor: "white", flexDirection: "row", height: 70, justifyContent: 'space-evenly', alignItems: 'center' }
})

export default TabBar;