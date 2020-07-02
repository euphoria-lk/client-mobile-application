import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Header, Left, Body, Text, Content, Item, Icon, Input, List, ListItem, Thumbnail, Spinner } from 'native-base';
import Colors from '../constants/Colors';
import { RouteProp } from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {TabTwoParamList} from '../types'

type ProfileScreenRouteProp = RouteProp<TabTwoParamList, 'SearchCounselor'>;

type ProfileScreenNavigationProp = StackNavigationProp<
  TabTwoParamList,
  'SearchCounselor'
>;
interface Props
{
  route:ProfileScreenRouteProp
  navigation:ProfileScreenNavigationProp
}

export default function TabTwoScreen({ route, navigation }: Props) {
  const [counselors, setCounselors] = React.useState([
    {
      id: '1',
      firstName: 'John',
      lastName: 'wick',
      image: 'https://randomuser.me/api/portraits/men/90.jpg'
    },
    {
      id: '2',
      firstName: 'Bavindu',
      lastName: 'dilshan',
      image: 'https://randomuser.me/api/portraits/men/94.jpg'
    },
    {
      id: '2',
      firstName: 'Bavindu',
      lastName: 'dilshan',
      image: 'https://randomuser.me/api/portraits/men/94.jpg'
    },
    {
      id: '2',
      firstName: 'Bavindu',
      lastName: 'dilshan',
      image: 'https://randomuser.me/api/portraits/men/94.jpg'
    },
    {
      id: '2',
      firstName: 'Bavindu',
      lastName: 'dilshan',
      image: 'https://randomuser.me/api/portraits/men/94.jpg'
    },
    {
      id: '2',
      firstName: 'Bavindu',
      lastName: 'dilshan',
      image: 'https://randomuser.me/api/portraits/men/94.jpg'
    },
    {
      id: '2',
      firstName: 'Bavindu',
      lastName: 'dilshan',
      image: 'https://randomuser.me/api/portraits/men/94.jpg'
    },
    {
      id: '2',
      firstName: 'Bavindu',
      lastName: 'dilshan',
      image: 'https://randomuser.me/api/portraits/men/94.jpg'
    },
    {
      id: '2',
      firstName: 'Bavindu',
      lastName: 'dilshan',
      image: 'https://randomuser.me/api/portraits/men/94.jpg'
    },
    {
      id: '2',
      firstName: 'Bavindu',
      lastName: 'dilshan',
      image: 'https://randomuser.me/api/portraits/men/94.jpg'
    },
    {
      id: '2',
      firstName: 'Bavindu',
      lastName: 'dilshan',
      image: 'https://randomuser.me/api/portraits/men/94.jpg'
    },
    {
      id: '2',
      firstName: 'Bavindu',
      lastName: 'dilshan',
      image: 'https://randomuser.me/api/portraits/men/94.jpg'
    },
    {
      id: '2',
      firstName: 'Bavindu',
      lastName: 'dilshan',
      image: 'https://randomuser.me/api/portraits/men/94.jpg'
    },
    {
      id: '2',
      firstName: 'Bavindu',
      lastName: 'dilshan',
      image: 'https://randomuser.me/api/portraits/men/94.jpg'
    },
    {
      id: '2',
      firstName: 'Bavindu',
      lastName: 'dilshan',
      image: 'https://randomuser.me/api/portraits/men/94.jpg'
    },
    {
      id: '2',
      firstName: 'Bavindu',
      lastName: 'dilshan',
      image: 'https://randomuser.me/api/portraits/men/94.jpg'
    },
    {
      id: '2',
      firstName: 'Bavindu',
      lastName: 'dilshan',
      image: 'https://randomuser.me/api/portraits/men/94.jpg'
    }
  ]);

  const [listData, setlistData] = React.useState(counselors);
  const [searchText, setSearchText] = React.useState('');
  const [isEmpty, setEmpty] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);

  const counselor = (counselor: Array<Object>) => {

    let list: Array<JSX.Element> = []

    counselor.map((value: any, i: any) => {
      list.push(
        <ListItem
         key={i}
         noIndent
         avatar 
         style={{ backgroundColor: Colors.WHITE, height: 60, paddingHorizontal: 20, marginVertical: 1, borderRadius: 15 }} 
         onPress={()=> navigation.push('CounselorProfile',{userId:value.id})}
         >
          <Left>
            <Thumbnail source={{ uri: value.image }} small />
          </Left>
          <Body>
            <Text>{value.firstName + " " + value.lastName}</Text>
          </Body>
          <Icon
            style={{ color: Colors.GRAY }}
            name='md-arrow-dropright'
          />
        </ListItem>)
    })
    return list;

  }

  const counselorFilter = (text: string) => {
    setSearchText(text);
    if (text !== '') {
      setLoading(true)
      const value = text.trim().toUpperCase();
      let newData = [];
      newData = counselors.filter((item) => {
        const name = item.firstName + " " + item.lastName
        return name.toUpperCase().match(value)
      })
      if (newData.length === 0) {
        setEmpty(true)
      }
      else {
        setEmpty(false)
      }
      setlistData(newData)
      setLoading(false)
    }
    else {
      setlistData(counselors)
      setEmpty(false)
    }
  }

  return (
    <Container>
      <Header searchBar rounded androidStatusBarColor={Colors.LIGHTGRAY} style={{ backgroundColor: Colors.WHITE }}>
        <Item>
          <Icon name="ios-search" />
          <Input placeholder="Search" onChangeText={(text) => counselorFilter(text)} />
          <Icon name="ios-people" />
        </Item>
      </Header>
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
                  counselor(listData)
              )
          }
        </List>
      </Content>
    </Container>
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
