import { observer } from 'mobx-react';
import React from 'react';

import { TextInput } from '@design-system';

import { TextFormItem } from '../../../types/FormTypes';

interface Props extends TextFormItem {
  inputClassName?: string;
  containerClassName?: string;
}

const TextFormField = (props: Props): React.ReactElement => {
  const {
    label,
    placeholder,
    value,
    onChange,
    inputClassName,
    containerClassName,
    isMasked,
    errorMessage,
  } = props;

  return (
    <TextInput
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      inputClassName={inputClassName}
      containerClassName={containerClassName}
      type={isMasked ? 'password' : 'text'}
      errorMessage={errorMessage}
    />
  );
};

export default observer(TextFormField);
