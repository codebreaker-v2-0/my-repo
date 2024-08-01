import cn from 'classnames';
import { observer } from 'mobx-react';
import React from 'react';

import * as CommonStyles from '../../styles/commonStyles';

import * as Styles from './styles';

const RegisterController = (): React.ReactElement => {
  return (
    <div
      className={cn(CommonStyles.pageContainerStyles, Styles.containerStyles)}
    >
      RegisterController
    </div>
  );
};

export default observer(RegisterController);
