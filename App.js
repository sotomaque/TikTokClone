/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <AntDesign name={'stepforward'} size={30} />
      </SafeAreaView>
    </>
  );
};

export default App;
