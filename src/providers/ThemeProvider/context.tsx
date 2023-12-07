import {createContext, Context} from 'react';

import {Theme} from '../../interfaces/ITheme.ts';

const ThemeContext: Context<{theme: Theme, toggleTheme: () => void}> = createContext<
  {theme: Theme, toggleTheme: () => void}
>({theme: Theme.md, toggleTheme: () => ({})});

export default ThemeContext;
