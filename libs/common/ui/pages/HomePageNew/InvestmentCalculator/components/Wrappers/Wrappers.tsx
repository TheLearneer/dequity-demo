import { FC, ReactNode } from 'react';
import cl from 'classnames';
import styles from './Wrappers.module.scss';

interface IProps {
  children: ReactNode;
  className?: string;
}

export const BorderWrapper: FC<IProps> = ({ children, className }) => {
  return <div className={cl(className, styles.wrapper)}>{children}</div>;
};

export const Row: FC<IProps> = ({ children, className }) => {
  return <div className={cl(className, styles.row)}>{children}</div>;
};
