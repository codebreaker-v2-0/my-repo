import { Route, Routes } from 'react-router-dom';

import {
  AdminLoginRoute,
  LoginRoute,
  RegisterRoute,
  routePaths,
} from '@project-red';

const AppRoutes = () => (
  <Routes>
    <Route path={routePaths.LOGIN_PATH} element={<LoginRoute />} />

    <Route path={routePaths.REGISTER_PATH} element={<RegisterRoute />} />

    <Route path={routePaths.ADMIN_LOGIN_PATH} element={<AdminLoginRoute />} />
  </Routes>
);

export default AppRoutes;
