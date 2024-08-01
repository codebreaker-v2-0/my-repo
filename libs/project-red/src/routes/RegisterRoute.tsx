import { observer } from 'mobx-react';
import React from 'react';

import RegisterController from '../controller/RegisterController/RegisterController';

const RegisterRoute = (): React.ReactElement => {
  return <RegisterController />;
};

export default observer(RegisterRoute);
