import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import {
  toggleMenu,
  toggleModalEmailShowAction,
  toggleModalThanksShowAction,
  toggleAppThemeAction,
  changeAppLanguageAction,
  toggleScrollToHowAction,
  requestHomeFetchAction,
  setHomeFetchLoadingAction,
} from "@/src/store/actions/app";

import style from "./AnimationSkew.module.scss";
import cl from "classnames";
import ArrowRightIcon from "../../../assets/imgs/Group 21.png";
import ArrowIcon from "../../../assets/imgs/Arrow (Stroke).png";
import Image from "next/image";

import HouseImg from "../../../assets/imgs/Pic + animation.webp";
import HouseImgWhite from "../../../assets/imgs/AboutPage/AboutHouseWhite.webp";
import HouseImgAr from "../../../assets/imgs/Pic + animation_ar.webp";
import HouseImgWhiteAr from "../../../assets/imgs/Pic + animation_light_ar.webp";
import HouseImgEs from "../../../assets/imgs/Pic + animation_es.webp";
import HouseImgWhiteEs from "../../../assets/imgs/Pic + animation_light_es.webp";
import HouseMobImg from "../../../assets/imgs/Pic + animation_m.webp";
import HouseMobImgLight from "../../../assets/imgs/Pic + animation_m_light.webp";
import HouseMobImgEs from "../../../assets/imgs/Pic + animation_m_es.webp";
import HouseMobImgLightEs from "../../../assets/imgs/Pic + animation_m_light_es.webp";
// import HouseMobImgLightAr from "../../../assets/imgs/Pic + animation_m_light_ar.webp";
import HouseMobImgLightAr from "../../../assets/imgs/Pic + animation_m_light_ar.webp";
import HouseMobImgAr from "../../../assets/imgs/Pic + animation_m_ar.webp";

import Skew from "../../../assets/imgs/AboutPage/Skew.webp";
import SkewLight from "../../../assets/imgs/AboutPage/SkewLight.webp";

import MobileMenuIcon from "../../../widgets/MobileMenuIcon/MobileMenuIcon";
import bgMobDark from "@/libs/common/ui/assets/imgs/newResearch/bgResearchOpportunityDark.png";
import bgMobWith from "@/libs/common/ui/assets/imgs/newResearch/bgResearchOpportunityWith2.png";
import SkewBlock from "../../../widgets/SkewBlock/SkewBlock";

