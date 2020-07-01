import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import BottomTabNavigator from './BottomTabNavigator';
import AuthNavigator from './AuthNavigator';
import SplashScreen from '../screens/SplashScreen';

import {AuthContext} from './cntext';


// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const [isLoding, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState('');

  const context = React.useMemo(()=>{
    return{
      signIn: () =>{
        setIsLoading(false);
        setUserToken('asdd')
      },
      signOut: () =>{
        setIsLoading(false);
        setUserToken('')
      },
    };
  },[])

  React.useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    },1000)
  },[])

  if(isLoding)
  {
    return <SplashScreen/>
  }

  return (
    <AuthContext.Provider value={{signIn:context.signIn,signOut:context.signOut}}>
      <NavigationContainer>
        {userToken ?
        <RootNavigator />
        :
        <AuthNavigator/>
        }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tab" component={BottomTabNavigator} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
    </Stack.Navigator>
  );
}
