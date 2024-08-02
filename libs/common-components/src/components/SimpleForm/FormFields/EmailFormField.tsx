import React, { useState } from 'react';
import { observer } from 'mobx-react';

import { TextInput } from '@design-system';

import { EmailFormItem } from '../../../types/FormTypes';
import { validateEmail } from '../../../utils/validationUtils';

interface Props extends EmailFormItem {
  inputClassName?: string;
  containerClassName?: string;
}

const EmailFormField = (props: Props): React.ReactElement => {
  const {
    label,
    placeholder,
    value,
    onChange,
    inputClassName,
    containerClassName,
  } = props;

  const [errorMessage, setErrorMessage] = useState<string | undefined>();

  const onBlur = () => {
    props.onBlur?.();

    if (!value) return setErrorMessage(undefined);

    const validationResponse = validateEmail(value);
    if (!validationResponse.isValid)
      setErrorMessage(validationResponse.errorMessage ?? '');
    else setErrorMessage(undefined);
  };

  return (
    <TextInput
      label={label}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      inputClassName={inputClassName}
      containerClassName={containerClassName}
      type={'email'}
      errorMessage={props.errorMessage ?? errorMessage}
    />
  );
};

export default observer(EmailFormField);
