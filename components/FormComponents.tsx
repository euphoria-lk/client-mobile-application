import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface TextFieldProps {
    
}

const TextField = (props: TextFieldProps) => {
  return (
    <View style={styles.container}>
      <Text>TextField</Text>
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  container: {}
});
