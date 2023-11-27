import classNames from 'classnames/bind';

import UnorderedList from '../UnorderedList';
import Tab from '../Tab';

import ITab from '../interfaces/ITab.ts';
import IProps from './props.ts';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

const Tabs = <T extends ITab>({
  items,
  onTabClick,
  className,
}: IProps<T>) => {
  const handleClick = (item: T) => () => {
    onTabClick(item);
  };

  return (
    <UnorderedList
      items={items}
      className={cx('tabs', className)}
      renderItem={(item: T) => (
        <Tab text={item.text} onClick={handleClick(item)} />
      )}
    />
  );
};

export default Tabs;
