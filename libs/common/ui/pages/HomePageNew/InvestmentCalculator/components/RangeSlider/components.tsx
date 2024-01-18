import { FC } from 'react';
import { useRouter } from 'next/router';
import { getFormattedValue } from '../../utils';
import { SvgReload } from './SvgReload';
import cl from 'classnames';
import styles from './RangeSlider.module.scss';

interface IValueProps {
  value: number;
  type: 'usd' | 'percent';
}

export const Value: FC<IValueProps> = ({ value, type }) => {
  return (
    <p className={styles.text}>
      {  getFormattedValue(
        type,
        type === 'percent' ? value / 100 : value,
        'en-US',
      )}
    </p>
  );
};

interface IClearWrapperProps extends IValueProps {
  clear: () => void;
}

export const ClearWrapper: FC<IClearWrapperProps> = ({
  value,
  type,
  clear,
}) => {
  return (
    <button onClick={clear} className={styles.clear}>
      <Value value={value} type={type} />
      <SvgReload />
    </button>
  );
};
