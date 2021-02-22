import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {withAuthenticator} from 'aws-amplify-react-native';

import Navigation from './src/navigation';

import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
        <Navigation />
      </SafeAreaView>
    </>
  );
};

export default withAuthenticator(App);
