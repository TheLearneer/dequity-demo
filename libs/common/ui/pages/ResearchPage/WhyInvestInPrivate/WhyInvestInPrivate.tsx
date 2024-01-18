import React, { useState } from "react";

import style from "./WhyInvestInPrivate.module.scss";
import cl from "classnames";
// import gragic from "../../../assets/imgs/WhyInvestInPrivate.svg";
// import darkGraphic from "../../../assets/imgs/newResearch/WhyInvestInPrivateDark.webp";
import whiteGrafic from "../../../assets/imgs/newResearch/WhyInvestInPrivateWith.webp";
import darkGraphic from "../../../assets/imgs/newResearch/WhyInsestInPrivateDarkGraphic.webp"
import whiteGraficEs from "../../../assets/imgs/newResearch/spanish/WhyInvestInPrivateWithEs.webp"
import darkGraphicEs from "../../../assets/imgs/newResearch/spanish/WhyInsestInPrivateDarkGraphicEs.webp"
// import whiteGrafic from "../../../assets/imgs/newResearch/WhyInvestInPrivateWhiteGraphic.svg"
import { useSelector } from "react-redux";
import { RootState } from "@/src/store/store";
import { useRouter } from "next/router";



export const WhyInvestInPrivate = ({ data }: { data: any }) => {
   const [widthWindow, setWidthWindow] = React.useState<number | null>(null);
   const [theme, setTheme] = useState("");
   const {locale} = useRouter()

   const themeSelector = useSelector((state: RootState) => state.app.appReducer.appTheme);
   const [img,setImg] = useState<any>()

   React.useEffect(()=>{
       if(themeSelector) {
           setTheme(themeSelector);
       }
   },[themeSelector]);

   React.useEffect(() => {
      const handleResize = (event: any) => {
         setWidthWindow(event.target.innerWidth);
      };
      setWidthWindow(window.innerWidth)
      window.addEventListener('resize', handleResize);
      return () => {
         window.removeEventListener('resize', handleResize);
      };
   }, []);

   React.useEffect(()=>{

      if(theme === "theme-light"){
         setImg(whiteGrafic.src)
         if(locale === "es"){
            setImg(whiteGraficEs.src)
         }
      }else{
         setImg(darkGraphic.src)
         if(locale === "es"){
            setImg(darkGraphicEs.src)
         }
      }


   },[theme])


   return (
      <>
         <div className={style.whyInvestInPrivate}>
            {widthWindow == null ? "" : widthWindow <= 1024 ?
               <h2 className={style.whyInvestInPrivate__title}>
                  {/* Why invest in private real estate? */}
                  {data?.data?.attributes?.whyiip_title}
               </h2>
               : null
            }
            <div className={style.whyInvestInPrivate__content}>
               {widthWindow == null ? "" : widthWindow > 1024 ?
                  <h2 className={style.whyInvestInPrivate__title}>
                     {/* Why invest in private real estate? */}
                     {data?.data?.attributes?.whyiip_title}
                  </h2>
                  : null
               }
               <p className={cl(style.whyInvestInPrivate__text1, locale === "es" && style.whyInvestInPrivate__text1_es)}>
                  {/* Private real estate, especially in fractional ownership structure, can provide great portfolio diversification, low public market correlation, less volatility, an inflation hedge, cash flow and long-term appreciation over time */}
                  {data?.data?.attributes?.whyiip_text}
               </p>

            </div>
            <div className={style.whyInvestInPrivate__img}>
               <img src={img} alt={data?.data?.attributes?.whyiip_title} />
            </div>

            <div className={style.whyInvestInPrivate__decor1}></div>
         </div>
      </>
   );
};



export default WhyInvestInPrivate;
