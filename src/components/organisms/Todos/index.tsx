import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Todo, { Type as TodoType } from './Todo';
import { COLOR } from '../../../constants/theme';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
  },
  separator: {
    height: 1,
    backgroundColor: COLOR.SECONDARY,
  },
});

export type State = Array<TodoType.State>;

type EditableProps = {
  isEditable: true;
  todos: State;
  actions: TodoType.EditableActions;
};

type ReadonlyProps = {
  isEditable: false;
  todos: State;
  header: React.ReactElement;
  actions: TodoType.ReadonlyActions;
};

type Props = EditableProps | ReadonlyProps;

const Component = (props: Props) => {
  if (props.isEditable) {
    return (
      <FlatList
        style={styles.container}
        data={props.todos}
        renderItem={({ item }) => (
          <Todo
            isEditable={props.isEditable}
            state={item}
            actions={props.actions}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={item => item.id}
      />
    );
  }

  return (
    <FlatList
      style={styles.container}
      data={props.todos}
      renderItem={({ item }) => (
        <Todo
          isEditable={props.isEditable}
          state={item}
          actions={props.actions}
        />
      )}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      keyExtractor={item => item.id}
      ListHeaderComponent={props.header}
    />
  );
};

export default Component;
export { TodoType };
