import cn from 'classnames';
import { observer } from 'mobx-react';
import React, { useMemo } from 'react';
import { BeatLoader } from 'react-spinners';

import { colors } from '../../constants/colors';
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
  isLoading?: boolean;
}

const Button = (props: Props): React.ReactElement => {
  const {
    size = Size.Small,
    variant = Variant.Primary,
    children,
    leftEnhancer,
    rightEnhancer,
    isLoading,
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

  const renderContent = (): React.ReactElement => (
    <>
      {leftEnhancer?.(iconProps)}
      <span className="flex-1">{props.children}</span>
      {rightEnhancer?.(iconProps)}
    </>
  );

  const renderLoader = (): React.ReactElement => (
    <div className="w-full flex justify-center">
      <BeatLoader color={colors['base-white']} size={8} />
    </div>
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
      {isLoading ? renderLoader() : renderContent()}
    </button>
  );
};

export default observer(Button);
