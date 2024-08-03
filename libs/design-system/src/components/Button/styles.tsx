import { colors } from '../../constants/colors';
import { IconProps, Size, Variant } from '../../types';

export const commonButtonStyles = 'flex gap-[8px] outline-none';

export const getSizeBasedStyles = (size: Size): string => {
  switch (size) {
    case Size.Small:
      return 'px-[14px] py-[8px]';
    case Size.Medium:
    case Size.Large:
      return '';
  }
};

export const getIconPropsBasedOnVariant = (variant: Variant): IconProps => {
  let color = colors['gray-500'];

  switch (variant) {
    case Variant.Primary:
      color = colors['primary-500'];
      break;
    case Variant.Success:
      color = colors['success-500'];
      break;
    case Variant.Warning:
      color = colors['warning-500'];
      break;
    case Variant.Error:
      color = colors['error-500'];
      break;
    case Variant.Gray:
      color = colors['gray-500'];
      break;
  }

  return { color };
};

export const getButtonStylesBasedOnVariant = (variant: Variant): string => {
  switch (variant) {
    case Variant.Primary:
      return 'bg-primary-500';
    case Variant.Success:
      return 'bg-success-500';
    case Variant.Warning:
      return 'bg-warning-500';
    case Variant.Error:
      return 'bg-error-500';
    case Variant.Gray:
      return 'bg-gray-500';
  }
};
