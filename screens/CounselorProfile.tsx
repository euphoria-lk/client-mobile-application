import * as React from 'react';
import { StyleSheet, StatusBar, Image } from 'react-native';
import { Container, Header, Content, Grid, Row, Body, Thumbnail, View, Col, Form, Item, Input, Label, Button, Text, Icon, Badge, Title, Left } from 'native-base';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { RouteProp } from '@react-navigation/native';
import { TabTwoParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';
import { FloatingAction } from 'react-native-floating-action';

type ProfileScreenRouteProp = RouteProp<TabTwoParamList, 'CounselorProfile'>;

type ProfileScreenNavigationProp = StackNavigationProp<
    TabTwoParamList,
    'CounselorProfile'
>;
interface Props {
    route: ProfileScreenRouteProp
    navigation: ProfileScreenNavigationProp
}

const action = [
    {
        text: 'Add apointment',
        icon: <Icon name='md-calendar' style={{color:Colors.WHITE}}/>,
        name: 'btn_appointment',
        position: 1,
        buttonSize:56
    }
]

const desscription = "I think it is much easier to just use a unicode character to get the job done. You can look through arrows by googling either Unicode Triangles or Unicode Arrows. Starting with iOS6 Apple changed the character to be an emoji character with a border. To disable the border I add the 0xFE0E Unicode Variation Selector."

const Profile = ({ route, navigation }: Props) => {
    {
        console.log(route.params.userId) //'#bfc3c9'
    }
    return (
        <Container>
            <StatusBar backgroundColor={Colors.LIGHTGRAY} />
            <Content style={{ backgroundColor: Colors.LIGHTGRAY, paddingHorizontal:10}}>
                <Grid>
                    <Row style={{ height: Layout.window.height * .30, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <View>
                                <Image source={{ uri: "https://randomuser.me/api/portraits/men/94.jpg" }} style={styles.profileImage} />
                            </View>
                        </TouchableOpacity>
                    </Row>
                    <Row style={styles.nameROW}>
                        <Text style={{ fontSize: 25, fontWeight: '300' }} >Fredrick Walton</Text>
                    </Row>
                    <Row style={styles.descriptionRow}>
                        <Text style={styles.descriptionTitle}>About</Text>
                        <Text style={styles.descriptionTEXT}>{desscription}</Text>
                    </Row>
                </Grid>

            </Content>
            <FloatingAction
                actions={action}
                onPressItem={(name)=>{
                    if (name==='btn_appointment') {
                        navigation.push('AvailableTime',{userId:route.params.userId})
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
        paddingHorizontal:10
    },

    profileImage: {
        height: 150,
        width: 150,
        borderRadius: 100,
    },

    nameROW: {
        backgroundColor: Colors.TRANSPARENT,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    descriptionRow:{
        flexGrow:1,
        padding:10,
        backgroundColor:Colors.WHITE,
        borderRadius:10,
        flexDirection:'column'
    },
    textRow: {
        width: Layout.window.width * 0.7,
        backgroundColor: 'white',
        padding: 6,
        borderRadius: 20,
        marginLeft: 15,
        paddingLeft: 20
    },
    descriptionTitle:{
        fontSize:20,
        fontWeight:'bold',
        paddingVertical:10
    },
    descriptionTEXT:{
        fontSize:16
    }
});