import React from "react";

import { GraphLightSVG, GraphSVG } from "../../assets/svg";

export const RealtyGraphExample: React.FC<{
  className?: string;
  theme: string | unknown;
}> = ({ className, theme }) => {
  return theme === "theme-light" ? (
    <GraphLightSVG className={className} />
  ) : (
    <GraphSVG className={className} />
  );
};

export default RealtyGraphExample;
