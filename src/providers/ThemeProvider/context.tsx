import {createContext, Context} from 'react';

import {Theme} from '../../interfaces/ITheme.ts';

const ThemeContext: Context<[Theme, () => void]> = createContext<
  [Theme, () => void]
>([Theme.md, () => ({})]);

export default ThemeContext;
