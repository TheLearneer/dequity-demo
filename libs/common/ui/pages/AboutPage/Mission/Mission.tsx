import React,{useState,useEffect} from "react";
import { useRouter } from "next/router";
import style from "./Mission.module.scss";
import cl from "classnames";
import imgHome from "../../../assets/imgs/mission.png";
import { MissionLightSVG, MissionMobLightSVG, MissionLightTabletSVG, MissionTabletSVG, MissionMobSVG, MissionSVG } from "../../../assets/svg";

export const Mission = ({ data,theme }: { data: any,theme:string }) => {   
   const [widthWindow, setWidthWindow] = useState<number | null>(null);

   const { locale } = useRouter();
   

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
      <div className={style.wrapper}>
        <section className={style.vision}>

            <div dir="ltr" className={cl(style.vision__img,
           locale === "ar" && style.vision__img_ar)}>
            {widthWindow == null ? "" : 
            (widthWindow < 1025 && widthWindow >= 525) ? 
            theme === "theme-dark" ?  <MissionTabletSVG /> : <MissionLightTabletSVG />
            :
            widthWindow < 525 ? 
            theme === "theme-dark" ?  <MissionMobSVG /> : <MissionMobLightSVG />
            :
            theme === "theme-dark" ?  <MissionSVG /> : <MissionLightSVG />
            }
               
              
            </div>

            <div className={cl(style.vision__content,
            locale === "ar" && style.vision__content_ar)}>
               <h2 className={style.vision__title}>
                  {/* Mission */}
                  {data?.data?.attributes?.mission_title}
               </h2>
               <p className={style.vision__text}>
                  {/* Our mission is to streamline and simplify the global investing process and ensure equality of opportunity by combining Real Estate and DeFi with pioneering NFT technology, (r)evolutionizing how real estate is bought, sold and managed */}
                  {data?.data?.attributes?.mission_text}
               </p>

            </div>
            
            

            
         </section>

         <div className={style.decor1}></div>
         <div className={style.decor2}></div>
      </div>
   );
};



export default Mission;
