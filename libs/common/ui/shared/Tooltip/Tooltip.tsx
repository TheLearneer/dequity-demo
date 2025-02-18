import { FC, useEffect, useState } from "react";
import InfoIconDark from "../../assets/imgs/MarketInfoIcon_dark.png";
import InfoIcon from "../../assets/imgs/MarketInfoIcon.png";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store/store";
import { InfoIconDarkSVG, InfoIconSVG } from "../../assets/svg";

// export const Tooltip: FC<{ className?: string }> = ({ className }) => {
//   return (
//     <svg
//       className={className}
//       width="15"
//       height="15"
//       viewBox="0 0 15 15"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//     >
//       <circle cx="7.55729" cy="7.50065" r="6.66667" />
//       <path
//         d="M8.22396 4.16667C8.22396 4.53486 7.92548 4.83333 7.55729 4.83333C7.1891 4.83333 6.89062 4.53486 6.89062 4.16667C6.89062 3.79848 7.1891 3.5 7.55729 3.5C7.92548 3.5 8.22396 3.79848 8.22396 4.16667Z"
//         fill="#162C3E"
//       />
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M6.39062 6.16797C6.39062 5.89183 6.61448 5.66797 6.89062 5.66797H7.55729C7.83343 5.66797 8.05729 5.89183 8.05729 6.16797V10.8346C8.05729 11.1108 7.83343 11.3346 7.55729 11.3346C7.28115 11.3346 7.05729 11.1108 7.05729 10.8346V6.66797H6.89062C6.61448 6.66797 6.39062 6.44411 6.39062 6.16797Z"
//         fill="#162C3E"
//       />
//     </svg>
//   );
// };

export const Tooltip: FC<{ className?: string }> = ({ className }) => {


  const [rightIcon,setRightIcon] = useState<any>()
  const themeSelector = useSelector((state: RootState) => state.app.appReducer.appTheme);

  useEffect(()=>{

    if(themeSelector === "theme-light"){
    setRightIcon(<InfoIconSVG />)
    }else{
      setRightIcon(<InfoIconDarkSVG />)
    }
  },[themeSelector])
  return (

   rightIcon
    // <svg
    //   className={className}
    //   width="15"
    //   height="15"
    //   viewBox="0 0 15 15"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <circle cx="7.55729" cy="7.50065" r="6.66667" />
    //   <path
    //     d="M8.22396 4.16667C8.22396 4.53486 7.92548 4.83333 7.55729 4.83333C7.1891 4.83333 6.89062 4.53486 6.89062 4.16667C6.89062 3.79848 7.1891 3.5 7.55729 3.5C7.92548 3.5 8.22396 3.79848 8.22396 4.16667Z"
    //     fill="#162C3E"
    //   />
    //   <path
    //     fillRule="evenodd"
    //     clipRule="evenodd"
    //     d="M6.39062 6.16797C6.39062 5.89183 6.61448 5.66797 6.89062 5.66797H7.55729C7.83343 5.66797 8.05729 5.89183 8.05729 6.16797V10.8346C8.05729 11.1108 7.83343 11.3346 7.55729 11.3346C7.28115 11.3346 7.05729 11.1108 7.05729 10.8346V6.66797H6.89062C6.61448 6.66797 6.39062 6.44411 6.39062 6.16797Z"
    //     fill="#162C3E"
    //   />
    // </svg>
  );
};

export default Tooltip;
