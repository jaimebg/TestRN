import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import BaseNavigation from './src/navigation/BaseNavigation';

const App = () => {
  return (
    <>
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle="dark-content" hidden={false} />
      <BaseNavigation />
    </>
  );
};

export default App;