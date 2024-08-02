import cn from 'classnames';
import { observer } from 'mobx-react';
import React, { useId } from 'react';

import { Size } from '../../types';
import { InputElementProps } from '../../types/DOMTypes';

import * as Styles from './styles';

interface Props
  extends Omit<InputElementProps, 'size' | 'onChange' | 'className'> {
  size?: Size;
  value?: string;
  onChange?: (value?: string) => void;
  label?: string;
  containerClassName?: string;
  inputClassName?: string;
}

const TextInput = (props: Props): React.ReactElement => {
  const {
    size,
    value,
    onChange,
    label,
    inputClassName,
    containerClassName,
    ...otherProps
  } = props;

  console.log('Rendering TextInput');

  const inputId = useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <div className={cn(Styles.container, containerClassName)}>
      <label htmlFor={inputId}>{label}</label>
      <input
        {...otherProps}
        id={inputId}
        value={value}
        onChange={handleChange}
        className={inputClassName}
      />
      ;
    </div>
  );
};

export default observer(TextInput);
