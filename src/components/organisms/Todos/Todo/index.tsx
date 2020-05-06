import React from 'react';
import * as Type from './type';
import ReadonlyRow from './ReadonlyRow';
import EditableRow from './EditableRow';

type Props = Type.EditableProps | Type.ReadonlyProps;

const Component = (props: Props) => {
  if (props.isEditable) {
    return <EditableRow {...props} />;
  }
  return <ReadonlyRow {...props} />;
};

export default Component;
export { Type };
