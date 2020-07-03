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
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import AddAppointment from '../screens/AddAppointment';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
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
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="SearchCounselor"
        component={SearchCounselor}
        options={{ headerTitle: 'Counselors', headerTitleContainerStyle:{alignItems: 'center',}}}
      />
      <TabTwoStack.Screen
        name="CounselorProfile"
        component={CounselorProfile}
        options={{ headerTitle: 'Counselor Profile'}}
      />
      <TabTwoStack.Screen
        name="AvailableTime"
        component={AvailableTime}
        options={{ headerTitle: 'Available Time Slots'}}
      />
      <TabTwoStack.Screen
        name="AddAppointment"
        component={AddAppointment}
        options={{ headerTitle: 'Confirm Appointment'}}
      />
    </TabTwoStack.Navigator>
  );
}
