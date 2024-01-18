import { Tooltip } from "react-tooltip";
import styles from "./InfoTooltip.module.scss";
import { useEffect, useState } from "react";

export const InfoTooltipConnector = () => {
  const [isMounted, setIsMounted] = useState(false); // Need this for the react-tooltip

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return isMounted ? (
    <Tooltip
      id="calc-tooltip"
      disableStyleInjection
      opacity={1}
      className={styles["rc-tooltip"]}
    />
  ) : null;
};
