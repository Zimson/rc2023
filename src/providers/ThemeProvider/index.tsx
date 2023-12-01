import {useCallback, useState, FC} from 'react';

import ThemeContext from './context.tsx';

import {Theme} from '../../interfaces/ITheme.ts';
import IProps from './props.ts';

const ThemeProvider: FC<IProps> = ({children}) => {
  const [theme, setTheme] = useState<Theme>(Theme.md);

  const toggleTheme = useCallback(() => {
    setTheme(curTheme => {
      switch (curTheme) {
        case Theme.md:
          return Theme.flat;

        case Theme.flat:
          return Theme.md;

        default:
          throw new Error('unknown theme');
      }
    });
  }, []);

  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
