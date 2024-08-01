import { ValidationResponse } from './ValidationTypes';

export enum FormItemType {
  Text = 'TEXT',
  Email = 'EMAIL',
  Number = 'NUMBER',
}

export interface BaseFormItem<T> {
  label?: string;
  placeholder?: string;
  errorMessage?: string;
  isMasked?: boolean;
  value?: T;
  onChange?: (value?: T) => void;
  validate?: (value?: T) => ValidationResponse;
}

export interface TextFormItem extends BaseFormItem<string> {
  type: FormItemType.Text;
}

export interface EmailFormItem extends BaseFormItem<string> {
  type: FormItemType.Email;
}

export interface NumberFormItem extends BaseFormItem<number> {
  type: FormItemType.Number;
}

export type FormItem = TextFormItem | EmailFormItem | NumberFormItem;
