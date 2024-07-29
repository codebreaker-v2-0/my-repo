export enum Size {
  Small = 'SMALL',
  Medium = 'MEDIUM',
  Large = 'LARGE',
}

export enum Hierarchy {
  Primary = 'PRIMARY',
  Secondary = 'SECONDARY',
  Tertiary = 'TERTIARY',
}

export enum Variant {
  Primary = 'PRIMARY',
  Success = 'SUCCESS',
  Error = 'ERROR',
  Warning = 'WARNING',
  Gray = 'GRAY',
}

export interface IconProps {
  color: string;
}

export type Enhancer = (iconProps: IconProps) => React.ReactNode;
