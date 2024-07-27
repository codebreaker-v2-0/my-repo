import { createContext, PropsWithChildren, useContext } from 'react';

import { Theme, ThemeType } from '../types/theme';

const ThemeContext = createContext<Record<string, string> | null>(null);

interface Props extends PropsWithChildren {
  theme: Theme;
  themeType: ThemeType;
}

export const ThemeProvider = (props: Props) => {
  const { children, theme, themeType } = props;

  return (
    <ThemeContext.Provider value={theme[themeType]}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) throw new Error('Expected to be wrapped in ThemeProvider');
  return themeContext;
};
