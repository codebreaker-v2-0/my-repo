import cn from 'classnames';
import { observer } from 'mobx-react';
import React, { useState } from 'react';

import { FormItem, FormItemType, SimpleForm } from '@common-components';
import { Button } from '@design-system';

import { REGISTER_PATH } from '../../constants/routeConstants';
import * as CommonStyles from '../../styles/commonStyles';

import * as Styles from './styles';

interface LoginFormstate {
  email: string;
  emailErrorMsg?: string;
  password: string;
  passwordErrorMessage?: string;
  showPassword: boolean;
}

const LoginController = (): React.ReactElement => {
  const [formState, setFormState] = useState<LoginFormstate>({
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
          <p className="text-sm font-regular">Login to your account</p>
        </div>
        <SimpleForm
          items={formItems}
          containerClassName="flex flex-col gap-3"
        />
        <Button className="w-full text-center">Login</Button>

        <p className="text-gray-600 text-sm font-regular text-center">
          <span>Don't have an account?</span>{' '}
          <a href={REGISTER_PATH} className="text-gray-800 font-semibold">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default observer(LoginController);
