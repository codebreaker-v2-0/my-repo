import cn from 'classnames';
import { observer } from 'mobx-react';
import React, { useState } from 'react';

import { FormItem, FormItemType, SimpleForm } from '@common-components';
import { Button } from '@design-system';

import { ADMIN_LOGIN_URL } from '../../constants/apiConstants';
import * as CommonStyles from '../../styles/commonStyles';
import { api } from '../../utils/api';

import * as Styles from './styles';

interface LoginFormstate {
  email: string;
  emailErrorMsg?: string;
  password: string;
  passwordErrorMessage?: string;
  showPassword: boolean;
}

const AdminLoginController = (): React.ReactElement => {
  const [formState, setFormState] = useState<LoginFormstate>({
    email: '',
    password: '',
    showPassword: false,
  });

  const onSubmit = async (): Promise<void> => {
    const { email, password, emailErrorMsg, passwordErrorMessage } = formState;

    const isValid =
      !!email && !!password && !emailErrorMsg && !passwordErrorMessage;

    if (!isValid) return;

    const loginDetails = { email, password };

    const response = await api.post(ADMIN_LOGIN_URL, loginDetails, {
      withCredentials: true,
    });
    console.log(response);
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
        <img
          src="src/assets/images/logo.png"
          alt="logo"
          className="w-[150px] mx-auto"
        />
        <SimpleForm
          items={formItems}
          containerClassName="flex flex-col gap-3"
        />
        <Button className="w-full text-center" onClick={onSubmit}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default observer(AdminLoginController);
