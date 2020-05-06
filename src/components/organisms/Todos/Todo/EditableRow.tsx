import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SwipeRow } from 'react-native-swipe-list-view';
import { COLOR } from '../../../../constants/theme';
import DoneButton from '../DoneButton';
import DeleteButton from '../DeleteButton';
import TodoDisplay from '../../../molecules/Todo';
export { DoneButton, DeleteButton };
import { EditableProps } from './type';

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: COLOR.MAIN,
    height: 120,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

const Component: React.FC<EditableProps> = props => {
  const {
    state,
    isEditable,
    actions: { gotoDetail, toggleTodo, removeTodo },
  } = props;

  const rowRef = React.useRef<SwipeRow<View>>(null);

  const closeRow = React.useCallback(() => {
    rowRef?.current?.closeRow();
  }, [rowRef]);

  const toggleActions = React.useMemo(() => {
    return {
      toggleTodo,
      closeRow,
    };
  }, [closeRow, toggleTodo]);

  const removeActions = React.useMemo(() => {
    return {
      removeTodo,
      closeRow,
    };
  }, [closeRow, removeTodo]);

  const onPress = React.useCallback(() => {
    gotoDetail(state, isEditable);
  }, [state, isEditable, gotoDetail]);

  return (
    <SwipeRow
      disableLeftSwipe={!isEditable}
      disableRightSwipe={!isEditable}
      rightOpenValue={-80}
      leftOpenValue={80}
      ref={rowRef}
    >
      <View style={styles.contentContainer}>
        <DoneButton state={state} actions={toggleActions} />
        <DeleteButton state={state} actions={removeActions} />
      </View>
      <TodoDisplay
        onPress={onPress}
        title={state.title}
        detail={state.detail}
        isDone={state.isDone}
      />
    </SwipeRow>
  );
};

export default Component;
