import cn from 'classnames';
import { observer } from 'mobx-react';
import React from 'react';

import { FormItem, FormItemType } from '../../types/FormTypes';

interface Props {
  items: FormItem[];
  containerClassName?: string;
}

const SimpleForm = (props: Props): React.ReactElement => {
  const renderFormItem = (formItem: FormItem): React.ReactElement => {
    switch (formItem.type) {
      case FormItemType.Text:
        return <div>Text</div>;
      case FormItemType.Email:
        return <div>Email</div>;
      case FormItemType.Number:
        return <div>Number</div>;
    }
  };

  return (
    <div className={cn(props.containerClassName)}>
      {props.items.map(renderFormItem)}
    </div>
  );
};

export default observer(SimpleForm);
