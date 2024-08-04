import { observer } from 'mobx-react';
import React from 'react';

import AdminLoginController from '../controller/AdminLoginController/AdminLoginController';

const AdminLoginRoute = (): React.ReactElement => {
  return <AdminLoginController />;
};

export default observer(AdminLoginRoute);
