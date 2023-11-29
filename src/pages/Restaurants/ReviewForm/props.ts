import IReview from '../interfaces/IReview.ts';

interface IProps {
  title?: string;
  onSubmit: (formState: IReview, callback: () => void) => void;
  className?: string;
}

export default IProps;
