import * as React from 'react';
import { StyleSheet, StatusBar, Image } from 'react-native';
import { Container, Header, Content, Grid, Row, View, Text, Icon, Button } from 'native-base';
import { Avatar } from 'react-native-elements';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import { Ionicons } from '@expo/vector-icons';
import { FloatingAction } from 'react-native-floating-action';
import { RouteProp } from '@react-navigation/native';
import { Client, TabOneParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import AsyncStorage from '@react-native-community/async-storage';
import { AuthContext } from '../navigation/cntext';

type ProfileScreenRouteProp = RouteProp<TabOneParamList, 'Profile'>;

type ProfileScreenNavigationProp = StackNavigationProp<
    TabOneParamList,
    'Profile'
>;
interface Props {
    route: ProfileScreenRouteProp
    navigation: ProfileScreenNavigationProp
}

const Profile = ({ route, navigation }: Props) => {
    const [userData, setUserData] = React.useState<Client>();
    const { signOut } = React.useContext(AuthContext);
    const loadData = async () => {
        const firstname = await AsyncStorage.getItem('@user_fname');
        const lastname = await AsyncStorage.getItem('@user_lname');

        const url = `http://34.121.143.209:5000/api/v1/client-service/user/`;
        const requestOption: RequestInit = {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: `firstname=${firstname}&lastname=${lastname}`
        }

        fetch(url, requestOption)
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setUserData(res);
            })
            .catch(err => {
                console.log(err);
                // setLoading(false);
                navigation.popToTop();
            })
    }

    React.useEffect(() => {
        loadData();
    }, [])

    return (
        <Container>
            <StatusBar backgroundColor={Colors.LIGHTGRAY} />
            <Content style={{ backgroundColor: Colors.LIGHTGRAY }}>
                <Grid style={{ paddingBottom: 20 }}>
                    <Row style={{ backgroundColor: '#e8effa', height: Layout.window.height * .31, justifyContent: 'center', alignItems: 'center' }}>
                        <Avatar
                            rounded
                            // source={{ uri: userData?.image ? userData.image : " " }}
                            title={userData?.firstname.charAt(0).toUpperCase()}
                            containerStyle={{ backgroundColor: Colors.GRAY }}
                            size='xlarge'
                        // accessory={{
                        //     name: 'camera',
                        //     type: 'material-community',
                        //     containerStyle: { backgroundColor: Colors.GRAY },
                        //     iconStyle: { margin: 5, borderRadius: 40 },
                        //     size: 30,
                        //     style: { height: 40, width: 40, borderRadius: 20, backgroundColor: Colors.TRANSPARENT, justifyContent: 'center' }
                        // }}

                        // showAccessory={true}
                        />
                    </Row>
                    <Row style={styles.rowBackground}>
                        <Icon name='person' />
                        <Text style={styles.textRow}>{userData?.firstname + " " + userData?.lastname}</Text>
                    </Row>
                    <Row style={styles.rowBackground}>
                        <Icon name='mail' />
                        <Text style={styles.textRow}>{userData?.email}</Text>
                    </Row>
                    <Row style={styles.rowBackground}>
                        <Icon name='call' />
                        <Text style={styles.textRow}>{userData?.contact}</Text>
                    </Row>
                    <Row style={styles.rowBackground}>
                        <Icon name='paper' />
                        <Text style={styles.textRow}>{userData?.nic}</Text>
                    </Row>
                    <Row style={styles.rowBackground}>
                        <Icon name='place' type="MaterialIcons" />
                        <Text style={styles.textRow}>{userData?.ditrict}</Text>
                    </Row>
                    <Row style={styles.rowBackground}>
                        <Button
                            bordered
                            style={{ marginTop: 10, borderColor: Colors.RED, borderRadius: 20, width: 150, justifyContent: "center", backgroundColor: Colors.WHITE }}
                            onPress={() => signOut()}
                        >
                            <Text style={{ color: Colors.RED }}>Log Out</Text>
                        </Button>
                    </Row>
                </Grid>
            </Content>
            {/* <FloatingAction
                floatingIcon={<Icon name='md-create' style={{ color: Colors.WHITE }} />}
                onPressMain={() => navigation.push('EditProfile', { userId: '1234' })}
                overlayColor={Colors.TRANSPARENT}
            /> */}
        </Container>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },

    profileImage: {
        height: 175,
        width: 175,
        borderRadius: 100,
    },

    rowBackground: {
        backgroundColor: Colors.TRANSPARENT,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    },

    textRow: {
        width: Layout.window.width * 0.7,
        backgroundColor: 'white',
        padding: 6,
        borderRadius: 20,
        marginLeft: 15,
        paddingLeft: 20
    },

    add: {
        position: "absolute",
        bottom: 20,
        right: 110,
        borderColor: 'red',
        alignItems: "center",
    }
});