import React from 'react';
import { observer } from 'mobx-react';
import cn from 'classnames';

import * as Styles from './styles';

interface Props {
  value: string;
}

const Button = (props: Props): React.ReactElement => {
  const { value } = props;

  console.log('Rendering Button');

  return <div>Button</div>;
};

export default observer(Button);
