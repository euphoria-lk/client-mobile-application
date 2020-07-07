import * as React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { Container, Content, Grid, Row, Form, Item, Input, Label, Button, Text, Icon, Picker } from 'native-base';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';
interface EditProfileProps { }

const EditProfile = (props: EditProfileProps) => {
    return (
        <Container style={{ backgroundColor: '#fff' }}>
            <StatusBar backgroundColor={Colors.LIGHTGRAY} />
            <Content style={{ backgroundColor: Colors.LIGHTGRAY }}>
                <Grid>
                    <Row style={{ width: Layout.window.width * 1, justifyContent: 'center', paddingLeft: 5 }}>
                        <Form style={{ width: Layout.window.width * 0.9, alignItems: 'center', paddingTop: 40 }}>

                            <Item rounded bordered style={styles.borderStyle}>
                                <Icon name='person' style={{ color: Colors.GRAY }} />
                                <Label style={{ color: Colors.BLACK }}>First name</Label>
                                <Input placeholder={"Fredrick"} />
                            </Item>

                            <Item rounded style={styles.borderStyle}>
                                <Icon name='person' style={{ color: Colors.GRAY }} />
                                <Label style={{ color: Colors.BLACK }}>Last name</Label>
                                <Input placeholder={"Walton"} />
                            </Item>

                            <Item picker rounded style={styles.borderStyle}>
                                <Icon name='shuffle' style={{ color: Colors.GRAY }} />
                                <Picker
                                    mode="dropdown"
                                    iosIcon={<Icon name="arrow-down" />}
                                    style={{ width: undefined }}
                                    placeholder="Select your Title"
                                    placeholderStyle={{ color: "#bfc6ea" }}
                                    placeholderIconColor="#007aff"

                                >
                                    <Picker.Item label="Mr" value="key0" />
                                    <Picker.Item label="Mrs" value="key1" />
                                    <Picker.Item label="Miss" value="key2" />
                                </Picker>
                            </Item>

                            <Item rounded style={styles.borderStyle}>
                                <Icon name='mail' style={{ color: Colors.GRAY }} />
                                <Label style={{ color: Colors.BLACK }}>Email</Label>
                                <Input placeholder={"g.enerato.r@gmail.com"} />
                            </Item>

                            <Item rounded style={styles.borderStyle}>
                                <Icon name='call' style={{ color: Colors.GRAY }} />
                                <Label style={{ color: Colors.BLACK }}>Contact Number</Label>
                                <Input placeholder={"+947123456789"} />
                            </Item>

                            <Item rounded style={styles.borderStyle}>
                                <Icon name='paper' style={{ color: Colors.GRAY }} />
                                <Label style={{ color: Colors.BLACK }}>NIC/Passport</Label>
                                <Input placeholder={"931212121v"} />
                            </Item>

                            <Button style={{ width: 150, justifyContent: 'center', alignItems: 'center', marginTop: 20, borderRadius: 50 }}>
                                <Text>Confirm</Text>
                            </Button>
                        </Form>
                    </Row>
                </Grid>
            </Content>
        </Container >
    );
};

export default EditProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },

    heading: {
        fontWeight: "bold",
        fontSize: 18,
        marginTop: 18,
        marginLeft: 10
    },
    borderStyle: {
        borderColor: "black",
        margin: 5
    }
});
