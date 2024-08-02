import cn from 'classnames';
import { observer } from 'mobx-react';
import React from 'react';

import { FormItem, FormItemType } from '../../types/FormTypes';

import EmailFormField from './FormFields/EmailFormField';
import TextFormField from './FormFields/TextFormField';

interface Props {
  items: FormItem[];
  containerClassName?: string;
}

const SimpleForm = (props: Props): React.ReactElement => {
  const renderFormItem = (
    formItem: FormItem,
    index: number
  ): React.ReactElement => {
    switch (formItem.type) {
      case FormItemType.Text:
        return <TextFormField {...formItem} key={index} />;
      case FormItemType.Email:
        return <EmailFormField {...formItem} key={index} />;
      case FormItemType.Number:
        return <div key={index}>Number</div>;
    }
  };

  return (
    <div className={cn(props.containerClassName)}>
      {props.items.map(renderFormItem)}
    </div>
  );
};

export default observer(SimpleForm);
