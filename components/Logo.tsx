import * as React from 'react';
import { Text, View, StyleSheet,Image} from 'react-native';

interface LogoProps {}

const Logo = (props: LogoProps) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/euphoriaLogo.png')} style={styles.image}/>
    </View>
  );
};
export default Logo;

const styles = StyleSheet.create({
  container: {
      flex:1,
      justifyContent:'center',
      alignItems:'center'
  },
  image:{
      flex:1,
      resizeMode:'contain'
  }
});
