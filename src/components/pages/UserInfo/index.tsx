import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
      <Text>UserInfo</Text>
      <TouchableOpacity
        onPress={() => setApplicationState(Status.UN_AUTHORIZED)}
      >
        <Text>Sign out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Component;
