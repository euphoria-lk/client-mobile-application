import * as React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TabThreeParamList } from '../types';
import { Container, Content, Grid, Row, Text, Button } from 'native-base';
import Colors from '../constants/Colors';
import moment from 'moment';
import Layout from '../constants/Layout';

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
    const date = moment(route.params.timeSlot).format("dddd, MMMM Do YYYY")
    const startTime = moment(route.params.timeSlot).format("hh:mm a")
    return (
        <Container>
            <StatusBar backgroundColor={Colors.LIGHTGRAY} />
            <Content>
                <Grid>
                    <Row style={styles.regRow}>
                        <Text style={styles.regTitle}>Reference No : </Text>
                        <Text selectable style={styles.regText}>436bc23ac5</Text>
                    </Row>
                    <Row style={styles.regRow}>
                        <Text style={styles.regTitle}>Counsellor : </Text>
                        <Text style={styles.regText}>John Smith</Text>
                    </Row>
                    <Row style={styles.regRow}>
                        <Text style={styles.regTitle}>Date : </Text>
                        <Text style={styles.regText}>{date}</Text>
                    </Row>
                    <Row style={styles.regRow}>
                        <Text style={styles.regTitle}>Starting Time : </Text>
                        <Text style={styles.regText}>{startTime}</Text>
                    </Row>
                    <Row style={styles.regRow}>
                        <Text style={styles.regTitle}>Duration : </Text>
                        <Text style={styles.regText}>1 hour</Text>
                    </Row>
                    <Row style={styles.regRow}>
                        <Text style={styles.regTitle}>Fee : </Text>
                        <Text style={styles.regText}>Rs.500</Text>
                    </Row>
                    <Row style={styles.noteRow}>
                        <Text style={styles.noteTitle}>Notes : </Text>
                        <Text style={styles.noteText}>You can cancle Appointment within 1 hour after you make appointment. After 1 hour you cannot do anything to this appointment.</Text>
                    </Row>
                    <Row style={styles.btnRow}>
                        <Button style={styles.btn} onPress={() => navigation.popToTop()}>
                            <Text>Confirm</Text>
                        </Button>
                    </Row>
                </Grid>
            </Content>
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
