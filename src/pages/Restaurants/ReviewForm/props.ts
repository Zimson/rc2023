import IReview from '../interfaces/IReview.ts';

interface IProps {
  title?: string;
  onSubmit: (formState: IReview) => void;
  className?: string;
}

export default IProps;
