import ITheme from '../interfaces/ITheme.ts';

interface Props extends ITheme{
  count: number;
  onDecrement: (cont: number) => void;
  onIncrement: (cont: number) => void;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
}

export default Props;
