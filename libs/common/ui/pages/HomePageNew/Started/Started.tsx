import React, { useState, useEffect, use } from "react";
import { useRouter } from "next/router";

import style from "./Started.module.scss";
import cl from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleModalEmailShowAction,
  toggleModalThanksShowAction,
  toggleAppThemeAction,
  changeAppLanguageAction,
  toggleScrollToHowAction,
  requestHomeFetchAction,
  setHomeFetchLoadingAction,
} from "@/src/store/actions/app";

import Browse from "../../../../ui/assets/imgs/homepage/browse.webp";
import BrowseWhite from "../../../../ui/assets/imgs/homepage/browseWhite.webp";


import BrowseEs from "../../../../ui/assets/imgs/homepage/spanish/browseEs.webp";
import BrowseEsWhite from "../../../../ui/assets/imgs/homepage/spanish/browseEsWhite.webp";

import Appartment2 from "../../../../ui/assets/imgs/homepage/SelectLandingPage.webp";
import AppartmentWhite from "../../../../ui/assets/imgs/homepage/SelectLandingPageWhite.webp";
import Appartment2Es from "../../../../ui/assets/imgs/homepage/spanish/Appartment2Es.webp";
import AppartmentEsWhite from "../../../../ui/assets/imgs/homepage/spanish/AppartmentEsWhite.webp";

import InvestWhite from "../../../../ui/assets/imgs/homepage//InvestWhite.webp";
import Invest from "../../../../ui/assets/imgs/homepage/Invest.webp";
import InvestWhiteEs from "../../../../ui/assets/imgs/homepage/spanish/InvestWhiteEs.webp";
import InvestEs from "../../../../ui/assets/imgs/homepage/spanish/InvestEs.webp";

import type { RootState } from "@/src/store/store";
import {
  ImgBrowseMobSVG,
  ImgBrowseSVG,
  ImgBrowseWhiteMobSVG,
  ImgBrowseWhiteSVG,
} from "../../../assets/svg";
import Link from "next/link";

function ArrowImg() {
  return (
    <svg
      width="32"
      height="19"
      viewBox="0 0 32 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 9.29102H27.592"
        stroke="#0D6EFD"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M22.9482 2.1582L30.5 9.29039L22.9482 16.8421"
        stroke="#0D6EFD"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const Started = ({ data }: { data: any }) => {
  const dispatch = useDispatch();

  const { locale } = useRouter();
  const [widthWindow, setWidthWindow] = useState<number | null>(null);
  const [img1, setImg1] = useState<any>();
  const [img2, setImg2] = useState<any>();
  const [img3, setImg3] = useState<any>();

  const handleToggleModal = () => dispatch(toggleModalEmailShowAction());

  const themeSelector: string = useSelector(
    (state: RootState) => state.app.appReducer.appTheme
  );

  useEffect(() => {
    const handleResize = (event: any) => {
      setWidthWindow(event.target.innerWidth);
    };
    setWidthWindow(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (themeSelector === "theme-light") {
      if (locale === "es") {
        setImg1(BrowseEsWhite.src);
        setImg2(AppartmentEsWhite.src);
        setImg3(InvestWhiteEs.src);
      } else {
        setImg1(BrowseWhite.src);
        setImg2(AppartmentWhite.src);
        setImg3(InvestWhite.src);
      }
    } else {
      if (locale === "es") {
         setImg1(BrowseEs.src);
         setImg2(Appartment2Es.src);
         setImg3(InvestEs.src);
      } else {
        setImg1(Browse.src);
        setImg2(Appartment2.src);
        setImg3(Invest.src);
      }
    }
  }, [themeSelector]);

  return (
    <>
      <section className={style.started}>
        <div className={style.started__item}>
          <h2 className={style.started__title}>
            {/* Getting started is simple! */}
            {data?.data?.attributes?.gs_title}
          </h2>
          <div className={style.started__content}>
            <div className={style.started__name}>
              {/* Browse */}
              {data?.data?.attributes?.gs_section1_title}
            </div>
            <div className={style.started__text}>
              {/* View detailed financial data, inspection reports, appraisals and more */}
              {data?.data?.attributes?.gs_section1_text}
            </div>
          </div>
          <div className={style.started__img}>
             <img src={img1} alt="browse image" />
          </div>
        </div>
        <div className={style.started__item}>
          <div className={style.started__content}>
            <div className={style.started__name}>
              {/* Select */}
              {data?.data?.attributes?.gs_section2_title}
            </div>
            <div className={style.started__text}>
              {/* Select your ideal portfolio of rental properties and decide how much you want to invest */}
              {data?.data?.attributes?.gs_section2_text}
            </div>
          </div>
          <div className={style.started__img}>
            <img src={img2} alt="Apartment 2" />
          </div>
        </div>
        <div className={style.started__item}>
          <div className={style.started__content}>
            <div className={style.started__name}>
              {/* Invest */}
              {data?.data?.attributes?.gs_section3_title}
            </div>
            <div className={style.started__text}>
              {/* Invest in real state with a couple of clicks and receive weekly rent proceeds deposited directly to your wallet */}
              {data?.data?.attributes?.gs_section3_text}
            </div>
            <Link
              href={`https://demo.dequity.io/${locale}/properties?utm_content=${
                themeSelector == "theme-light" ? "light" : "dark"
              }`}
              className={cl(
                style.started__link,
                locale === "ar" && style.started__link_ar
              )}
            >
              {/* invest within minutes */}
              {data?.data?.attributes?.gs_section3_btn}
              <ArrowImg />
              {/* <svg width="32" height="19" viewBox="0 0 32 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 9.29053H27.592" stroke="#42BFF8" strokeWidth="3" strokeLinecap="round"/>
                  <path d="M22.9492 2.1582L30.5009 9.29039L22.9492 16.8421" stroke="#42BFF8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg> */}
            </Link>
          </div>
          <div className={style.started__img}>
            <img src={img3} alt="Apartment 2" />
          </div>
        </div>
        <div className={style.started__decor1}></div>
        <div className={style.started__decor2}></div>
        <div className={style.started__decor3}></div>
      </section>
    </>
  );
};

export default Started;
