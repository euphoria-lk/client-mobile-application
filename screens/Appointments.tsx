import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Content, Item, Icon, Input, List, ListItem, Thumbnail, Spinner, Right } from 'native-base';
import { AuthContext } from '../navigation/cntext';
import Colors from '../constants/Colors';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TabFourParamList } from '../types';

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

  const [counselors, setCounselors] = React.useState([
    {
      id: '1',
      firstName: 'Jennie',
      lastName: 'carlton',
      timeSlot: '7-8',
      image: 'https://randomuser.me/api/portraits/men/90.jpg'
    },
    {
      id: '2',
      firstName: 'Brigitte',
      lastName: 'Cushman',
      timeSlot: '1-2',
      image: 'https://randomuser.me/api/portraits/men/91.jpg'
    }
  ]);

  const [listData, setlistData] = React.useState(counselors);
  const [searchText, setSearchText] = React.useState('');
  const [isEmpty, setEmpty] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);

  const myAppointments = (myAppointments: Array<Object>) => {

    let list: Array<JSX.Element> = []

    myAppointments.map((value: any, i: any) => {
      list.push(
        <ListItem
          key={i}
          noBorder
          noIndent
          avatar
          style={{ backgroundColor: Colors.WHITE, height: 60, paddingHorizontal: 20, marginVertical: 1, borderRadius: 15 }}
          onPress={() => navigation.push('AppointmentView', { appointmentId: "1234121" })}
        >
          <Left>
            <Thumbnail source={{ uri: value.image }} small />
          </Left>
          <Body>
            <Text>{value.firstName + " " + value.lastName}</Text>
          </Body>
          <Right>
            <Text>{value.timeSlot}</Text>
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
                  myAppointments(listData)
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
