import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Content, Item, Icon, Input, List, ListItem, Thumbnail, Spinner, Right } from 'native-base';
import { AuthContext } from '../navigation/cntext';
import Colors from '../constants/Colors';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TabFourParamList, Appointment, Counsellor} from '../types';
import AsyncStorage from '@react-native-community/async-storage';

type AppointmentViewRouteProp = RouteProp<TabFourParamList, 'Appointments'>;

type AppointmentViewNavigationProp = StackNavigationProp<
  TabFourParamList,
  'Appointments'
>;
interface Props {
  route: AppointmentViewRouteProp
  navigation: AppointmentViewNavigationProp
}
interface AppointmentsProps { }

const Appointments = ({ navigation, route }: Props) => {

  const [appointments,setAppointments] = React.useState<Array<Appointment>>([])
  const [isEmpty, setEmpty] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);

  const loadData = async ()=>{
    const userEmail = await AsyncStorage.getItem('@user_email');
    const url = `http://35.193.105.188:5002/api/v1/counselling-service/appointments/user/${userEmail}`;
    const requestOption:RequestInit = {
      method:'GET'
    }

    fetch(url,requestOption)
    .then(res=>res.json())
    .then(res=>{
      setAppointments(res);
    })
    .catch(err=>alert(err));
  }

  React.useEffect(()=>{
    loadData();
  })

  const myAppointments = (myAppointments: Array<Appointment>) => {

    let list: Array<JSX.Element> = []

    myAppointments.map((value: Appointment, i: any) => {

      list.push(
        <ListItem
          key={i}
          noBorder
          noIndent
          avatar
          style={{ backgroundColor: Colors.WHITE, height: 80, paddingHorizontal: 20, marginVertical: 3, borderRadius: 15 }}
          onPress={() => navigation.push('AppointmentView', { appointmentId: value._id})}
        >
          <Body>
            <Text style={{fontSize:18, fontWeight:'bold'}}>Appointment</Text>
          </Body>
          <Right style={{justifyContent:'center'}}>
            <Text>{value.bookingDate+"     "+value.timeSlot}</Text>
          </Right>
          <Icon
            style={{ color: Colors.GRAY }}
            name='md-arrow-dropright'
          />
        </ListItem>)
    })
    return list;

  }

  return (
    <Container>
      <Content style={{ backgroundColor: Colors.LIGHTGRAY }}>
        <List>
          {
            isLoading
              ?
              <ListItem noIndent style={{ backgroundColor: Colors.WHITE, justifyContent: 'center', marginVertical: 2, borderRadius: 15, height: 60 }}>
                <Spinner color={Colors.NAVYBLUE} />
              </ListItem>
              :
              (
                isEmpty
                  ?
                  <ListItem noIndent style={{ backgroundColor: Colors.WHITE, justifyContent: 'center', marginVertical: 2, borderRadius: 15, height: 60 }}>
                    <Text>No result found</Text>
                  </ListItem>
                  :
                  myAppointments(appointments)
              )
          }
        </List>
      </Content>
    </Container>
  );
};

export default Appointments;

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
