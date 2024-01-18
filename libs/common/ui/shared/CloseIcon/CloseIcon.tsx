import { FC } from "react";

export const CloseIcon: FC<{
  className?: string;
  onClick?: () => void;
}> = ({ className, onClick }) => {
  return (
    <svg
      className={className}
      onClick={onClick}
      width="12"
      height="12"
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="#CCC"
    >
      <path
        d="M15.4677 0.786092C15.7997 0.454146 16.3379 0.454146 16.6698 0.786092C17.0017 1.11804 17.0017 1.65623 16.6698 1.98817L9.93003 8.72794L16.6698 15.4677C17.0017 15.7997 17.0017 16.3379 16.6698 16.6698C16.3379 17.0017 15.7997 17.0017 15.4677 16.6698L8.72794 9.93003L1.98815 16.6698C1.6562 17.0018 1.11801 17.0018 0.786069 16.6698C0.454123 16.3379 0.454123 15.7997 0.786069 15.4677L7.52586 8.72794L0.786068 1.98815C0.454123 1.6562 0.454123 1.11801 0.786068 0.786069C1.11801 0.454123 1.6562 0.454123 1.98815 0.786068L8.72794 7.52586L15.4677 0.786092Z"
        strokeWidth="1.5"
        strokeLinecap="round"
        stroke="currentColor"
      />
    </svg>
  );
};

export default CloseIcon;
