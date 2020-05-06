import React from 'react';
import TodoDisplay from '../../../molecules/Todo';
import { ReadonlyProps } from './type';

const Component: React.FC<ReadonlyProps> = props => {
  const {
    isEditable,
    state,
    actions: { gotoDetail },
  } = props;
  const onPress = React.useCallback(() => {
    gotoDetail(state, isEditable);
  }, [state, isEditable, gotoDetail]);
  return (
    <TodoDisplay
      onPress={onPress}
      title={state.title}
      detail={state.detail}
      isDone={state.isDone}
    />
  );
};

export default Component;
