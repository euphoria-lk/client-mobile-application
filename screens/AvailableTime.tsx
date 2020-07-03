import * as React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { Container, Content, List, ListItem } from 'native-base';
import Colors from '../constants/Colors';
import moment, { Moment } from 'moment';

interface AvailableTimeProps { }

const AvailableTime = (props: AvailableTimeProps) => {

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
                    <ListItem itemDivider key={date} style={{justifyContent:'center'}}>
                        <Text style={{color:Colors.NAVYBLUE, fontSize:18, fontWeight:'bold'}}>{moment(value).format("dddd, MMMM Do YYYY")}</Text>
                    </ListItem>
                )
            }
            list.push(
                <ListItem key={i} noIndent style={{justifyContent:'center', backgroundColor:Colors.WHITE, borderRadius:20, marginVertical:1, marginHorizontal:30}}>
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
