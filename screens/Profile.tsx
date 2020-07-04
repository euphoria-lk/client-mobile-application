import * as React from 'react';
import { StyleSheet, StatusBar, Image } from 'react-native';
import { Container, Header, Content, Grid, Row, View, Text,Icon} from 'native-base';
import {Avatar} from 'react-native-elements';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import {Ionicons} from '@expo/vector-icons';
import { FloatingAction } from 'react-native-floating-action';
import { RouteProp } from '@react-navigation/native';
import { TabOneParamList } from '../types';
import { StackNavigationProp } from '@react-navigation/stack';

type ProfileScreenRouteProp = RouteProp<TabOneParamList, 'Profile'>;

type ProfileScreenNavigationProp = StackNavigationProp<
    TabOneParamList,
    'Profile'
>;
interface Props {
    route: ProfileScreenRouteProp
    navigation: ProfileScreenNavigationProp
}

const Profile = ({route, navigation}: Props) => {
    return (
        <Container>
            <StatusBar backgroundColor={Colors.LIGHTGRAY} />
            <Content style={{backgroundColor:Colors.LIGHTGRAY}}>
                <Grid>
                    <Row style={{ backgroundColor: '#e8effa', height: Layout.window.height * .31, justifyContent: 'center', alignItems: 'center' }}>
                        <Avatar
                           rounded
                           source={{uri: "https://randomuser.me/api/portraits/men/94.jpg"}}
                           size='xlarge'
                           accessory={{
                               name:'camera', 
                               type:'material-community', 
                               containerStyle:{backgroundColor:Colors.GRAY},
                               iconStyle:{margin:5, borderRadius:40},
                               size:30,
                               style:{height:40, width:40, borderRadius:20, backgroundColor:Colors.TRANSPARENT, justifyContent:'center'}
                            }}
                           
                           showAccessory={true}
                        />
                    </Row>
                    <Row style={styles.rowBackground}>
                        <Icon name='person' />
                        <Text style={styles.textRow}>Fredrick Walton</Text>
                    </Row>
                    <Row style={styles.rowBackground}>
                        <Icon name='mail' />
                        <Text style={styles.textRow}>g.enerato.r@gmail.com</Text>
                    </Row>
                    <Row style={styles.rowBackground}>
                        <Icon name='call' />
                        <Text style={styles.textRow}>+947123456789</Text>
                    </Row>
                    <Row style={styles.rowBackground}>
                        <Icon name='paper' />
                        <Text style={styles.textRow}>931212121v</Text>
                    </Row>
                </Grid>
            </Content>
            <FloatingAction
               floatingIcon={<Icon name='md-create' style={{color:Colors.WHITE}}/>}
               onPressMain={()=>navigation.push('EditProfile',{userId:'1234'})}       
               overlayColor={Colors.TRANSPARENT}  
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
        flexDirection: 'column'
    },

    profileImage: {
        height: 175,
        width: 175,
        borderRadius: 100,
    },

    rowBackground: {
        backgroundColor: Colors.TRANSPARENT,
        height: 60,
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