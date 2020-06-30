import * as React from 'react';
import {StyleSheet, StatusBar } from 'react-native';
import {Container , Header , Content, Grid, Row, View, Form, Item, Input, Label, Button, Text, Icon} from 'native-base';
import Logo from '../components/Logo';
import Colors from '../constants/Colors';

interface LoginProps {}
const signIn=()=>{
    console.log('signIN')
}
const Login = (props: LoginProps) => {
  return (
    <Container>
        <StatusBar backgroundColor={Colors.LIGHTGRAY}/>
        <Content>
            <Grid>
                <Row style={{backgroundColor:'#fff', height:250, justifyContent:'center', alignItems:'center'}}>
                    <View style={{height:200, width:200, marginTop:50}}>
                        <Logo/>
                    </View>
                </Row>
                <Row style={{backgroundColor:'#fff', height:300, justifyContent:'center'}}>
                    <Form style = {{width:300,justifyContent:'center', alignItems:'center'}}>
                        <Item floatingLabel bordered>
                            <Icon name='person' style={{color:Colors.GRAY}}/>
                            <Label style={{color:Colors.BLACK}}>Username</Label>
                            <Input/>
                        </Item>
                        <Item floatingLabel>
                            <Icon name='lock' style={{color:Colors.GRAY}}/>
                            <Label style={{color:Colors.BLACK}}>Password</Label>
                            <Input/>
                        </Item>
                        <Button rounded onPress={()=>signIn()} style={{width:200, justifyContent:'center', alignItems:'center', marginTop:100}}>
                            <Text>Sign in</Text>
                        </Button>
                    </Form>
                </Row>
            </Grid>
        </Content>
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      flexDirection:'column'
  }
});
