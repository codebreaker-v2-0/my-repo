import React from 'react';
import { observer } from 'mobx-react';
import cn from 'classnames';

interface Props {
  value: string;
}

const TextFormField = (props: Props): React.ReactElement => {
  const { value } = props;

  console.log('Rendering TextFormField');

  return <div>TextFormField</div>;
};

export default observer(TextFormField);
