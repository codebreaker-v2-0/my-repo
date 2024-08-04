import { observer } from 'mobx-react';
import React from 'react';

import LoginController from '../controller/LoginController/LoginController';

const LoginRoute = (): React.ReactElement => {
  return <LoginController />;
};

export default observer(LoginRoute);
