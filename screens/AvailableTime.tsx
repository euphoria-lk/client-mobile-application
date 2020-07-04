import * as React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { Container, Content, List, ListItem } from 'native-base';
import Colors from '../constants/Colors';
import moment, { Moment } from 'moment';
import { RouteProp } from '@react-navigation/native';
import { TabThreeParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';

type ProfileScreenRouteProp = RouteProp<TabThreeParamList, 'CounselorProfile'>;

type ProfileScreenNavigationProp = StackNavigationProp<
    TabThreeParamList,
    'CounselorProfile'
>;
interface Props {
    route: ProfileScreenRouteProp
    navigation: ProfileScreenNavigationProp
}

const AvailableTime = ({route,navigation}: Props) => {

    const availabletimes = [
        '2013-02-04T09:00:00', '2013-02-04T11:00:00', '2013-02-04T14:00:00', '2013-02-05T09:00:00', '2013-02-05T14:00:00'
    ]


    const availabletimelist = () => {
        let list: Array<JSX.Element> = []
        let tempdate = moment().subtract(1, 'days').format("DD MM YYYY");
        let date;
        let time;
        availabletimes.map((value, i) => {
            date = moment(value).format("DD MM YYYY");
            time = moment(value).format("hh:mm a")
            console.log(tempdate)
            console.log(time)
            if (!tempdate.match(date)) {
                tempdate = date
                list.push(
                    <ListItem noBorder itemDivider key={date} style={{justifyContent:'center'}}>
                        <Text style={{color:Colors.NAVYBLUE, fontSize:18, fontWeight:'bold'}}>{moment(value).format("dddd, MMMM Do YYYY")}</Text>
                    </ListItem>
                )
            }
            list.push(
                <ListItem
                 key={i} 
                 noBorder
                 onPress={()=>navigation.push('AddAppointment',{userId:route.params.userId,timeSlot:value})}
                 noIndent 
                 style={{justifyContent:'center', backgroundColor:Colors.WHITE, borderRadius:20, marginVertical:1, marginHorizontal:30}}
                 >
                    <Text style={{fontSize:17}}>{time}</Text>
                </ListItem>
            )

        })
        return list;
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
