import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getFormattedValue } from "../../utils";
import styles from "./InvestChart.module.scss";
import cl from "classnames";

const Item: FC<{
  value: number;
  label?: string;
  style?: 50 | 300 | 500;
  locale?: string;
  total?: boolean;
}> = ({ value = 0, style, locale, label, total = false }) => {
  return (
    <div className={styles.tooltip__row}>
      {style && (
        <div
          className={cl(styles.tooltip__dot, styles[`tooltip__dot--${style}`])}
        />
      )}
      {label && <p className={styles.tooltip__total}>{label}</p>}
      <p
        className={cl(
          styles.tooltip__value,
          total && styles.tooltip__valueTotal
        )}
      >
        {getFormattedValue("usd", value, "en-US")}

        {/* ${value.toFixed(2)} */}
      </p>
    </div>
  );
};

export const CustomTooltip: FC<any> = ({
  active,
  payload,
  label,
  totalLabel,
  isOutsideClicked,
  isTabletOrMob,
  setIsActive,
  ...props
}) => {
  useEffect(() => {
    setIsActive(active);
  }, [active]);

  let activeLocal = active;
  if (isOutsideClicked && active && isTabletOrMob) {
    activeLocal = false;
  }
  const router = useRouter();
  if (activeLocal !== null && activeLocal && payload && payload.length) {
    const total = payload[0].value + payload[1].value + payload[2].value;
    return (
      <div
        className={styles.toolTip}
        key={"payloadKey"}
        id="investment-tooltip"
      >
        <Item locale={router.locale} style={500} value={payload[2].value} />
        <Item locale={router.locale} style={300} value={payload[1].value} />
        <Item locale={router.locale} style={50} value={payload[0].value} />
        <Item locale={router.locale} total value={total} />
      </div>
    );
  }

  return null;
};
