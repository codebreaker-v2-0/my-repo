import cn from 'classnames';
import { observer } from 'mobx-react';
import React, { useState } from 'react';

import { FormItem, FormItemType, SimpleForm } from '@common-components';
import { Button } from '@design-system';

import useAdminLogin from '../../apis/AdminLogin/useAdminLogin';
import { AdminLoginParams } from '../../schema';
import * as CommonStyles from '../../styles/commonStyles';

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

  const adminLoginAPI = useAdminLogin();

  const onSubmit = async (): Promise<void> => {
    const { email, password, emailErrorMsg, passwordErrorMessage } = formState;

    const isValid =
      !!email && !!password && !emailErrorMsg && !passwordErrorMessage;

    if (!isValid) return;

    const reqObj: AdminLoginParams = { email, password };

    adminLoginAPI.triggerAPI({
      reqObj,
      onFailure(errorMessage) {
        console.log(errorMessage);
      },
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
        <Button
          className="w-full text-center"
          onClick={onSubmit}
          isLoading={adminLoginAPI.isPending}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default observer(AdminLoginController);
