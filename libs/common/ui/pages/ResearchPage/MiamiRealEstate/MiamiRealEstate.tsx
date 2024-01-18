import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleModalEmailShowAction,
  toggleModalThanksShowAction,
  toggleAppThemeAction,
  changeAppLanguageAction,
  toggleScrollToHowAction,
  requestHomeFetchAction,
  setHomeFetchLoadingAction,
} from "@/src/store/actions/app";
import Link from "next/link";
import style from "./MiamiRealEstate.module.scss";
import cl from "classnames";
// import grafic from "../../../assets/imgs/MiamiRealEstate.svg";
import graficDark from "@/libs/common/ui/assets/imgs/newResearch/MiamiRealEstateDark.webp";
import graficWith from "@/libs/common/ui/assets/imgs/newResearch/MiamiRealEstateWith.webp";
import graficDarkEs from "@/libs/common/ui/assets/imgs/newResearch/spanish/MiamiRealEstateDarkEs.webp";
import graficWithEs from "@/libs/common/ui/assets/imgs/newResearch/spanish/MiamiRealEstateWithEs.webp";
import ReactSwipe from "react-swipe";
import { RootState } from "@/src/store/store";

export const MiamiRealEstate = ({ data }: { data: any }) => {
  const [widthWindow, setWidthWindow] = React.useState<number | null>(null);
  const [theme, setTheme] = useState("");

  const [img,setImg] = useState<any>()
  const themeSelector = useSelector(
    (state: RootState) => state.app.appReducer.appTheme
  );

  const {locale} = useRouter()
  React.useEffect(() => {
    if (themeSelector) {
      setTheme(themeSelector);
    }
  }, [themeSelector]);

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

  React.useEffect(()=>{

    if(theme === "theme-light"){
       setImg(graficWith.src)
       if(locale === "es"){
          setImg(graficWithEs.src)
       }
    }else{
       setImg(graficDark.src)
       if(locale === "es"){
          setImg(graficDarkEs.src)
       }
    }


 },[theme])
  return (
    <>
      <div className={cl(style.MiamiRealEstate,locale === "ar" && style.MiamiRealEstate_ar)}>
        {widthWindow == null ? (
          ""
        ) : widthWindow <= 1024 ? (
          <h2
            className={style.MiamiRealEstate__title}
            dangerouslySetInnerHTML={{
              __html: data?.data?.attributes?.miami_title,
            }}
          >
            {/* Miami real estate perfomance */}
          </h2>
        ) : null}
        <div className={style.MiamiRealEstate__content}>
          {widthWindow == null ? (
            ""
          ) : widthWindow > 1024 ? (
            <h2
              className={style.MiamiRealEstate__title}
              dangerouslySetInnerHTML={{
                __html: data?.data?.attributes?.miami_title,
              }}
            >
              {/* Miami real estate perfomance */}
            </h2>
          ) : null}
          <p className={style.MiamiRealEstate__text1}>
            {/* Global buyers are returning in mass to America's top international market. Foreign homebuyers purchased $6.8 billion in Miami residential properties in 2022, up 34% from $5.1 billion in 2021, according to 2022 report */}
            {data?.data?.attributes?.miami_text1}
          </p>
          <p className={style.MiamiRealEstate__text2}>
            {/* The Florida state economy one of the largest in the US, with 1.4 trillion (GSP) as of 2022 */}
            {data?.data?.attributes?.miami_text2}
          </p>
        </div>
        <div className={style.MiamiRealEstate__img}>
          <img
            src={img}
            alt={data?.data?.attributes?.miami_title}
          />
        </div>

        <div className={style.MiamiRealEstate__decor1}></div>
      </div>
    </>
  );
};

export default MiamiRealEstate;
