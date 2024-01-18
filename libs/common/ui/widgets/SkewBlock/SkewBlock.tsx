import React, { ReactComponentElement, ReactNode, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store/store";
import { useRouter } from "next/router";
import style from "./SkewBlock.module.scss";
import cl from "classnames"
import SkewBGBigMobDark from "../../assets/imgs/SkewBlockBig-mob_dark.png";
import SkewBGBigMobWhite from "../../assets/imgs/SkewBlockBig-mob_white.png";
import SkewBGBigDark from "../../assets/imgs/SkewBlockBig_dark.png";
import SkewBGBigWhite from "../../assets/imgs/SkewBlockBig_white.png";

import SkewBGMobDark from "../../assets/imgs/SkewBlock-mob_dark.png";
import SkewBGMobWhite from "../../assets/imgs/SkewBlock-mob_white.png";
import SkewBGDark from "../../assets/imgs/SkewBlock_dark.png";
import SkewBGWhite from "../../assets/imgs/SkewBlock_white.png";

interface ISkewBlockProps{
  size?:string | undefined,
  cancelHover?:boolean  
  children: ReactNode
  otherStyle?:boolean,
  className?:string;
}

export const SkewBlock = (props: ISkewBlockProps) => {

  const {size,cancelHover = false, children,otherStyle=false,className=""} = props
  const { locale } = useRouter();

  const [theme, setTheme] = useState("");
  
  const themeSelector:string = useSelector((state: RootState) => state.app.appReducer.appTheme);

  React.useEffect(() => {
    if (themeSelector) {
        setTheme(themeSelector);
    }
}, [themeSelector]);

   const [widthWindow, setWidthWindow] = React.useState<number | null>(null);

  React.useEffect(() => {
    const handleResize = (event: any) => {
      setWidthWindow(event.target.innerWidth);
    };
    setWidthWindow(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [skewActive, setSkewActive] = useState(false);
  
  let imgBigDark = SkewBGBigDark.src
  let imgBigWhite = SkewBGBigWhite.src
  let mobImgBigDark = SkewBGBigMobDark.src
  let mobImgBigWhite = SkewBGBigMobWhite.src

  let imgDark = SkewBGDark.src
  let imgWhite = SkewBGWhite.src
  let mobImgDark = SkewBGMobDark.src
  let mobImgWhite = SkewBGMobWhite.src

  return (
    <>
        <div className={style.skew} onMouseEnter={()=>{setSkewActive(true)}} onMouseLeave={()=>{setSkewActive(false)}} >

            <div className={ 
            size == "big" ? 
            locale !== "ar" ? 
            style.skew_bg_wrapper_big : 
            style.skew_bg_wrapper_big_ar : 
            locale !== "ar" ?
            style.skew_bg_wrapper :
            style.skew_bg_wrapper_ar 
            }>

                { widthWindow == null ? "" : widthWindow <= 575 ?
                  size == "big" ? <img className={cl(style.skew_bg,cancelHover && style.skew_bg_canceled)} src={theme === 'theme-dark' ? mobImgBigDark : mobImgBigWhite} alt="Background"/> :
                    <img className={cl(style.skew_bg,cancelHover && style.skew_bg_canceled)} src={theme === 'theme-dark' ? mobImgDark : mobImgWhite} alt="Background"/> :
                  size == "big" ? <img className={cl(style.skew_bg,cancelHover && style.skew_bg_canceled)} src={theme === 'theme-dark' ? imgBigDark : imgBigWhite} alt="Background"/> :
                  <img className={cl(style.skew_bg,cancelHover && style.skew_bg_canceled)} src={theme === 'theme-dark' ? imgDark : imgWhite} alt="Background"/>
                }
            </div>

            <div className={cl(style.skew__position, otherStyle && style.skew__position_other,className)}>
                {children}
            </div>

        </div>      
    </>
  );
};

export default SkewBlock;
