import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Context, Status } from '../../../contexts/ui';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Component = () => {
  const { setApplicationState } = React.useContext(Context);
  return (
    <View style={styles.container}>
      <Text>SignIn</Text>
      <TouchableOpacity onPress={() => setApplicationState(Status.AUTHORIZED)}>
        <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Component;
