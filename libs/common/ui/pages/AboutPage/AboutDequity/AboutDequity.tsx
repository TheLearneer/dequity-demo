import React, { useEffect, useRef, useState } from "react";
import style from "./AboutDequity.module.scss";
import { useRouter } from "next/router";
import AbourDequityLightMob from "../../../assets/imgs/AboutDequityLightMob.png"
import AbourDequityMob from "../../../assets/imgs/AboutDequityMob.png"

import { AboutDequitySVG, AboutDequityMobSVG, AboutDequityTabletSVG, AboutDequityLightTabletSVG,  AboutDequityLightSVG, AboutDequityLightMobSVG } from "../../../assets/svg";
import cl from "classnames";


export const AboutDequity = ({ data, theme }: { data: any, theme: string }) => {
    const [widthWindow, setWidthWindow] = React.useState<number | null>(null);

    const { locale } = useRouter();

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
            <div className={style.ImmediateRent}>
                {/* <div dir="ltr" className={style.vision__img}>
            {widthWindow == null ? "" : widthWindow < 991 ? 
            theme === "theme-dark" ?  <MissionMobSVG /> : <MissionMobLightSVG />
            :
            theme === "theme-dark" ?  <MissionSVG /> : <MissionLightSVG />
            }
               
              
            </div>   */}




                <div className={cl(style.ImmediateRent__img,
                    locale === "ar" && style.ImmediateRent__img_ar
                )}>
                    {widthWindow == null ? "" : (widthWindow < 1025 && widthWindow >= 525 ) ?
                        theme === "theme-light" ? <AboutDequityLightTabletSVG /> : <AboutDequityTabletSVG />
                        : widthWindow < 525 ?
                        theme === "theme-light" ? <AboutDequityLightMobSVG /> : <AboutDequityMobSVG />
                        :
                        theme === "theme-light" ? <AboutDequityLightSVG /> : <AboutDequitySVG />
                    }
                </div>

                <div className={cl(style.ImmediateRent__right_side,
                    locale === "ar" && style.ImmediateRent__right_side_ar
                )}>
                    <div className={style.ImmediateRent__content}>
                        <h2 className={style.ImmediateRent__title}>
                            {/* About dEquity */}
                            {data?.data?.attributes?.aboutDequity_title}
                        </h2>
                        <p className={style.ImmediateRent__text1}>
                            {/* dEquity is a FinTech project that transforms Real World Assets into Web3 financial instruments using blockchain, cryptocurrency and NFTs, creating a more inclusive class of investors */}
                            {data?.data?.attributes?.aboutDequity_text}
                        </p>
                    </div>

                    {/* <div className={style.ImmediateRent__circle}></div> */}
                </div>


            </div>
        </>
    );
};



export default AboutDequity;
