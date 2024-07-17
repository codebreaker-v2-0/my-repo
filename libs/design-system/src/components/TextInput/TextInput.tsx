import React from 'react';
import { observer } from 'mobx-react';
import cn from 'classnames';

import * as Styles from './styles';

interface Props {
  value: string;
}

const TextInput = (props: Props): React.ReactElement => {
  const { value } = props;

  console.log('Rendering TextInput');

  return <div>TextInput</div>;
};

export default observer(TextInput);
