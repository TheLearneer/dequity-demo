import React, { useEffect, useRef, useState } from "react";

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

import style from "./InvestInYourScreen.module.scss";
import cl from "classnames";
import ArrowRightIcon from "../../../assets/imgs/Group 21.png";
// import ArrowIcon from "../../../assets/imgs/Arrow (Stroke).png";
import ArrowIcon from "../../../assets/imgs/Arrow (Stroke) (Stroke).png";
import Image from "next/image";

import HouseImg from "../../../assets/imgs/homepage/House.webp";
import HouseImgWhite from "../../../assets/imgs/homepage/HouseWhite.webp";

import HouseMobImg from "../../../assets/imgs/homepage/HouseMob.webp";
import HouseMobImgWhite from "../../../assets/imgs/homepage/HouseMobWhite.webp";

import Balc1Img from "../../../assets/imgs/homepage/animationBalc1New.webp";
import Balc2Img from "../../../assets/imgs/homepage/animationBalc2New.webp";
import Balc3Img from "../../../assets/imgs/homepage/animationBalc3New.webp";
import Balc4Img from "../../../assets/imgs/homepage/animationBalc4New.webp";

import Balc1ImgWhite from "../../../assets/imgs/homepage/animationBalc1NewWhite.webp";
import Balc2ImgWhite from "../../../assets/imgs/homepage/animationBalc2NewWhite.webp";
import Balc3ImgWhite from "../../../assets/imgs/homepage/animationBalc3NewWhite.webp";
import Balc4ImgWhite from "../../../assets/imgs/homepage/animationBalc4NewWhite.webp";

import BalconMobile4 from "../../../assets/imgs/homepage/BalconMobile4New.webp";
import BalconMobile3 from "../../../assets/imgs/homepage/BalconMobile3New.webp";

import BalconMobile4White from "../../../assets/imgs/homepage/BalconMobile4New_white.webp";
import BalconMobile3White from "../../../assets/imgs/homepage/BalconMobile3New_white.webp";

// Плашки

import BalconText1 from "../../../assets/imgs/homepage/Apartments_1.webp";
import BalconText2 from "../../../assets/imgs/homepage/Apartments_2.webp";
import BalconText3 from "../../../assets/imgs/homepage/Apartments_3.webp";
import BalconText4 from "../../../assets/imgs/homepage/Apartments_4.webp";

import BalconTextMob1 from "../../../assets/imgs/homepage/Apartments_1_mob.webp";
import BalconTextMob2 from "../../../assets/imgs/homepage/Apartments_2_mob.webp";
import BalconTextMob3 from "../../../assets/imgs/homepage/Apartments_3_mob.webp";
import BalconTextMob4 from "../../../assets/imgs/homepage/Apartments_4_mob.webp";

import BalconTextWhite1 from "../../../assets/imgs/homepage/Apartments_White_1.webp";
import BalconTextWhite2 from "../../../assets/imgs/homepage/Apartments_White_2.webp";
import BalconTextWhite3 from "../../../assets/imgs/homepage/Apartments_White_3.webp";
import BalconTextWhite4 from "../../../assets/imgs/homepage/Apartments_White_4.webp";

import BalconTextWhiteMob1 from "../../../assets/imgs/homepage/Apartments_1_mob_white.webp";
import BalconTextWhiteMob2 from "../../../assets/imgs/homepage/Apartments_2_mob_white.webp";
import BalconTextWhiteMob3 from "../../../assets/imgs/homepage/Apartments_3_mob_white.webp";
import BalconTextWhiteMob4 from "../../../assets/imgs/homepage/Apartments_4_mob_white.webp";

/*spanish*/

import BalconText1Es from "../../../assets/imgs/homepage/spanish/Apartments_1_es.webp";
import BalconText2Es from "../../../assets/imgs/homepage/spanish/Apartments_2_es.webp";
import BalconText3Es from "../../../assets/imgs/homepage/spanish/Apartments_3_es.webp";
import BalconText4Es from "../../../assets/imgs/homepage/spanish/Apartments_4_es.webp";

import BalconTextMob1Es from "../../../assets/imgs/homepage/spanish/Apartments_1_mob_es.webp";
import BalconTextMob2Es from "../../../assets/imgs/homepage/spanish/Apartments_2_mob_es.webp";
import BalconTextMob3Es from "../../../assets/imgs/homepage/spanish/Apartments_3_mob_es.webp";
import BalconTextMob4Es from "../../../assets/imgs/homepage/spanish/Apartments_4_mob_es.webp";

