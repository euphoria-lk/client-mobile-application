import * as React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TabThreeParamList } from '../types';
import { Container, Content, Grid, Row, Text, Button, Textarea, Footer } from 'native-base';
import Colors from '../constants/Colors';
import moment from 'moment';
import Layout from '../constants/Layout';
import AsyncStorage from '@react-native-community/async-storage';

type ProfileScreenRouteProp = RouteProp<TabThreeParamList, 'AddAppointment'>;

type ProfileScreenNavigationProp = StackNavigationProp<
    TabThreeParamList,
    'AddAppointment'
>;
interface Props {
    route: ProfileScreenRouteProp
    navigation: ProfileScreenNavigationProp
}

const AddAppointment = ({ route, navigation }: Props) => {
    // const date = moment(route.params.timeSlot).format("dddd, MMMM Do YYYY")
    // const startTime = moment(route.params.timeSlot).format("hh:mm a")
    const [counsellorName, setCounsellorName] = React.useState<string | undefined>(route.params.counsellorName)
    const [timeSlot, setTimeSlot] = React.useState<string | undefined>(route.params.timeSlot)
    const [date, setDate] = React.useState<string | undefined>(route.params.date)
    const [description, setDescription] = React.useState<string>("");
    const [isLoading, setLoading] = React.useState(false);

    const confirm = async () => {
        setLoading(true);
        const firstname = await AsyncStorage.getItem('@user_fname');
        const lastname = await AsyncStorage.getItem('@user_lname');

        const url = "http://35.193.105.188:5002/api/v1/counselling-service/counsellor/appointments"

        const requestOption: RequestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `firstname=${firstname}&lastname=${lastname}&description=${description}&counselor=${counsellorName}&timeSlot=${timeSlot}&bookingDate=${date}&title=Appointment`
        }

        fetch(url,requestOption)
        .then(res=>res.json())
        .then(res=>{
            setLoading(false);
            alert(res);
            console.log(res.message);
            navigation.popToTop();
        })
        .catch(err=>{
            alert(err);
            console.log(err);
            navigation.popToTop();
        })

    }
    return (
        <Container>
            <StatusBar backgroundColor={Colors.LIGHTGRAY} />
            <Content>
                <Grid>
                    {/* <Row style={styles.regRow}>
                        <Text style={styles.regTitle}>Reference No : </Text>
                        <Text selectable style={styles.regText}>436bc23ac5</Text>
                    </Row> */}
                    <Row style={styles.regRow}>
                        <Text style={styles.regTitle}>Counsellor : </Text>
                        <Text style={styles.regText}>{counsellorName}</Text>
                    </Row>
                    <Row style={styles.regRow}>
                        <Text style={styles.regTitle}>Date : </Text>
                        <Text style={styles.regText}>{date}</Text>
                    </Row>
                    <Row style={styles.regRow}>
                        <Text style={styles.regTitle}>Starting Time : </Text>
                        <Text style={styles.regText}>{timeSlot}</Text>
                    </Row>
                    <Row style={styles.regRow}>
                        <Text style={styles.regTitle}>Duration : </Text>
                        <Text style={styles.regText}>1 hour</Text>
                    </Row>
                    <Row style={styles.regRow}>
                        <Text style={styles.regTitle}>Fee : </Text>
                        <Text style={styles.regText}>Rs.500</Text>
                    </Row>
                    <Row style={{ ...styles.noteRow, marginBottom: 5, backgroundColor:Colors.WHITE }}>
                        <Text style={{ ...styles.noteTitle, color: Colors.BLACK }}>Description : </Text>
                        <Textarea
                        rowSpan={4}
                        underline 
                        bordered 
                        onChangeText={txt=>setDescription(txt)}
                        />
                    </Row>
                    <Row style={styles.noteRow}>
                        <Text style={styles.noteTitle}>Notes : </Text>
                        <Text style={styles.noteText}>You cannot cancle Appointment after Confirm.</Text>
                    </Row>
                </Grid>

            </Content>
            <Footer style={{backgroundColor:Colors.WHITE, alignItems:'center'}}>
                <Button style={styles.btn} onPress={() => confirm()}>
                    <Text>Confirm</Text>
                </Button>
            </Footer>
        </Container>
    );
};

export default AddAppointment;

const styles = StyleSheet.create({
    regRow: {
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    noteRow: {
        flexDirection: 'column',
        marginHorizontal: 10,
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 20,
        backgroundColor: Colors.LIGHTGRAY,
        marginBottom:10
    },
    regTitle: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    regText: {
        fontSize: 17,
    },
    noteTitle: {
        color: Colors.RED,
        fontSize: 16,
        fontWeight: 'bold',
        paddingVertical: 5
    },
    noteText: {
        color: Colors.NAVYBLUE,
        fontSize: 17,
        paddingHorizontal: 10
    },
    btnRow: {
        marginTop: 30,
        justifyContent: 'center',
    },
    btn: {
        width: Layout.window.width * 0.8,
        borderRadius: 25,
        justifyContent: 'center',
        backgroundColor: Colors.INDIGO
    }
});
