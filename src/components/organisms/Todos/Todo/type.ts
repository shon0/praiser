import { ToggleTodo } from '../DoneButton';
import { RemoveTodo } from '../DeleteButton';

export type GotoDetail = {
  (state: State, isEditable: boolean): void;
};

export type State = {
  id: string;
  title: string;
  detail?: string;
  isDone?: boolean;
};

export type EditableActions = {
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
  gotoDetail: GotoDetail;
};

export type EditableProps = {
  isEditable: true;
  state: State;
  actions: EditableActions;
};

export type ReadonlyActions = {
  gotoDetail: GotoDetail;
};

export type ReadonlyProps = {
  isEditable: false;
  state: State;
  actions: ReadonlyActions;
};
