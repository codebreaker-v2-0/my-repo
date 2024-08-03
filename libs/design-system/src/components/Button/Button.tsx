import cn from 'classnames';
import { observer } from 'mobx-react';
import React, { useMemo } from 'react';

import { Enhancer, Size, Variant } from '../../types';

import {
  getButtonStylesBasedOnVariant,
  getIconPropsBasedOnVariant,
  getSizeBasedStyles,
} from './styles';

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: Size;
  variant?: Variant;
  children: React.ReactNode;
  leftEnhancer?: Enhancer;
  rightEnhancer?: Enhancer;
}

const Button = (props: Props): React.ReactElement => {
  const {
    size = Size.Small,
    variant = Variant.Primary,
    children,
    leftEnhancer,
    rightEnhancer,
    ...buttonProps
  } = props;

  const sizeBasedStyles = useMemo(() => getSizeBasedStyles(size), [size]);
  const iconProps = useMemo(
    () => getIconPropsBasedOnVariant(variant),
    [variant]
  );
  const buttonStyles = useMemo(
    () => getButtonStylesBasedOnVariant(variant),
    [variant]
  );

  return (
    <button className={cn(sizeBasedStyles, buttonStyles)} {...buttonProps}>
      {leftEnhancer?.(iconProps)}
      {props.children}
      {rightEnhancer?.(iconProps)}
    </button>
  );
};

export default observer(Button);
