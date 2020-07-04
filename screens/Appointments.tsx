import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface AppointmentsProps {}

const Appointments = (props: AppointmentsProps) => {
  return (
    <View style={styles.container}>
      <Text>Appointments</Text>
    </View>
  );
};

export default Appointments;

const styles = StyleSheet.create({
  container: {
      flex:1,
      justifyContent:'center',
      alignItems:'center'
  }
});
