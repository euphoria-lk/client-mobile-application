import * as React from 'react';
import { StyleSheet, StatusBar, Image, AsyncStorage, YellowBox } from 'react-native';
import { Container, Header, Content, Grid, Row, Body, Thumbnail, View, Col, Form, Item, Input, Label, Button, Text, Icon, Badge, Title, Left , DatePicker} from 'native-base';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RouteProp } from '@react-navigation/native';
import { TabThreeParamList, Counsellor } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { FloatingAction } from 'react-native-floating-action';
import LoadingScreen from './SplashScreen';

type ProfileScreenRouteProp = RouteProp<TabThreeParamList, 'CounselorProfile'>;

type ProfileScreenNavigationProp = StackNavigationProp<
    TabThreeParamList,
    'CounselorProfile'
>;
interface Props {
    route: ProfileScreenRouteProp
    navigation: ProfileScreenNavigationProp
}

const desscription = "I think it is much easier to just use a unicode character to get the job done. You can look through arrows by googling either Unicode Triangles or Unicode Arrows. Starting with iOS6 Apple changed the character to be an emoji character with a border. To disable the border I add the 0xFE0E Unicode Variation Selector."

const Profile = ({ route, navigation }: Props) => {
    const [counsellorData, setCounsellorData] = React.useState<Counsellor>();
    const [chatChannel, setChatChannel] = React.useState('');
    const [isLoading, setLoading] = React.useState(true);

    const [userId,setUserId] = React.useState<string|null>('')
    const [userName,setUserName] = React.useState<string|null>('')
    const [userImage,setUserImage] = React.useState<string|null>('')

    const LoadData = async () => {
        const name = route.params.userName;
        const tempUserId = await AsyncStorage.getItem('@user_token')
        console.log('UserToken :', tempUserId);
        setUserId(tempUserId)
        const tempUserImage = await AsyncStorage.getItem('@user_image')
        console.log('UserImage :', tempUserImage);
        setUserId(tempUserImage)
        const tempUserName = await AsyncStorage.getItem('@user_name')
        console.log('UserName :', tempUserName);
        setUserId(tempUserName)

        const url1 = `http://35.192.213.59:5001/api/v1/counsellor-service/counsellor/${name}`;
        const requestOption1: RequestInit = {
            method: 'GET'
        }
        const url2 = `http://35.193.105.188:5002/api/v1/counselling-service/chat/chatRoom`;

        fetch(url1, requestOption1)
            .then(res => res.json())
            .then(result => {
                setCounsellorData(result);
                const requestOption2: RequestInit = {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: `CounselorID=${result._id}&ClientID=${userId}`
                }
                fetch(url2, requestOption2)
                    .then(res => res.json())
                    .then(res => {
                        console.log('ChannelId ', res);
                        setChatChannel(res.id);
                        setLoading(false);
                    })
                    .catch(err => {
                        console.log(err);
                        setLoading(false);
                        navigation.pop();
                    })
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            })

    }

    React.useEffect(() => {
        YellowBox.ignoreWarnings(['Animated: `useNativeDriver`']);
        LoadData();
    }, [])

    const actions = [
        {
            text: "Make Appoinment",
            icon: <Icon name="md-document" style={{ color: Colors.WHITE }} />,
            name: "bt_appointment",
            position: 2,
            buttonSize: 50
        },
        {
            text: "Chat",
            icon: <Icon name="chat" type="MaterialCommunityIcons" style={{ color: Colors.WHITE }} />,
            name: "bt_chat",
            position: 1,
            buttonSize: 50
        },
    ]

    if (isLoading) {
        return (
            <LoadingScreen />
        );
    }

    return (
        <Container>
            <StatusBar backgroundColor={Colors.LIGHTGRAY} />
            <Content style={{ backgroundColor: Colors.LIGHTGRAY, paddingHorizontal: 10 }}>
                <Grid>
                    <Row style={{ height: Layout.window.height * .30, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <View>
                                <Image source={{ uri: counsellorData?.image }} style={styles.profileImage} />
                            </View>
                        </TouchableOpacity>
                    </Row>
                    <Row style={styles.nameROW}>
                        <View style={{alignItems: 'center', marginBottom:20}}>
                            <Text style={{ fontSize: 25, fontWeight: '300' }} >{counsellorData?.name}</Text>
                            <Text note style={{ fontSize: 20, fontWeight: '300', color:Colors.NAVYBLUE }} >{counsellorData?.email}</Text>
                        </View>
                    </Row>
                    <Row style={styles.descriptionRow}>
                        <Text style={styles.descriptionTitle}>About</Text>
                        <Text style={styles.descriptionTEXT}>{counsellorData?.description}</Text>
                    </Row>
                </Grid>
            </Content>
            <FloatingAction
                floatingIcon={<Icon name='emoticon-happy' type='MaterialCommunityIcons' style={{ color: Colors.WHITE }} />}
                // onPressMain={()=>navigation.push('AvailableTime',{userId:route.params.userId})}
                actions={actions}
                onPressItem={(name) => {
                    if (name === "bt_appointment") {
                        // navigation.push('AvailableTime', { counsellorEmail: counsellorData?.email, userId:userId?userId:"" });
                        navigation.push('PickDate',{counsellorEmail:counsellorData?.email, userId:userId?userId:"", counsellorName:counsellorData?.name?counsellorData?.name:""})
                    } else {
                        navigation.push('ChatScreen', { userId: userId, channelId:chatChannel, userName: userName, iamge:userImage, counsellorName:counsellorData?.name});
                    }
                }}
            />
        </Container>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingHorizontal: 10
    },

    profileImage: {
        height: 150,
        width: 150,
        borderRadius: 100,
    },

    nameROW: {
        backgroundColor: Colors.TRANSPARENT,
        height: 40,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    descriptionRow: {
        flexGrow: 1,
        padding: 10,
        backgroundColor: Colors.WHITE,
        borderRadius: 10,
        flexDirection: 'column'
    },
    textRow: {
        width: Layout.window.width * 0.7,
        backgroundColor: 'white',
        padding: 6,
        borderRadius: 20,
        marginLeft: 15,
        paddingLeft: 20
    },
    descriptionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 10
    },
    descriptionTEXT: {
        fontSize: 16
    }
});