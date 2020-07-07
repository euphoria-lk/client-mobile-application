import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import { AuthContext } from '../navigation/cntext';

interface AppointmentsProps { }

const Appointments = (props: AppointmentsProps) => {
  const { signOut } = React.useContext(AuthContext)
  return (
    <View style={styles.container}>
      <Text>Appointments</Text>
      <View>
        <Button onPress={() => signOut()} >
          <Text>Sign Out</Text>
        </Button>
      </View>
    </View>
  );
};

export default Appointments;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
