import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import SearchCounselor from '../screens/SearchCounselors';
import CounselorProfile from '../screens/CounselorProfile';
import AvailableTime from '../screens/AvailableTime';
import AddAppointment from '../screens/AddAppointment';
import Appointments from '../screens/Appointments';
import Profile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';
import { BottomTabParamList, TabTowParamList, TabThreeParamList, TabOneParamList, TabFourParamList } from '../types';
import ChatScreen from '../screens/ChatScreen';
import PickDate from '../screens/PickDate';
import AppointmentView from '../screens/AppointmentView';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabTow"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-person" color={color} />,
          title: 'Profile'
        }}
      />
      <BottomTab.Screen
        name="TabTow"
        component={TabTowNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-people" color={color} />,
          title: 'Forum'
        }}
      />
      <BottomTab.Screen
        name="TabThree"
        component={TabThreeNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-search" color={color} />,
          title: 'Counsellors'
        }}
      />
      <BottomTab.Screen
        name="TabFour"
        component={TabFourNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-calendar" color={color} />,
          title: 'Appointments'
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name='Profile'
        component={Profile}
        options={{ headerTitle: 'Your Profile', headerTitleContainerStyle: { alignItems: 'center', } }}
      />
      <TabOneStack.Screen
        name='EditProfile'
        component={EditProfile}
        options={{ headerTitle: 'Edit Your Profile', }}
      />
    </TabOneStack.Navigator>
  );
}
const TabTowStack = createStackNavigator<TabTowParamList>();

function TabTowNavigator() {
  return (
    <TabTowStack.Navigator>
      <TabTowStack.Screen
        name="Forum"
        component={TabOneScreen}
        options={{ headerTitle: 'Forum', headerTitleContainerStyle: { alignItems: 'center', } }}
      />
    </TabTowStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator() {
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="SearchCounselor"
        component={SearchCounselor}
        options={{ headerTitle: 'Counsellors', headerTitleContainerStyle: { alignItems: 'center', } }}
      />
      <TabThreeStack.Screen
        name="CounselorProfile"
        component={CounselorProfile}
        options={{ headerTitle: 'Counsellor Profile' }}
      />
      <TabThreeStack.Screen
        name="AvailableTime"
        component={AvailableTime}
        options={{ headerTitle: 'Available Time Slots' }}
      />
      <TabThreeStack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={(params)=>({ headerTitle: params.route.params.counsellorName?params.route.params.counsellorName:""})}
      />
      <TabThreeStack.Screen
        name="AddAppointment"
        component={AddAppointment}
        options={{ headerTitle: 'Confirm Appointment' }}
      />
      <TabThreeStack.Screen
        name="PickDate"
        component={PickDate}
        options={{ headerTitle: 'Pick A Date'}}
      />
    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator<TabFourParamList>()

function TabFourNavigator() {
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name='Appointments'
        component={Appointments}
        options={{ headerTitle: 'Your Appointments', headerTitleContainerStyle: { alignItems: 'center', } }}
      />
      <TabFourStack.Screen
        name='AppointmentView'
        component={AppointmentView}
        options={{ headerTitle: 'Appointment Details' }}
      />
    </TabFourStack.Navigator>
  );
}
