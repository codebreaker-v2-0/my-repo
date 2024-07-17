import React from 'react';
import { observer } from 'mobx-react';
import cn from 'classnames';

import * as Styles from './styles';

interface Props {
  value: string;
}

const Picker = (props: Props): React.ReactElement => {
  const { value } = props;

  console.log('Rendering Picker');

  return <div>Picker</div>;
};

export default observer(Picker);