export const AnimationSkew = ({
  data,
  theme,
}: {
  data: any;
  theme: string;
}) => {
  const dispatch = useDispatch();

  const handleToggleModal = () => dispatch(toggleModalEmailShowAction());

  const list = data?.data?.attributes?.animation_list?.split(",");

  const locale = data?.data?.attributes?.locale;

  let animation_values = data?.data?.attributes?.animation_list?.split(",");

  const [animationText, setAnimationText] = React.useState(null);

  const [animationIndex, setAnimationIndex] = React.useState(0);

  // useEffect(() => {
  //   changeTextTitle();
  // }, [data]);

  async function changeTextTitle() {
    if (animation_values) {
      let tempIndex = animationIndex;

      if (animationIndex >= animation_values.length) {
        tempIndex = 0;
      } else if (
        widthWindow != null &&
        widthWindow < 575 &&
        animationIndex == animation_values.length - 1
      ) {
        tempIndex = 0;
      }

      setAnimationText(animation_values[tempIndex]);
      tempIndex++;

      setAnimationIndex(tempIndex);
    }
  }

  const [widthWindow, setWidthWindow] = useState<number | null>(null);

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

  const animationTimeWordSec = 6;

  const [HouseImgState, setHouseImgState] = useState<any>();

  const [wordAnimationEnd, setWordAnimationEnd] = useState(true);
  const [firstPlayWordEnd, setFirstPlayWordEnd] = useState(false);
  const [wordState, setWordState] = useState<any>();

  const [img, setImg] = useState<any>();
  const [imgMob,setImgMob] = useState<any>()

  useEffect(() => {
    if (!wordAnimationEnd) {
      return;
    }

    setWordAnimationEnd(false);

    let tempMsTime = animationTimeWordSec * 1000;

    function animWord() {
      setTimeout(() => {
        setWordState({ top: "100px", opacity: 0 });
      }, (tempMsTime / 100) * 0);

      setTimeout(() => {
        setWordState({ top: "0px", opacity: 1 });
      }, (tempMsTime / 100) * 10);

      setTimeout(() => {
        setWordState({ top: "-100px", opacity: 0 });
      }, (tempMsTime / 100) * 80);

      setTimeout(() => {
        changeTextTitle();

        setWordAnimationEnd(true);
        setFirstPlayWordEnd(true);
      }, (tempMsTime / 100) * 100);
    }

    function animWordMob() {
      setTimeout(() => {
        setWordState({ top: "40px", opacity: 0 });
      }, (tempMsTime / 100) * 0);

      setTimeout(() => {
        setWordState({ top: "0px", opacity: 1 });
      }, (tempMsTime / 100) * 10);

      setTimeout(() => {
        setWordState({ top: "-40px", opacity: 0 });
      }, (tempMsTime / 100) * 80);

      setTimeout(() => {
        changeTextTitle();

        setWordAnimationEnd(true);
        setFirstPlayWordEnd(true);
      }, (tempMsTime / 100) * 100);
    }

    if (!firstPlayWordEnd) {
      setTimeout(() => {
        if (window.innerWidth > 1370) {
          animWord();
        } else {
          animWordMob();
          // animWord()
        }
      }, 1000);
    } else {
      if (window.innerWidth > 1370) {
        animWord();
      } else {
        animWordMob();
        // animWord()
      }
    }
  }, [wordAnimationEnd]);

  // useEffect(() => {
  //   if (locale === "ar" && window.innerWidth > 1370) {
  //     setHouseImgState({
  //       transform: "scaleX(-1)",
  //     });
  //   }
  // }, [locale]);

  // let homeImgMobLight =
  //   locale !== "ar" ? HouseMobImgLight.src : HouseMobImgLightAr.src;
  // let homeImgMob = locale !== "ar" ? HouseMobImg.src : HouseMobImgAr.src;

  // let homeImg = locale !== "ar" ? HouseImg.src : HouseImgAr.src;
  // let homeImgLight = locale !== "ar" ? HouseImgWhite.src : HouseImgWhiteAr.src;

  useEffect(() => {
    if (theme === "theme-dark") {
      setImg(HouseImg.src);
      setImgMob(HouseMobImg.src)
      if (locale === "ar") {
        setImg(HouseImgAr.src);
        setImgMob(HouseMobImgAr.src)
      } else if (locale === "es") {
        setImg(HouseImgEs.src);
        setImgMob(HouseMobImgEs.src)
      }
    } else {
      setImg(HouseImgWhite.src);
      setImgMob(HouseMobImgLight.src)
      if (locale === "ar") {
        setImg(HouseImgWhiteAr.src);
        setImgMob(HouseMobImgLightAr.src)
      } else if (locale === "es") {
        setImg(HouseImgWhiteEs.src);
        setImgMob(HouseMobImgLightEs.src)
      }
    }
  }, [theme]);
  return (
    <>
      <div
        // style={HouseImgState ? { paddingLeft: 0 } : {}}
        style={widthWindow != null && locale === "ar" && widthWindow > 992 ? {paddingLeft: 0} : {}}
        className={cl(
          style.invest_screen,
          locale === "ar" && style.invest_screen_ar
        )}
      >
        <div
          className={cl(
            style.invest_screen__text,
            locale === "ar" && style.invest_screen__text_ar
          )}
        >
          <div
            className={cl(
              style.invest_screen__title,
              style.invest_screen__title_nowrap
            )}
          >
            {/* dEquity is <br/> re- */}
            {/* {data?.data?.attributes?.animation_text1} {"  "} */}
            <div
              className={style.invest_screen__title_inner}
              dangerouslySetInnerHTML={{
                __html: data?.data?.attributes?.animation_text1,
              }}
            ></div>
            <span
              style={wordState ? wordState : {}}
              className={
                style.invest_screen__title__testClass
                // locale === "ar" ? style.invest_screen__title__testClass : ""
              }
            >
              {animationText == null
                ? data?.data?.attributes?.animation_list?.split(",")[
                    data?.data?.attributes?.animation_list?.split(",").length -
                      (widthWindow != null && widthWindow < 575 ? 2 : 1)
                  ]
                : animationText}
              {/* {animationText == null
                ? data?.data?.attributes?.animation_list?.split(",")[
                    data?.data?.attributes?.animation_list?.split(",").length -
                      1
                  ]
                : animationText} */}
            </span>
          </div>
          <div
            className={cl(
              style.invest_screen__subtitle,
              locale === "es" && style.invest_screen__subtitle_es,
              locale === "pt" && style.invest_screen__subtitle_pt
            )}
          >
            {/* real estate investing for you */}
            {data?.data?.attributes?.animation_text2}
          </div>
        </div>

        <div
          // style={HouseImgState ? HouseImgState : {}}
          style={widthWindow != null && locale === "ar" && widthWindow > 992 ? {transform: "scaleX(-1)"} : {}}
          className={cl(
            style.invest_screen__img,
            locale === "ar" && style.invest_screen__img_ar
          )}
        >
          <div className={style.invest_screen__img_bg}>
            {widthWindow == null ? (
              ""
            ) : widthWindow < 991 ? (
              <div
                className={cl(
                  style.invest_screen__img_bg_test,
                  locale === "ar" && style.invest_screen__img_bg_test_ar
                )}
              >
                  <img
                    className={cl(
                      style.invest_screen__img_bg_test_house,
                      locale === "ar" &&
                        style.invest_screen__img_bg_test_house_mob_ar
                    )}
                    src={imgMob}
                    alt="House"
                  />
              </div>
            ) : (
              <>
                <div className={cl(style.invest_screen__img_bg_test)}>
                
                    <img
                      className={cl(
                        style.invest_screen__img_bg_test_house,
                        locale === "ar" &&
                          style.invest_screen__img_bg_test_house_ar
                      )}
                      src={img}
                      alt="House"
                    />
                </div>
                {/* <img className={style.invest_screen__img_bg_house} src={HouseImg.src} alt="House"/>
              <img className={style.invest_screen__img_bg_balcon1} src={Balc2Img.src} alt="House"/> */}
              </>
            )}
          </div>

          {/* <div className={style.invest_screen__img_text}>
            <div className={style.invest_screen__img_text__subtitle}>Miami, FL</div>
            <div className={style.invest_screen__img_text__title}>Biscayne Blvd</div>

            <div className={style.invest_screen__img_text__numbers}>

              <div className={style.invest_screen__img_text__number}>
                <div className={style.invest_screen__img_text__number_title}>Unit price</div>
                <div className={style.invest_screen__img_text__number_number}>$100</div>
              </div>

              <div className={style.invest_screen__img_text__number}>
                <div className={style.invest_screen__img_text__number_title}>Yield</div>
                <div className={style.invest_screen__img_text__number_number}>12.5%</div>
              </div>

            </div>
          </div> */}
        </div>

        <div className={style.invest_screen_wrapper}>
          <div className={style.invest_screen_line}></div>

          {/* <div
              className={style.invest_screen_header_mobile_btn}
              style={locale === "ar" ? { left: 0 } : {}}
              onClick={() => {
                dispatch(toggleMenu(true));
              }}
            >
              <div className={style.invest_screen_header_mobile_btn_btn}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              
            </div> */}

          <MobileMenuIcon />
        </div>

        <div className={style.invest_screen__decor1}></div>
        <div className={style.invest_screen__decor2}></div>
      </div>

      <div
        className={cl(
          style.invest_screen_skew,
          locale === "ar" && style.invest_screen_skew_ar
        )}
      >
        {/* <div className={   cl( theme === 'theme-dark' ?  style.dark_invest_screen_skew_wrapper : style.invest_screen_skew_wrapper, locale === "ar" && style.invest_screen_skew_wrapper_ar)}>
       
        <div style={{position:"relative"}}>
        {widthWindow == null ? "" : widthWindow < 575 ?
            <Image
                src={theme === 'theme-dark' ? bgMobDark.src : bgMobWith.src}
                width={100}
                height={100}
                alt="Background"
                className= {style.invest_screen_skew}
            /> :
            ( theme === "theme-light"  ?
                <img className={style.invest_screen_skew_bg } src={ SkewLight.src} alt="Background" />
                :
                <img className={style.invest_screen_skew_bg } src={ Skew.src} alt="Background" />
          )

        }
        </div>
      </div> */}

        <SkewBlock cancelHover>
          <div
            className={cl(
              style.invest_screen_skew_position,
              locale === "ar" && style.invest_screen_skew_position_ar
            )}
          >
            <div className={style.invest_screen_skew_position_title}>
              {/* Who We Are */}
              {data?.data?.attributes?.section1_item1_title}
            </div>
            <div className={style.invest_screen_skew_position_text}>
              {/* We are a hard-working team of technologists, programmers, real estate professionals and attorneys who have managed thousands of home sale transactions for consumers, banks, and investors */}
              {data?.data?.attributes?.section1_item1_text}
            </div>
          </div>
        </SkewBlock>
      </div>
    </>
  );
};

export default AnimationSkew;
