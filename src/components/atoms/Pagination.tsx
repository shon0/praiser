import React from 'react';
import { StyleSheet } from 'react-native';
import { Pagination } from 'react-native-snap-carousel';
import { COLOR } from '../../constants/theme';

const styles = StyleSheet.create({
  pagination: {
    backgroundColor: 'transparent',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: COLOR.MAIN_DARK,
  },
});

type Props = {
  length: number;
  index: number;
};

const Component: React.FC<Props> = props => {
  const { length, index } = props;
  return (
    <Pagination
      dotsLength={length}
      activeDotIndex={index}
      containerStyle={styles.pagination}
      dotStyle={styles.dot}
      inactiveDotOpacity={0.7}
      inactiveDotScale={0.6}
    />
  );
};

export default Component;
