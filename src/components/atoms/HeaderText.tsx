import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { COLOR } from '../../constants/theme';

const styles = StyleSheet.create({
  headerText: {
    color: COLOR.WHITE,
    fontSize: 24,
  },
});

type Props = {
  text: string;
};

const Component = (props: Props) => {
  const { text } = props;
  return <Text style={styles.headerText}>{text}</Text>;
};

export default Component;
