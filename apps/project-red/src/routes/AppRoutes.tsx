import { Route, Routes } from 'react-router-dom';

import { LoginRoute, RegisterRoute } from '@project-red';

import * as routePaths from '../constants/routeConstants';

const AppRoutes = () => (
  <Routes>
    <Route path={routePaths.LOGIN_PATH} element={<LoginRoute />} />

    <Route path={routePaths.REGISTER_PATH} element={<RegisterRoute />} />
  </Routes>
);

export default AppRoutes;
