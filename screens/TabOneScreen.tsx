import * as React from 'react';
import { StyleSheet, } from 'react-native';
import {WebView} from 'react-native-webview';
import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Button } from 'native-base';
import { AuthContext } from '../navigation/cntext';

export default function TabOneScreen() {
  return(
    <WebView pullToRefreshEnabled={true} bounces={true} source={{uri:"https://www.youtube.com/playlist?list=PLSJfTZhMlbkTSGNKBD_rL1g7pnE-UVCOB"}}/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
