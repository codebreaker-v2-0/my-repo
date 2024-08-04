import cn from 'classnames';
import { observer } from 'mobx-react';
import React, { useMemo } from 'react';

import { Enhancer, Size, Variant } from '../../types';

import * as Styles from './styles';

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

  const sizeBasedStyles = useMemo(
    () => Styles.getSizeBasedStyles(size),
    [size]
  );
  const iconProps = useMemo(
    () => Styles.getIconPropsBasedOnVariant(variant),
    [variant]
  );
  const buttonStyles = useMemo(
    () => Styles.getButtonStylesBasedOnVariant(variant),
    [variant]
  );

  return (
    <button
      {...buttonProps}
      className={cn(
        Styles.commonButtonStyles,
        sizeBasedStyles,
        buttonStyles,
        props.className
      )}
    >
      {leftEnhancer?.(iconProps)}
      <span className="flex-1">{props.children}</span>
      {rightEnhancer?.(iconProps)}
    </button>
  );
};

export default observer(Button);
