import React from 'react';
import { observer } from 'mobx-react';
import cn from 'classnames';

import * as Styles from './styles';

interface Props {
  value: string;
}

const IconButton = (props: Props): React.ReactElement => {
  const { value } = props;

  console.log('Rendering IconButton');

  return <div>IconButton</div>;
};

export default observer(IconButton);
