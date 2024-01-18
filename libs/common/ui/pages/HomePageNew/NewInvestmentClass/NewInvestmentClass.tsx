import React, { useState } from "react";
import { useRouter } from "next/router";

import style from "./NewInvestmentClass.module.scss";
import cl from "classnames";
// import imgHome from "../../../assets/imgs/new-investment-class.png";
import imgHome from "../../../assets/imgs/new-investment-classNew.png";
import imgHomeWhite from "../../../assets/imgs/new-investment-classNew_white.png";
import Image from "next/dist/client/image";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store/store";

import NewInvestmentMob from "../../../assets/imgs/homepage/NewInvestmentMob.webp"
import NewInvestment from "../../../assets/imgs/homepage/NewInvestment.webp"
import NewInvestmentEs from "../../../assets/imgs/homepage/spanish/NewInvestmentEs.webp"
import NewInvestmentWhiteEs from "../../../assets/imgs/homepage/spanish/NewInvestmentWhiteEs.webp"
import NewInvestmentWhiteMob from "../../../assets/imgs/homepage/NewInvestmentWhiteMob.webp"
import NewInvestmentWhite from "../../../assets/imgs/homepage/NewInvestmentWhite.webp"
export const NewInvestmentClass = ({ data }: { data: any }) => {

   const themeSelector:string = useSelector((state: RootState) => state.app.appReducer.appTheme);

   const { locale } = useRouter();

   const [widthWindow, setWidthWindow] = React.useState<number | null>(null);
   const [img,setImg] = useState<any>()


   React.useEffect(()=>{
      if(themeSelector == "theme-light"){
         if(locale === "es"){
            setImg(NewInvestmentWhiteEs.src)
         }else{
            setImg(NewInvestmentWhite.src)
         }
         
      }else{
         if(locale === "es"){
            setImg(NewInvestmentEs.src)
         }else{
            setImg(NewInvestment.src)
         }
         
      }
      setImg
   },[themeSelector])

   // let img = themeSelector == "theme-light" ? NewInvestmentWhite.src : NewInvestment.src

   // let imgMob = themeSelector == "theme-light" ? NewInvestmentWhiteMob.src : NewInvestmentMob.src

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

   return (
      <>
         <section className={style.investment}>
          

            <div dir="ltr" className={style.investment__img}>
               {/* <img src={imgHome.src} alt="New investment class" /> */}
               {/* { widthWindow == null ? "" : widthWindow < 575 ? 
            <img src={imgMob} alt="New investment class" /> : */}
            <img src={img} alt="New investment class" />
            {/* } */}
               <div className={cl(style.investment__info, style.info)}>
                  <div className={style.info__location}>
                     {/* Miami, FL */}
                     {data?.data?.attributes?.nic_addres}
                  </div>
                  <div className={style.info__name}>
                     {/* Biscayne Blvd */}
                     {data?.data?.attributes?.nic_street}
                  </div>
                  <div className={style.info__conditions}>
                     <div>
                        <span>
                           {/* Unit price */}
                           {data?.data?.attributes?.nic_number1_title}
                        </span>
                        {/* $100 */}
                        {data?.data?.attributes?.nic_number1_text}
                     </div>
                     <div>
                        <span>
                           {/* Yield */}
                           {data?.data?.attributes?.nic_number2_title}
                        </span>
                        {/* 12.5% */}
                        {data?.data?.attributes?.nic_number2_text}
                     </div>
                  </div>
               </div>
            </div>  <div className={style.investment__content}>
               <h2 className={style.investment__title}>
                  {/* New investment class */}
                  {data?.data?.attributes?.nic_title}
               </h2>
               <p className={style.investment__text}>
                  {/* A fraction of a whole unit, which will make the market more inclusive and open for those who were previously excluded from such investments */}
                  {data?.data?.attributes?.nic_text1}
               </p>
               {widthWindow == null ? "" : widthWindow > 1024 ?
               <div className={cl(
                  style.investment__access,
                  locale === 'ar' && style['investment__access--ar']
               )}>
                  <h3 className={style.investment__access_title}>
                     {/* dEquity offers one click access */}
                     {data?.data?.attributes?.nic_subtitle}
                  </h3>
                  <p className={style.investment__access_text}>
                     {/* To fractionalized & tokenized real world assets with ownership powered by a multi-blockchain solution, creating a more inclusive earning model and a faster and more transparent real estate market */}
                     {data?.data?.attributes?.nic_text2}
                  </p>
               </div>
               : null
            }
            </div>
            {widthWindow == null ? "" : widthWindow <= 1024 ?
               <div className={cl(
                  style.investment__access,
                  locale === 'ar' && style['investment__access--ar']
               )}>
                  <h3 className={style.investment__access_title}>
                     {/* dEquity offers one click access */}
                     {data?.data?.attributes?.nic_subtitle}
                  </h3>
                  <p className={style.investment__access_text}>
                     {/* To fractionalized & tokenized real world assets with ownership powered by a multi-blockchain solution, creating a more inclusive earning model and a faster and more transparent real estate market */}
                     {data?.data?.attributes?.nic_text2}
                  </p>
               </div>
               : null
            }
         </section>
      </>
   );
};



export default NewInvestmentClass;
