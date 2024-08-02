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
  hint?: string;
  errorMessage?: string;
}

const TextInput = (props: Props): React.ReactElement => {
  const {
    size,
    value,
    onChange,
    label,
    inputClassName,
    containerClassName,
    hint,
    errorMessage,
    ...otherProps
  } = props;

  const inputId = useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const renderHintOrError = (): React.ReactNode =>
    errorMessage ? (
      <span className="text-red-500 text-xs font-regular">*{errorMessage}</span>
    ) : hint ? (
      <span className="text-gray-500 text-xs font-regular">*{hint}</span>
    ) : null;

  return (
    <div className={cn(Styles.container, containerClassName)}>
      <label htmlFor={inputId} className={cn(Styles.label)}>
        {label}
      </label>
      <input
        {...otherProps}
        id={inputId}
        value={value}
        onChange={handleChange}
        className={cn(Styles.input, inputClassName)}
      />
      {renderHintOrError()}
    </div>
  );
};

export default observer(TextInput);
