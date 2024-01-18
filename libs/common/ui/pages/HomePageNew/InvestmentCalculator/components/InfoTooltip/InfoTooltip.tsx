import { FC } from 'react';
import { SvgInfo } from './SvgInfo';
import cl from 'classnames';
import styles from './InfoTooltip.module.scss';

interface IInfoTooltip {
  className?: string;
  content?: string;
  contentHTML?: string | null;

}

export const InfoTooltip: FC<IInfoTooltip> = ({
  className,
  content,
  contentHTML,
}) => {
  const props: any = {};
  if (content) props['data-tooltip-content'] = content;
  if (contentHTML) props['data-tooltip-html'] = contentHTML;
  return (
    <div
      className={cl(className, styles.tooltip)}
      data-tooltip-id="calc-tooltip"
      data-tooltip-place="bottom-end"
      {...props}
    >
      <SvgInfo />
      
    </div>
  );
};
