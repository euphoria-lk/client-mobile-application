import * as React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TabFourParamList, TabThreeParamList, Appointment, Counsellor } from '../types';
import { Container, Content, Grid, Row, Text, Button, View } from 'native-base';
import Colors from '../constants/Colors';
import moment from 'moment';
import Layout from '../constants/Layout';
import LoadingScreen from './SplashScreen';
import { Avatar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

type AppointmentViewRouteProp = RouteProp<TabFourParamList, 'AppointmentView'>;

type AppointmentViewNavigationProp = StackNavigationProp<
    TabFourParamList,
    'AppointmentView'
>;
interface Props {
    route: AppointmentViewRouteProp
    navigation: AppointmentViewNavigationProp
}

const AppointmentView = ({ route, navigation }: Props) => {
    const [appointmentId,setAppointmentId] = React.useState(route.params.appointmentId);
    const [appointment,setAppointment] = React.useState<Appointment>();
    const [counsellor,setCounsellor] = React.useState<Counsellor>()
    const [isLoading,setLoading] = React.useState(true);

    const loadAppointment = () =>{
        const url = `http://35.193.105.188:5002/api/v1/counselling-service/appointments/${appointmentId}`;

        fetch(url,{method:'GET'})
        .then(res=>res.json())
        .then((res : Appointment)=>{
            console.log(res);
            setAppointment(res);
            const url2 = `http://35.192.213.59:5001/api/v1/counsellor-service/counsellor/counselor/${res.counselor}`

            fetch(url2,{method:'GET'})
            .then(resp=>resp.json())
            .then((resp : Counsellor)=>{
                console.log(resp);
                setCounsellor(resp);
                setLoading(false);
            })
            .catch(err=>{
                alert(err);
                setLoading(false);
                navigation.popToTop();
            })
            // setLoading(false);
        })
        .catch(err=>{
            alert(err);
            setLoading(false);
            navigation.popToTop();
        })
    }

    React.useEffect(()=>{
        loadAppointment();
    },[])

    if(isLoading){
        <LoadingScreen/>
    }

    return (
        <Container>
            <StatusBar backgroundColor={Colors.LIGHTGRAY} />
            <Content>
                <Grid>
                    <Row style={styles.regRow}>
                        <Text style={styles.regTitle}>Counsellor : </Text>
                        <TouchableOpacity
                        onPress={() => navigation.push('CounselorProfile', { userName: counsellor?.name?counsellor.name:"" })}
                         style={{flexDirection:'row', alignItems:'center', marginLeft:10}}>
                            <Avatar containerStyle={{marginRight:10}} rounded size={40} source = {{uri:counsellor?.image}}/>
                            <Text style={{...styles.regText, fontSize:20}}>{counsellor?.name}</Text>
                        </TouchableOpacity>
                    </Row>
                    <Row style={styles.regRow}>
                        <Text style={styles.regTitle}>Date : </Text>
                        <Text style={styles.regText}>{appointment?.bookingDate}</Text>
                    </Row>
                    <Row style={styles.regRow}>
                        <Text style={styles.regTitle}>Starting Time : </Text>
                        <Text style={styles.regText}>{appointment?.timeSlot}</Text>
                    </Row>
                    <Row style={styles.regRow}>
                        <Text style={styles.regTitle}>Duration : </Text>
                        <Text style={styles.regText}>1 hour</Text>
                    </Row>
                    {/* <Row style={styles.regRow}>
                        <Text style={styles.regTitle}>Fee : </Text>
                        <Text style={styles.regText}>Rs.500</Text>
                    </Row> */}
                    <Row style={styles.noteRow}>
                        <Text style={styles.noteTitle}>Notes : </Text>
                        <Text style={styles.noteText}>Please Connect with Counsellor via the chat in the session.</Text>
                    </Row>
                    {/* <Row style={styles.btnRow}>
                        <Button style={styles.btn} onPress={() => navigation.popToTop()}>
                            <Text>Confirm</Text>
                        </Button>
                    </Row> */}
                </Grid>
            </Content>
        </Container>
    );
};

export default AppointmentView;

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
        backgroundColor: Colors.LIGHTGRAY
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
        marginTop: 40,
        justifyContent: 'center',
    },
    btn: {
        width: Layout.window.width * 0.8,
        borderRadius: 25,
        justifyContent: 'center',
        backgroundColor: Colors.INDIGO
    }
});
