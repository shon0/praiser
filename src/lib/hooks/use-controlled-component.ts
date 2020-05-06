import React from 'react';

const useControlledComponent = <T>(initialValue: T) => {
  const [value, setValue] = React.useState(initialValue);
  function onChangeText(newValue: T) {
    setValue(newValue);
  }
  return {
    value,
    onChangeText,
  };
};

export default useControlledComponent;
