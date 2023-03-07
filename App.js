/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Signin from './pages/s0321A0020/view/signin';
import Main from './pages/s0321A0030/view/Main';
import QrScan from './pages/s0321A0040/view/QrScan';
import QrScanCell from './pages/s0321A0041/view/QrScanCell';
import QrSearch from './pages/s0321A0050/view/QrSearch';
import OveEmbRegister from './pages/s0321A0060/view/OveEmbRegister';
import InsemCellRegister from './pages/s0321A0070/view/InsemCellRegister';
import EmbMoveRegister from './pages/s0321A0080/view/EmbMoveRegister';
import SplashScreen from './pages/s0321A0010/view/SplashScreen';
import RNSplashScreen from 'react-native-splash-screen';

const Stack = createStackNavigator();
const App = () => {

  useEffect(() => {
    RNSplashScreen.hide();
  }, []);

  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen
          name="Splash"
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
          component={SplashScreen}
        />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
        />
        <Stack.Screen
          name="Main"
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
          component={Main}
        />
        <Stack.Screen
          name="OveEmbRegister"
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
          component={OveEmbRegister}
        />
        <Stack.Screen
          name="InsemCellRegister"
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
          component={InsemCellRegister}
        />
        <Stack.Screen
          name="EmbMoveRegister"
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
          component={EmbMoveRegister}
        />
        <Stack.Screen
          name="QrScan"
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
          component={QrScan}
        />
        <Stack.Screen
          name="QrScanCell"
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
          component={QrScanCell}
        />
        <Stack.Screen
          name="QrSearch"
          options={{ title: null, headerShown: false }} // 각 화면 타이틀(헤더에 렌더링됨)
          component={QrSearch}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
