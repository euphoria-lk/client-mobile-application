import * as React from 'react';
import { StyleSheet, StatusBar, ImageBackground, YellowBox } from 'react-native';
import { Container, Header, Content, Grid, Row, View, Form, Item, Input, Label, Button, Text, Icon } from 'native-base';
import Logo from '../components/Logo';
import Colors from '../constants/Colors';
import { AuthContext } from '../navigation/cntext';
import LoadingScreen from './SplashScreen';
interface LoginProps { }

const Login = (props: LoginProps) => {
    const { signIn } = React.useContext(AuthContext);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isLoading, setLoading] = React.useState(false);

    React.useEffect(()=>{
        YellowBox.ignoreWarnings(['Animated: `useNativeDriver`']);
    })

    const localSignIn = async () =>{
        setLoading(true);
        const res:any = await signIn(email,password);
        setLoading(res?true:false);
    }
    if(isLoading){
        return(
            <LoadingScreen/>
        )
    }
    return (
        <Container style={{ backgroundColor: '#fff' }}>
            <StatusBar backgroundColor={Colors.LIGHTGRAY} />
            <ImageBackground source={require('../assets/images/loginBackground.png')} style={styles.image}>
                <Content>
                    <Grid>
                        <Row style={{ height: 250, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ height: 200, width: 200, marginTop: 50 }}>
                                <Logo />
                            </View>
                        </Row>
                        <Row style={{ height: 300, justifyContent: 'center' }}>
                            <Form style={{ width: 300, justifyContent: 'center', alignItems: 'center' }}>
                                {/* floatingLabel */}
                                <Item floatingLabel  bordered>
                                    <Icon name='person' style={{ color: Colors.GRAY }} />
                                    <Label style={{ color: Colors.BLACK }}>Email</Label>
                                    <Input 
                                        onChangeText={txt=>setEmail(txt)}
                                        value={email}
                                    />
                                </Item>
                                {/* floatingLabel */}
                                <Item floatingLabel >
                                    <Icon name='lock' style={{ color: Colors.GRAY }} />
                                    <Label style={{ color: Colors.BLACK }}>Password</Label>
                                    <Input 
                                         onChangeText={txt=>setPassword(txt)}
                                         value={password}
                                         secureTextEntry
                                    />
                                </Item>
                                <Button rounded onPress={() => localSignIn()} style={{ width: 200, justifyContent: 'center', alignItems: 'center', marginTop: 100 }}>
                                    <Text>Sign in</Text>
                                </Button>
                            </Form>
                        </Row>
                    </Grid>
                </Content>
            </ImageBackground>
        </Container >
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },

    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    }
});
