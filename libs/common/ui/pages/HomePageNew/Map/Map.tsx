import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalEmailShowAction, toggleModalThanksShowAction, toggleAppThemeAction, changeAppLanguageAction, toggleScrollToHowAction, requestHomeFetchAction, setHomeFetchLoadingAction } from "@/src/store/actions/app";

import style from "./Map.module.scss";
import cl from "classnames";
import QuoteWrapper from "../../../components/QuoteWrapper/QuoteWrapper";
import { MapRamka } from "../../../assets/svg";
import { MapRamkaMob } from "../../../assets/svg";
import Link from "next/link";
import { RootState } from "@/src/store/store";

export const NewInvestmentClass = ({data} : {data : any}) => {
   const [widthWindow, setWidthWindow] = useState<number | null>(null);

   const dispatch = useDispatch();
   const { locale } = useRouter();

  const themeSelector = useSelector((state:RootState)=> state.app.appReducer.appTheme)
  const handleToggleModal = () => dispatch(toggleModalEmailShowAction());

  useEffect(() => {
   const handleResize = (event: any) => {
       setWidthWindow(event.target.innerWidth);
   };
   setWidthWindow(window.innerWidth)
   window.addEventListener('resize', handleResize);
   return () => {
       window.removeEventListener('resize', handleResize);
   };
}, []);



   return (
      <>
         <div className={style.map}>
            <div className={style.map__content}>
            <div className={style.map__ramka}>
            {widthWindow == null ? "" : widthWindow < 991 ?  <MapRamkaMob /> : <MapRamka /> }
               </div>
               <div className={style.map__title}>
                  {data?.data?.attributes?.map_title}
                  <div className={style.map__avtor}>
                  {data?.data?.attributes?.map_avtor}

                  </div>
                  
               </div>
               {/* <QuoteWrapper  quote={data?.data?.attributes?.map_title} autor={data?.data?.attributes?.map_avtor} /> */}
               <Link href={`https://demo.dequity.io/${locale}/properties?utm_content=${themeSelector == "theme-light" ? "light" : "dark"}`} className={cl(style.map__link,
                  locale === 'ar' && style.map__link_ar
                  )} >
                     
                  {/* Join real estate investing (R)evolution */}
                  {data?.data?.attributes?.map_subtitle}
                  <span className={style.map__link_arrow}></span>
                  {/* <svg width="32" height="19" viewBox="0 0 32 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M2 9.29053H27.592" stroke="#42BFF8" strokeWidth="3" strokeLinecap="round" />
                     <path d="M22.9492 2.1582L30.5009 9.29039L22.9492 16.8421" stroke="#42BFF8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg> */}
               </Link>
            </div>

            <div className={style.map__decor1}></div>
            <div className={style.map__decor2}></div>
         </div>
      </>
   );
};



export default NewInvestmentClass;
