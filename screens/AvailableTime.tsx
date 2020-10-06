import * as React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { Container, Content, List, ListItem } from 'native-base';
import Colors from '../constants/Colors';
import moment, { Moment } from 'moment';
import { RouteProp } from '@react-navigation/native';
import { TabThreeParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import LoadingScreen from './SplashScreen';

type ProfileScreenRouteProp = RouteProp<TabThreeParamList, 'AvailableTime'>;

type ProfileScreenNavigationProp = StackNavigationProp<
    TabThreeParamList,
    'AvailableTime'
>;
interface Props {
    route: ProfileScreenRouteProp
    navigation: ProfileScreenNavigationProp
}

const AvailableTime = ({route,navigation}: Props) => {

    const [counsellorEmail, setCounsellorEmail] = React.useState(route.params.counsellorEmail);
    const [userId, setUserId] = React.useState(route.params.userId);
    const [date, setDate] = React.useState(route.params.date);
    const [counsellorName, setCounsellorName] = React.useState(route.params.counsellorName);
    const [isLoading,setLoading] = React.useState(true);
    const [availableTimeSlots,setAvailableTimeSlots] = React.useState<Array<string>>([])

    const availabletimes = [
        '2020-02-04T09:00:00', '2020-02-04T11:00:00', '2020-02-04T14:00:00', '2020-02-05T09:00:00', '2020-02-05T14:00:00'
    ]

    const loadAvailableTimeSlots = () =>{
        const url = `http://35.193.105.188:5002/api/v1/counselling-service/counsellor/getAvailableTimes/${counsellorEmail}&${date}`;
        const requestOption : RequestInit = {
            method:'GET'
        }
        fetch(url,requestOption)
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            setAvailableTimeSlots(res);
        })
        .catch(err=>{
            console.log(err);
            setLoading(false);
            navigation.popToTop();
        })
    }

    React.useEffect(()=>{
        loadAvailableTimeSlots();
    },[])

    const availabletimelist = () => {
        let list: Array<JSX.Element> = []
        availableTimeSlots.map((value:string, i) => {
            const booked = "booked"
            if(value!==booked){
            list.push(
                <ListItem
                 key={i} 
                 noBorder
                 onPress={()=>navigation.push('AddAppointment',{userId:userId,timeSlot:value, date:date, counsellorName:counsellorName})}
                 noIndent 
                 style={{justifyContent:'center', backgroundColor:Colors.WHITE, borderRadius:20, marginVertical:3, marginHorizontal:50}}
                 >
                    <Text style={{fontSize:18, fontWeight:'bold'}}>{value}</Text>
                </ListItem>
            )
            }

        })
        return list;
    }

    if(isLoading){
        <LoadingScreen/>
    }
    return (
        <Container>
            <StatusBar backgroundColor={Colors.LIGHTGRAY} />
            <Content style={{backgroundColor:Colors.LIGHTGRAY}}>
                <List>
                    {availabletimelist()}
                </List>
            </Content>
        </Container>
    );
};

export default AvailableTime;

const styles = StyleSheet.create({
    container: {}
});
