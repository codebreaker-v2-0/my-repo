import cn from 'classnames';
import { observer } from 'mobx-react';
import React, { useState } from 'react';

import { FormItem, FormItemType, SimpleForm } from '@common-components';
import { Button } from '@design-system';

import { LOGIN_PATH } from '../../constants/routeConstants';
import * as CommonStyles from '../../styles/commonStyles';

import * as Styles from './styles';

interface RegisterFormstate {
  name: string;
  nameErrorMsg?: string;
  email: string;
  emailErrorMsg?: string;
  password: string;
  passwordErrorMessage?: string;
  showPassword: boolean;
}

const RegisterController = (): React.ReactElement => {
  const [formState, setFormState] = useState<RegisterFormstate>({
    name: '',
    email: '',
    password: '',
    showPassword: false,
  });

  const onChangeName = (value?: string) => {
    setFormState({
      ...formState,
      name: value || '',
    });
  };

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
      type: FormItemType.Text,
      label: 'Name',
      placeholder: 'Enter your name',
      value: formState.name,
      errorMessage: formState.nameErrorMsg,
      onChange: onChangeName,
    },
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
      isMasked: true,
      label: 'Password',
      placeholder: 'Enter your password',
      value: formState.password,
      errorMessage: formState.passwordErrorMessage,
      onChange: onChangePassword,
    },
  ];

  return (
    <div
      className={cn(CommonStyles.pageContainerStyles, Styles.containerStyles)}
    >
      <div className={Styles.cardStyles}>
        <div>
          <h3 className="text-lg font-semibold">Welcome to E-Commerce</h3>
          <p className="text-sm font-regular">Please register your account</p>
        </div>
        <SimpleForm
          items={formItems}
          containerClassName="flex flex-col gap-3"
        />
        <Button className="w-full text-center">Sign Up</Button>

        <p className="text-gray-600 text-sm font-regular text-center">
          <span>Already have an account?</span>{' '}
          <a href={LOGIN_PATH} className="text-gray-800 font-semibold">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default observer(RegisterController);
