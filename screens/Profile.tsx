import * as React from 'react';
import { StyleSheet, StatusBar, Image } from 'react-native';
import { Container, Header, Content, Grid, Row, Thumbnail, View, Col, Form, Item, Input, Label, Button, Text, Icon, Badge } from 'native-base';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
import { TouchableOpacity } from 'react-native-gesture-handler';
interface ProfileProps { }

const Profile = (props: ProfileProps) => {
    return (
        <Container>
            <StatusBar backgroundColor={Colors.LIGHTGRAY} />
            <Content>
                <Grid>
                    <Row style={{ backgroundColor: '#e8effa', height: Layout.window.height * .4, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <View>
                                <Image source={{ uri: "https://picsum.photos/180/200" }} style={styles.profileImage} />
                            </View>
                        </TouchableOpacity>

                        <View style={styles.add}>
                            <Icon name='add' style={{ backgroundColor: 'white', borderRadius: 20, width: 30, alignItems: 'center', paddingLeft: 5 }} />
                        </View>
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
                    <Row style={{ backgroundColor: '#bfc3c9', height: 300 }}>
                    </Row>


                </Grid>
            </Content>
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
        backgroundColor: '#bfc3c9',
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
        bottom: 50,
        right: 120,
        borderColor: 'red',
        alignItems: "center",
    }
});