import BalconTextWhite1Es from "../../../assets/imgs/homepage/spanish/Apartments_White_1_es.webp";
import BalconTextWhite2Es from "../../../assets/imgs/homepage/spanish/Apartments_White_2_es.webp";
import BalconTextWhite3Es from "../../../assets/imgs/homepage/spanish/Apartments_White_3_es.webp";
import BalconTextWhite4Es from "../../../assets/imgs/homepage/spanish/Apartments_White_4_es.webp";

import BalconTextWhiteMob1Es from "../../../assets/imgs/homepage/spanish/Apartments_1_mob_white_es.webp";
import BalconTextWhiteMob2Es from "../../../assets/imgs/homepage/spanish/Apartments_2_mob_white_es.webp";
import BalconTextWhiteMob3Es from "../../../assets/imgs/homepage/spanish/Apartments_3_mob_white_es.webp";
import BalconTextWhiteMob4Es from "../../../assets/imgs/homepage/spanish/Apartments_4_mob_white_es.webp";

import type { RootState } from "@/src/store/store";
import { useSelector } from "react-redux";
import MobileMenuIcon from "../../../widgets/MobileMenuIcon/MobileMenuIcon";
import Link from "next/link";
import VideoIntro from "./components/VideoIntro";


export const InvestInYourScreen = ({ data }: { data: any }) => {
  let balconData = [
    {
      name: "text1",
      whiteImages: {
        en: BalconTextWhite1.src,
        es: BalconTextWhite1Es.src,
      },
      darkImages: {
        en: BalconText1.src,
        es: BalconText1Es.src,
      },
      whiteImagesMob: {
        en: BalconTextWhiteMob1.src,
        es: BalconTextWhiteMob1Es.src,
      },
      darkImagesMob: {
        en: BalconTextMob1.src,
        es: BalconTextMob1Es.src,
      },
    },
    {
      name: "text2",
      whiteImages: {
        en: BalconTextWhite2.src,
        es: BalconTextWhite2Es.src,
      },
      darkImages: {
        en: BalconText2.src,
        es: BalconText2Es.src,
      },
      whiteImagesMob: {
        en: BalconTextWhiteMob2.src,
        es: BalconTextWhiteMob2Es.src,
      },
      darkImagesMob: {
        en: BalconTextMob2.src,
        es: BalconTextMob2Es.src,
      },
    },
    {
      name: "text3",
      whiteImages: {
        en: BalconTextWhite3.src,
        es: BalconTextWhite3Es.src,
      },
      darkImages: {
        en: BalconText3.src,
        es: BalconText3Es.src,
      },
      whiteImagesMob: {
        en: BalconTextWhiteMob3.src,
        es: BalconTextWhiteMob3Es.src,
      },
      darkImagesMob: {
        en: BalconTextMob3.src,
        es: BalconTextMob3Es.src,
      },
    },
    {
      name: "text4",
      whiteImages: {
        en: BalconTextWhite4.src,
        es: BalconTextWhite4Es.src,
      },
      darkImages: {
        en: BalconText4.src,
        es: BalconText4Es.src,
      },
      whiteImagesMob: {
        en: BalconTextWhiteMob4.src,
        es: BalconTextWhiteMob4Es.src,
      },
      darkImagesMob: {
        en: BalconTextMob4.src,
        es: BalconTextMob4Es.src,
      },
    },
  ];

  const dispatch = useDispatch();

  const handleToggleModal = () => dispatch(toggleModalEmailShowAction());

  const [lastImg, setLastImg] = useState<any>();
  const [lastImgMob, setLastImgMob] = useState<any>();

  const [balconImgDesktop, setBalconImgDesktop] = useState<any>();
  const [balconImgMob, setBalconImgMob] = useState<any>();

  const list = data?.data?.attributes?.animation_list?.split(",");

  const locale = data?.data?.attributes?.locale;

  const themeSelector: string = useSelector(
    (state: RootState) => state.app.appReducer.appTheme
  );

  useEffect(() => {
    if (themeSelector === "theme-dark") {
      setLastImg(BalconText1.src);
      setLastImgMob(BalconTextMob1.src);
    } else {
      setLastImg(BalconTextWhite1.src);
      setLastImgMob(BalconTextWhiteMob1.src);
    }
  }, []);

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

  const animationTimeSec = 24;
  const animationTimeWordSec = 6;

  const [balcon1State, setBalcon1State] = useState<any>();
  const [balcon2State, setBalcon2State] = useState<any>();
  const [balcon3State, setBalcon3State] = useState<any>();
  const [balcon4State, setBalcon4State] = useState<any>();

  const [HouseImgState, setHouseImgState] = useState<any>();
  const [imageSrc, setImageSrc] = useState("text1");

  const [textState, setTextState] = useState<any>();
  const [textStateMob, setTextStateMob] = useState<any>();

  const [animationEnd, setAnimationEnd] = useState(true);
  const [firstPlayEnd, setFirstPlayEnd] = useState(false);

  const [wordAnimationEnd, setWordAnimationEnd] = useState(true);
  const [firstPlayWordEnd, setFirstPlayWordEnd] = useState(false);
  const [wordState, setWordState] = useState<any>();

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
        if (window.innerWidth > 992) {
          animWord();
        } else {
          animWordMob();
          // animWord()
        }
      }, 1000);
    } else {
      if (window.innerWidth > 992) {
        animWord();
      } else {
        animWordMob();
        // animWord()
      }
    }
  }, [wordAnimationEnd]);

  useEffect(() => {
    if (!animationEnd) {
      return;
    }

    setAnimationEnd(false);

    function animDesktop() {
      //DESKTOP ANIM
      //step1

      setTimeout(() => {
        setBalcon1State({ opacity: 1, top: "138px" });

        if (locale == "ar") {
          setTextState({ top: "100px", right: "400px", opacity: 1 });
        } else {
          setTextState({ top: "100px", right: "200px", opacity: 1 });
        }

        setImageSrc("text1");
      }, (tempMsTime / 100) * 2.5);

      setTimeout(() => {
        if (locale == "ar") {
          setTextState({ top: "0px", right: "400px", opacity: 0 });
        } else {
          setTextState({ top: "0px", right: "200px", opacity: 0 });
        }

        setBalcon1State(null);
      }, (tempMsTime / 100) * 20);

      setTimeout(() => {
        setTextState({
          top: "478px",
          right: "475px",
          opacity: 0,
          transitionDuration: "0s",
        });

        if (locale == "ar") {
          setImageSrc("text4");
        } else {
          setImageSrc("text2");
        }
      }, (tempMsTime / 100) * 25);

      // step2

      setTimeout(() => {
        setBalcon4State({ opacity: 1, top: "391px" });

        if (locale == "ar") {
          setTextState({ top: "255px", right: "155px", opacity: 1 });
        } else {
          setTextState({ top: "378px", right: "475px", opacity: 1 });
        }
      }, (tempMsTime / 100) * 27.5);

      setTimeout(() => {
        setTextState({ top: "278px", right: "475px", opacity: 0 });
        setBalcon4State(null);
      }, (tempMsTime / 100) * 45);

      setTimeout(() => {
        setTextState({
          top: "202px",
          right: "326px",
          opacity: 0,
          transitionDuration: "0s",
        });

        if (locale == "ar") {
          setImageSrc("text1");
        } else {
          setImageSrc("text3");
        }
      }, (tempMsTime / 100) * 50);

      // step3

      setTimeout(() => {
        setBalcon3State({ opacity: 1, top: "206px" });

        if (locale == "ar") {
          setTextState({ top: "102px", right: "280px", opacity: 1 });
        } else {
          setTextState({ top: "102px", right: "326px", opacity: 1 });
        }
      }, (tempMsTime / 100) * 52.5);

      setTimeout(() => {
        if (locale == "ar") {
          setTextState({ top: "2px", right: "280px", opacity: 0 });
        } else {
          setTextState({ top: "2px", right: "326px", opacity: 0 });
        }

        setBalcon3State(null);
      }, (tempMsTime / 100) * 70);

      setTimeout(() => {
        setTextState({
          top: "303px",
          right: "164px",
          opacity: 0,
          transitionDuration: "0s",
        });
      }, (tempMsTime / 100) * 75);

      // step4
      setTimeout(() => {
        setBalcon2State({ opacity: 1, top: "341px" });

        if (locale == "ar") {
          setTextState({ top: "203px", right: "364px", opacity: 1 });
        } else {
          setTextState({ top: "203px", right: "164px", opacity: 1 });
        }

        setImageSrc("text4");
      }, (tempMsTime / 100) * 77.5);

      setTimeout(() => {
        setBalcon2State(null);
        setTextState({ top: "103px", right: "164px", opacity: 0 });
      }, (tempMsTime / 100) * 95);

      setTimeout(() => {
        setTextState({
          top: "200px",
          right: "200px",
          opacity: 0,
          transitionDuration: "0s",
        });
      }, (tempMsTime / 100) * 99.9);

      //   //end

      setTimeout(() => {
        setAnimationEnd(true);
        setFirstPlayEnd(true);
      }, (tempMsTime / 100) * 100);
    }

    function animMobile() {
      //MOBILE ANIM
      // 1
      setTimeout(() => {
        setBalcon1State({ opacity: 1, top: "228px" });

        if (locale == "ar") {
          setImageSrc("text4");
          setTextStateMob({ top: "-80px", right: "100px", opacity: 1 });
        } else {
          setImageSrc("text1");
          setTextStateMob({ top: "50px", right: "150px", opacity: 1 });
        }
      }, (tempMsTime / 100) * 2.5);

      setTimeout(() => {
        setTextStateMob({ top: "-50px", right: "150px", opacity: 0 });
        setBalcon1State(null);
      }, (tempMsTime / 100) * 20);

      setTimeout(() => {
        setTextStateMob({
          top: "190px",
          right: "100px",
          opacity: 0,
          transitionDuration: "0s",
        });

        if (locale == "ar") {
          setImageSrc("text4");
        } else {
          setImageSrc("text2");
        }
      }, (tempMsTime / 100) * 25);

      //2
      setTimeout(() => {
        setBalcon4State({ opacity: 1, top: "421px" });

        if (locale == "ar") {
          setTextStateMob({ top: "130px", right: "100px", opacity: 1 });
        } else {
          setTextStateMob({ top: "90px", right: "100px", opacity: 1 });
        }
      }, (tempMsTime / 100) * 27.5);

      //
      setTimeout(() => {
        setTextStateMob({ top: "-10px", right: "100px", opacity: 0 });
        setBalcon4State(null);
      }, (tempMsTime / 100) * 45);

      setTimeout(() => {
        setTextStateMob({
          top: "130px",
          right: "140px",
          opacity: 0,
          transitionDuration: "0s",
        });

        if (locale == "ar") {
          setImageSrc("text4");
        } else {
          setImageSrc("text3");
        }
      }, (tempMsTime / 100) * 50);

      //3
      setTimeout(() => {
        setBalcon3State({ opacity: 1, top: "313px" });

        if (locale == "ar") {
          setTextStateMob({ top: "30px", right: "80px", opacity: 1 });
        } else {
          setTextStateMob({ top: "30px", right: "140px", opacity: 1 });
        }
      }, (tempMsTime / 100) * 52.5);

      setTimeout(() => {
        setTextStateMob({ top: "-70px", right: "140px", opacity: 0 });
        setBalcon3State(null);
      }, (tempMsTime / 100) * 70);

      setTimeout(() => {
        setTextStateMob({
          top: "125px",
          right: "90px",
          opacity: 0,
          transitionDuration: "0s",
        });

        if (locale == "ar") {
          setImageSrc("text2");
        } else {
          setImageSrc("text4");
        }
      }, (tempMsTime / 100) * 75);
      //4

      setTimeout(() => {
        setBalcon2State({ opacity: 1, top: "395px", left: "508px" });

        if (locale == "ar") {
          setTextStateMob({ top: "25px", right: "60px", opacity: 1 });
        } else {
          setTextStateMob({ top: "25px", right: "90px", opacity: 1 });
        }
      }, (tempMsTime / 100) * 77.5);
      //
      setTimeout(() => {
        setBalcon2State(null);
        setTextStateMob({ top: "-75px", right: "90px", opacity: 0 });
      }, (tempMsTime / 100) * 95);

      setTimeout(() => {
        setTextStateMob({
          top: "150px",
          right: "150px",
          opacity: 0,
          transitionDuration: "0s",
        });

        if (locale == "ar") {
          setImageSrc("text4");
        } else {
          setImageSrc("text1");
        }
      }, (tempMsTime / 100) * 99.9);

      //end

      setTimeout(() => {
        setAnimationEnd(true);
        setFirstPlayEnd(true);
      }, (tempMsTime / 100) * 100);
    }

    let tempMsTime = animationTimeSec * 1000;

    if (!firstPlayEnd) {
      setTimeout(() => {
        if (window.innerWidth > 992) {
          animDesktop();
        } else {
          animMobile();
        }
      }, 1000);
    } else {
      if (window.innerWidth > 992) {
        animDesktop();
      } else {
        animMobile();
      }
    }
  }, [animationEnd]);

  useEffect(() => {
    if (locale === "ar") {
      // && window.innerWidth > 992
      setHouseImgState({
        transform: "scaleX(-1)",
      });
    }
  }, [locale]);

  useEffect(() => {
    let foundedImgs = balconData.find((el) => el.name === imageSrc);

    if (!foundedImgs) {
    setBalconImgDesktop(lastImg)
    setBalconImgMob(lastImgMob)
    } else {
      if (locale === "es") {
        if (themeSelector === "theme-light") {
          setBalconImgDesktop(foundedImgs?.whiteImages.es);
          setBalconImgMob(foundedImgs?.whiteImagesMob.es);
        } else {
          setBalconImgDesktop(foundedImgs?.darkImages.es);
          setBalconImgMob(foundedImgs?.darkImagesMob.es);
        }
      } else {
        if (themeSelector === "theme-light") {
          setBalconImgDesktop(foundedImgs?.whiteImages.en);
          setBalconImgMob(foundedImgs?.whiteImagesMob.en);
        } else {
          setBalconImgDesktop(foundedImgs?.darkImages.en);
          setBalconImgMob(foundedImgs?.darkImagesMob.en);
        }
      }
    }
  }, [imageSrc,themeSelector]);

  return (
    <>
      <div
        style={HouseImgState ? { paddingLeft: 0 } : {}}
        className={style.invest_screen}
      >
        <div
          className={cl(
            style.invest_screen__text,
            style["invest_screen__text--" + locale]
          )}
        >
          <div
            style={animationText == "self" ? { gap: "0em" } : { gap: "0.3em" }}
            className={cl(
              style.invest_screen__title,
              style["invest_screen__title--" + locale]
            )}
          >
            {data?.data?.attributes?.animation_text1} {"  "}
            {/* <div style={animationText == "self" ? {marginLeft: "0em", display: "inline-block"} : {marginLeft: "0.3em", display: "inline-block"}}> */}
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
                      1
                  ]
                : animationText}
            </span>
            {/* </div> */}
            {/* Invest in your <span>wealth</span> */}
          </div>
          <div
            className={cl(
              style.invest_screen__subtitle,
              style["invest_screen__subtitle--" + locale]
            )}
          >
            {/* Real Estate investing for All */}
            {data?.data?.attributes?.animation_text2}
          </div>

          <div className={style.invest_screen__btn_wrapper}>
            {/* <Link href={`https://demo.dequity.io/${locale}/properties?utm_content=${themeSelector == "theme-light" ? "light" : "dark"}`} >
            <div
              className={
               cl(style.invest_screen__btn,
                  style["invest_screen__btn--" + locale])
              }
              // onClick={handleToggleModal}
              style={{ gap: "10px" }}
            >
            
             
              {data?.data?.attributes?.section1_btn}
              <img className={cl(style.invest_screen__btn_img,
                  style["invest_screen__btn_img--" + locale]
                  )} src={ArrowRightIcon.src}  alt="Arrow" />
             
              
            </div> </Link> */}

            {/* <VideoIntro url={data?.data?.attributes?.video_url} /> */}
            <div className={style.howItWorks_content}>
              <h2>{data?.data?.attributes?.video_label}</h2>
            </div>
          </div>

          <MobileMenuIcon />
          <div
            className={cl(
              style.invest_screen__link,
              style["invest_screen__link--" + locale]
            )}
            style={{ display: "flex" }} /* gap: "24px" */
          >
            <img
              src={ArrowIcon.src}
              alt="arrow"
              style={{ marginRight: "24px" }}
            />
            {data?.data?.attributes?.section1_btn2}
            {/* Passive income 11-15% */}
          </div>
        </div>

        <div
          style={HouseImgState ? HouseImgState : {}}
          className={style.invest_screen__img}
        >
          <div className={style.invest_screen__img_bg}>
            {widthWindow == null ? (
              ""
            ) : widthWindow < 992 ? (
              <div className={style.invest_screen__img_bg_test}>
                <img
                  className={style.invest_screen__img_bg_test_house}
                  src={
                    themeSelector == "theme-light"
                      ? HouseMobImgWhite.src
                      : HouseMobImg.src
                  }
                  alt="House"
                />
                <img
                  style={balcon1State ? balcon1State : {}}
                  className={style.invest_screen__img_bg_test_balcon1}
                  src={
                    themeSelector == "theme-light"
                      ? Balc2ImgWhite.src
                      : Balc2Img.src
                  }
                  alt="Balcony"
                />
                <img
                  style={balcon2State ? balcon2State : {}}
                  className={style.invest_screen__img_bg_test_balcon2}
                  src={
                    themeSelector == "theme-light"
                      ? BalconMobile4White.src
                      : BalconMobile4.src
                  }
                  alt="Balcony"
                />
                <img
                  style={balcon3State ? balcon3State : {}}
                  className={style.invest_screen__img_bg_test_balcon3}
                  src={
                    themeSelector == "theme-light"
                      ? BalconMobile3White.src
                      : BalconMobile3.src
                  }
                  alt="Balcony"
                />
                <img
                  style={balcon4State ? balcon4State : {}}
                  className={style.invest_screen__img_bg_test_balcon4}
                  src={
                    themeSelector == "theme-light"
                      ? Balc4ImgWhite.src
                      : Balc4Img.src
                  }
                  alt="Balcony"
                />
              </div>
            ) : (
              <>
                <div className={style.invest_screen__img_bg_test}>
                  <img
                    className={style.invest_screen__img_bg_test_house}
                    src={
                      themeSelector == "theme-light"
                        ? HouseImgWhite.src
                        : HouseImg.src
                    }
                    alt="House"
                  />

                  <img
                    style={balcon1State ? balcon1State : {}}
                    className={style.invest_screen__img_bg_test_balcon1}
                    src={
                      themeSelector == "theme-light"
                        ? Balc2ImgWhite.src
                        : Balc2Img.src
                    }
                    alt="Balcony"
                  />
                  <img
                    style={balcon2State ? balcon2State : {}}
                    className={style.invest_screen__img_bg_test_balcon2}
                    src={
                      themeSelector == "theme-light"
                        ? Balc1ImgWhite.src
                        : Balc1Img.src
                    }
                    alt="Balcony"
                  />
                  <img
                    style={balcon3State ? balcon3State : {}}
                    className={style.invest_screen__img_bg_test_balcon3}
                    src={
                      themeSelector == "theme-light"
                        ? Balc3ImgWhite.src
                        : Balc3Img.src
                    }
                    alt="Balcony"
                  />
                  <img
                    style={balcon4State ? balcon4State : {}}
                    className={style.invest_screen__img_bg_test_balcon4}
                    src={
                      themeSelector == "theme-light"
                        ? Balc4ImgWhite.src
                        : Balc4Img.src
                    }
                    alt="Balcony"
                  />
                </div>
              </>
            )}

            <div
              className={style.invest_screen__img_bg_text}
              style={{
                ...textState,
              }}
            >

              {
                balconImgDesktop &&    <Image
                style={
                  HouseImgState
                    ? {
                        ...HouseImgState,
                        minWidth: "274px",
                        width: "auto",
                        height: "176px",
                      }
                    : { minWidth: "274px", width: "auto", height: "176px" }
                }
                // src={imageSrc ? imageSrc : Balc1Img.src}
                src={balconImgDesktop}
                alt="Background Image"
                // width={295}
                // height={176}
                width={0}
                height={0}
                sizes="100vw"
                priority={true}
              />
              }
           
            </div>
            <div
              className={style.invest_screen__img_bg_text}
              style={{
                ...textStateMob,
              }}
            >
              <div style={{ position: "relative", width: "fit-content" }}>
                {
                  balconImgMob &&  <Image
                  className={cl(
                    style.invest_screen__img_balcon_text,
                    locale === "ar" && style.invest_screen__img_balcon_text_ar
                  )}
                  // src={imageSrc ? imageSrc : Balc1Img.src}
                  src={balconImgMob}
                  alt="Background Image"
                  // width={205}
                  // height={110}
                  width={190}
                  height={115}
                  priority={true}
                />
                }
               
              </div>
            </div>
          </div>
        </div>
        <div className={style.invest_screen__decor1}></div>
        <div className={style.invest_screen__decor2}></div>
      </div>
    </>
  );
};

export default InvestInYourScreen;
