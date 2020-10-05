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

import AsyncStorage from '@react-native-community/async-storage';


// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const [isLoding, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState('');

  const context = React.useMemo(()=>{
    return{
      signIn: (email:string,password:string) =>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("email", "kasunwpdimuthu@gmail.com");
        urlencoded.append("password", "dimuthu");

        var requestOptions:RequestInit = {
          method: 'POST',
          headers: myHeaders,
          body: `email=${email}&password=${password}`,
          redirect: 'follow'
        };

        fetch("http://34.121.143.209:5000/api/v1/client-service/login", requestOptions)
          .then(response => response.json())
          .then(async result => {
            if(result.success === "true"){
              console.log(result)
              await AsyncStorage.setItem('@user_token', result.user_profile._id?result.user_profile._id:'')
              await AsyncStorage.setItem('@user_name',result.user_profile._id?result.user_profile.firstname:'')
              await AsyncStorage.setItem('@user_image',result.user_profile.image?result.user_profile.image:'')
              setUserToken(result.user_profile._id?result.user_profile._id:'');
              return false;
            }
            else{
              alert(result.message);
              return false;
            }
          })
          .catch(error =>{ 
            console.log('error', error);
            return false;
        });
        // setUserToken('asdd')
      },
      signOut: async () =>{
        await AsyncStorage.setItem('@user_token','')
        setIsLoading(false);
        setUserToken('')
      },
    };
  },[])

  const getToken = async ()=>{
    const token = await AsyncStorage.getItem('@user_token')
      if(token !== null) {
        setUserToken(token)
      }
      setIsLoading(false);
  }

  React.useEffect( () =>{
      getToken();
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
