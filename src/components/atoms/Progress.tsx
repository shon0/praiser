import React from 'react';
import { StyleSheet } from 'react-native';
import { ProgressCircle } from 'react-native-svg-charts';
import { COLOR } from '../../constants/theme';

const styles = StyleSheet.create({
  progress: {
    height: 200,
    width: 200,
  },
});

type Props = {
  value: number;
};

const Component = (props: Props) => {
  const { value } = props;
  return (
    <ProgressCircle
      style={styles.progress}
      progress={value}
      progressColor={COLOR.PRIMARY}
    />
  );
};

export default Component;
