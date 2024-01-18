import React, { useState } from "react";
import style from "./PerformanceRealEstate.module.scss";
import cl from "classnames";
import gragicDark from "../../../assets/imgs/newResearch/PerformanceRealEstateDark.webp";
import gragicWith from "../../../assets/imgs/newResearch/PerformanceRealEstateWith.webp";
import gragicDarkEs from "../../../assets/imgs/newResearch/spanish/PerformanceRealEstateDarkEs.webp";
import gragicWithEs from "../../../assets/imgs/newResearch/spanish/PerformanceRealEstateWithEs.webp";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store/store";
import { useRouter } from "next/router";





export const PerformanceRealEstate = ({ data }: { data: any }) => {
   const [widthWindow, setWidthWindow] = React.useState<number | null>(null);
   const [theme, setTheme] = useState("");

   const {locale } = useRouter()

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
         setImg(gragicWith.src)
         if(locale === "es"){
            setImg(gragicWithEs.src)
         }
      }else{
         setImg(gragicDark.src)
         if(locale === "es"){
            setImg(gragicDarkEs.src)
         }
      }


   },[theme])

   return (
      <>
         <div className={cl(style.performanceRealEstate,locale === "ar" && style.performanceRealEstate_ar)}>
            {widthWindow == null ? "" : widthWindow <= 1024 ?
               <h2 className={style.performanceRealEstate__title}>
                  {/* Performance real estate vs. others */}
                  {data?.data?.attributes?.pre_title}
               </h2>
               : null
            }
            <div className={style.performanceRealEstate__img}>
               <img src={img} alt="Performance real estate vs. others" />

            </div>
            <div className={cl(style.performanceRealEstate__content,locale === "ar" && style.performanceRealEstate__content_ar)}>
               {widthWindow == null ? "" : widthWindow > 1024 ?
                  <h2 className={style.performanceRealEstate__title}>
                     {/* Performance real estate vs. others */}
                     {data?.data?.attributes?.pre_title}
                  </h2>
                  : null
               }
               <p className={style.performanceRealEstate__text1}>
                  {/* Miami-Dade County single-family home median prices increased 9.4% year-over-year in November 2022 have risen for 132 consecutive months (11&nbsp;years), the longest running-streak on record */}
                  {data?.data?.attributes?.pre_text1}
               </p>
               <p className={style.performanceRealEstate__text2}>
                  {/* Existing condo median prices increased 14.2% year-over-year, have increased in 133 of the last 138 months. (11.5&nbsp;years)* */}
                  {data?.data?.attributes?.pre_text2}
               </p>
            </div>

            <div className={style.performanceRealEstate__decor1}></div>
         </div>
      </>
   );
};



export default PerformanceRealEstate;
