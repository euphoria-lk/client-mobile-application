import * as React from 'react';
import { Text, View, StyleSheet, StatusBar } from 'react-native';
import { Container, Content, Spinner , Header, Grid, Row} from "native-base";
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';

interface LoadingScreenProps {}

const LoadingScreen = (props: LoadingScreenProps) => {
  return (
    <Container style={styles.container}>
        <StatusBar backgroundColor={Colors.LIGHTGRAY}/>
        <Content style={{flexGrow:1, backgroundColor:Colors.WHITE, }}>
            <Grid>
                <Row style={{height:Layout.window.height * 0.33}}/>
                <Row style={{height:Layout.window.height * 0.33, justifyContent:'center', alignItems:'center'}}>
                    <Spinner size='large' color={Colors.NAVYBLUE}/>
                </Row>
                <Row style={{height:Layout.window.height * 0.33}}/>
            </Grid>
        </Content>
    </Container>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
      flex:1,
  }
});
