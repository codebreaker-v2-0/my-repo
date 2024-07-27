export enum ThemeType {
  light = 'LIGHT',
  dark = 'DARK',
}

export type Theme = Record<ThemeType, Record<string, string>>;
