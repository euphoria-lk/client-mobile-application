import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { DatePicker, Item } from 'native-base';
import Colors from '../constants/Colors';
import { RouteProp } from '@react-navigation/native';
import { TabThreeParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import moment from 'moment';

type ProfileScreenRouteProp = RouteProp<TabThreeParamList, 'PickDate'>;

type ProfileScreenNavigationProp = StackNavigationProp<
    TabThreeParamList,
    'PickDate'
>;
interface Props {
    route: ProfileScreenRouteProp
    navigation: ProfileScreenNavigationProp
}

interface PickDateProps { }

const PickDate = ({ navigation, route }: Props) => {
    const today = new Date()
    const tomorrow = new Date(today)
    tomorrow.setDate(tomorrow.getDate() + 1)

    const setDate = (newDate: Date) => {
        const counsellorEmail = route.params.counsellorEmail;
        const userId = route.params.userId;
        const counsellorName = route.params.counsellorName;
        const date = moment(newDate).format("YYYY-MM-DD");
        console.log(date);
        navigation.push('AvailableTime', { counsellorEmail: counsellorEmail, userId: userId, date: date, counsellorName: counsellorName })
    }
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>Please Pick a Date :</Text>
            <Item rounded style={{ width: 200, justifyContent: 'center', borderColor: Colors.NAVYBLUE }}>
                <DatePicker

                    defaultDate={tomorrow}
                    minimumDate={tomorrow}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText="Select Date"
                    textStyle={{ color: "green" }}
                    placeHolderTextStyle={{ color: Colors.GRAY }}
                    onDateChange={date => setDate(date)}
                    disabled={false}
                />
            </Item>
        </View>
    );
};

export default PickDate;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
