import React from 'react';
import { observer } from 'mobx-react';
import cn from 'classnames';

import * as Styles from './styles';

interface Props {
  value: string;
}

const MultiSelect = (props: Props): React.ReactElement => {
  const { value } = props;

  console.log('Rendering MultiSelect');

  return <div>MultiSelect</div>;
};

export default observer(MultiSelect);
