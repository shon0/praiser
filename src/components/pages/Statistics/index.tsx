import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Todos, { TodoType, State as TodosState } from '../../organisms/Todos';
import ProgressPanel, { Statistic } from '../../molecules/ProgressPanel';
import { DETAIL } from '../../../constants/path';
import HeaderText from '../../atoms/HeaderText';

const styles = StyleSheet.create({
  headerTextContainer: {
    paddingLeft: 20,
    marginTop: 20,
    marginBottom: 8,
  },
});

const props = {
  statistics: {
    numofCompleted: 10,
    numofAll: 25,
    numofUncompleted: 15,
    completedRatio: 0.4,
    uncompletedRatio: 0.6,
  },
  histories: [
    {
      id: '1',
      title: 'Todo1',
      detail: 'Done',
      isDone: true,
    },
    {
      id: '2',
      title: 'Todo2',
      detail: 'Done',
      isDone: true,
    },
  ],
};

type Props = {
  statistics: Statistic;
  histories: TodosState;
};

const Header: React.FC<Props> = props => {
  return (
    <View>
      <ProgressPanel {...props.statistics} />{' '}
      <View style={styles.headerTextContainer}>
        <HeaderText text="History" />{' '}
      </View>
    </View>
  );
};

const Component = () => {
  const { navigate } = useNavigation();
  const gotoDetail = React.useCallback(
    (state: TodoType.State, isEditable: boolean) => {
      console.log({
        isEditable,
      });
      navigate(DETAIL, { ...state, isEditable });
    },
    [navigate],
  );
  const actions = React.useMemo(() => ({ gotoDetail }), [gotoDetail]);

  return (
    <Todos
      isEditable={false}
      todos={props.histories}
      actions={actions}
      header={<Header {...props} />}
    />
  );
};

export default Component;
