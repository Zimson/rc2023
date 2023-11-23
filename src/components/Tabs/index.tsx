import classNames from 'classnames/bind';

import UnorderedList from '../UnorderedList';
import Tab from '../Tab';
import styles from './styles.module.css';
import ITab from '../Tab/ITab.ts';
import ITabsProps from './ITabsProps.ts';

const cx = classNames.bind(styles);

const Tabs = <T extends ITab>({
  items,
  onTabClick,
  className,
}: ITabsProps<T>) => {
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
