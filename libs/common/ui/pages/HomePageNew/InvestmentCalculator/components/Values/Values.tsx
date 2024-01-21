import { FC } from "react";
import { useRouter } from "next/router";
import { getFormattedValue } from "../../utils";
import cl from "classnames";
import styles from "./Values.module.scss";

interface IInfoValueProps {
  label?: string | null;
  value: number;
  color: "50" | "300" | "500";
  isActiveTooltip?: boolean;
  lastElementTooltipStyle?: boolean;
}

interface IDot {
  color: "50" | "300" | "500";
  show?: boolean;
  small?: boolean;
}

const Dot: FC<IDot> = ({ color, show = true, small = false }) => {
  return (
    <div
      className={cl(
        styles.value__dot,
        styles[`value__dot--${color}`],
        !show && styles["value__dot__inactiveDot"],
        small && styles["value__dot__small"]
      )}
    />
  );
};

export const InfoValue: FC<IInfoValueProps> = ({
  label,
  value,
  color,
  isActiveTooltip,
  lastElementTooltipStyle = false,
}) => {
  const router = useRouter();

  return (
    <div className={styles.value}>
      <div className={styles.values_dot_wrapper}>
        {<Dot color={color} show={isActiveTooltip} small />}
        <div>
          <p className={cl(styles.value__text, styles.value__label)}>{label}</p>
        </div>
      </div>

      <div
        className={cl(
          styles.value__content,
          isActiveTooltip && styles.value__content_isActiveTooltip,
          isActiveTooltip &&
            lastElementTooltipStyle &&
            styles.value__content_isLastItem
        )}
      >
        {<Dot color={color} />}
        <p className={styles.value__value}>
          {getFormattedValue("usd", value, "en-US")}
        </p>
      </div>
    </div>
  );
};

interface IInvestValueProps {
  value: number | string;
}

export const PercentValue: FC<IInvestValueProps> = ({ value }) => {
  const router = useRouter();
  return (
    <p className={cl(styles.value__value, styles.yield)}>
      {getFormattedValue("percent", value, router.locale, 2)}
    </p>
  );
};
