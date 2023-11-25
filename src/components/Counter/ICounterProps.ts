interface ICounterProps {
  count: number;
  onDecrement: (cont: number) => void;
  onIncrement: (cont: number) => void;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
}

export default ICounterProps;
