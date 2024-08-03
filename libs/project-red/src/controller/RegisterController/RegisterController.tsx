import cn from 'classnames';
import { observer } from 'mobx-react';
import React, { useState } from 'react';

import { FormItem, FormItemType, SimpleForm } from '@common-components';
import { Button } from '@design-system';

import * as CommonStyles from '../../styles/commonStyles';

import * as Styles from './styles';

interface RegisterFormstate {
  email: string;
  emailErrorMsg?: string;
  password: string;
  passwordErrorMessage?: string;
  showPassword: boolean;
}

const RegisterController = (): React.ReactElement => {
  const [formState, setFormState] = useState<RegisterFormstate>({
    email: '',
    password: '',
    showPassword: false,
  });

  const onChangeEmail = (value?: string) => {
    setFormState({
      ...formState,
      email: value || '',
    });
  };

  const onChangePassword = (value?: string) => {
    setFormState({
      ...formState,
      password: value || '',
    });
  };

  const formItems: FormItem[] = [
    {
      type: FormItemType.Email,
      label: 'Email',
      placeholder: 'Enter your email',
      value: formState.email,
      errorMessage: formState.emailErrorMsg,
      onChange: onChangeEmail,
    },
    {
      type: FormItemType.Text,
      isMasked: formState.showPassword,
      label: 'Password',
      placeholder: 'Enter your Password',
      value: formState.password,
      errorMessage: formState.passwordErrorMessage,
      onChange: onChangePassword,
    },
  ];

  return (
    <div
      className={cn(CommonStyles.pageContainerStyles, Styles.containerStyles)}
    >
      <SimpleForm
        items={formItems}
        containerClassName="w-[300px] flex flex-col gap-3"
      />
      <Button>Register</Button>
    </div>
  );
};

export default observer(RegisterController);
