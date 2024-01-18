import React, { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

import { useDispatch, useSelector } from "react-redux";
// import { toggleModalEmailShow, toggleModalThanksShow, toggleScrollToHow } from '@/src/store/AppSlice';
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
import Link from "next/link";
import type { RootState } from "@/src/store/store";

import style from "./Header.module.scss";
import cl from "classnames";
// import LogoDark from "../../assets/imgs/Logo.svg";
// import LogoDark from "../../assets/imgs/blue_logo.svg";
import LogoDark from "../../assets/imgs/LogoNewWhite.svg";
import LogoLight from "../../assets/imgs/LogoNew.svg";
// import LogoLight from "../../assets/imgs/LogoNew.svg";

import CloseIcon from "../../assets/imgs/close_icon.png";
import BackIcon from "../../assets/imgs/back_icon.svg";
// import SunSvg from "../../assets/imgs/Black.svg";
// import MoonSvg from "../../assets/imgs/White.svg";
import { getCookie, setCookie } from "cookies-next";
// import LogoLight from "../../assets/imgs/logo-light.svg";

function SunSvg() {
  return (
    <svg width="19" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.70112 0.565992C8.56049 0.650382 8.4515 0.776967 8.4058 0.896519C8.38119 0.959811 8.36713 1.38528 8.36713 2.0393C8.36713 3.23834 8.38119 3.29812 8.6519 3.47745C8.96832 3.6849 9.4113 3.56535 9.56599 3.23131C9.62576 3.09769 9.63279 2.98869 9.63279 2.0393C9.63279 1.38528 9.61872 0.959811 9.59411 0.896519C9.54841 0.776967 9.40075 0.615219 9.27418 0.54841C9.13707 0.478085 8.82769 0.485118 8.70112 0.565992Z" fill="white"/>
      <path d="M2.71748 3.04743C2.46786 3.19863 2.35888 3.54322 2.4749 3.81397C2.54521 3.97572 4.03588 5.44551 4.15893 5.47716C4.31362 5.51232 4.60191 5.47364 4.70387 5.39628C4.92887 5.23102 5.0238 4.9673 4.957 4.71061C4.92184 4.58051 4.80582 4.4469 4.17299 3.80694C3.76165 3.39554 3.37844 3.03688 3.31515 3.00875C3.13585 2.93139 2.88624 2.94546 2.71748 3.04743Z" fill="white"/>
      <path d="M14.6773 3.00829C14.621 3.03642 14.2378 3.39508 13.8265 3.80648C13.1936 4.44644 13.0776 4.58005 13.0425 4.71015C12.9722 4.98091 13.0776 5.24814 13.3202 5.40989C13.4503 5.49779 13.7034 5.51889 13.8757 5.4556C14.0058 5.40637 15.4613 3.95768 15.5246 3.81351C15.6441 3.54276 15.5316 3.19465 15.2785 3.04697C15.1062 2.94851 14.8496 2.93093 14.6773 3.00829Z" fill="white"/>
      <path d="M8.27893 5.01429C8.14533 5.0389 7.91329 5.09165 7.76915 5.13384C6.15192 5.58744 4.91086 6.92713 4.54523 8.62196C4.45734 9.04039 4.45734 9.96165 4.54523 10.3801C4.93196 12.1769 6.30309 13.5588 8.08556 13.9491C8.45823 14.03 9.21763 14.0581 9.59381 14.0018C11.088 13.7873 12.3361 12.9048 13.0216 11.5756C13.3486 10.9462 13.4927 10.4012 13.5244 9.68035C13.5736 8.56218 13.2431 7.54599 12.5365 6.66693C11.8966 5.86874 10.9403 5.28152 9.91374 5.05297C9.56568 4.97561 8.61292 4.95451 8.27893 5.01429ZM9.53053 6.28365C10.7505 6.49463 11.6927 7.2893 12.0829 8.42857C12.4205 9.41663 12.2798 10.4715 11.6997 11.3471C11.3271 11.9026 10.7294 12.3597 10.0719 12.5848C9.53756 12.7641 8.99614 12.8133 8.46878 12.7184C7.74805 12.5918 7.15741 12.2894 6.67576 11.7971C6.18707 11.3013 5.90581 10.7423 5.78276 10.032C5.68784 9.50454 5.73706 8.96304 5.91636 8.42857C6.42966 6.93064 7.97658 6.00939 9.53053 6.28365Z" fill="white"/>
      <path d="M0.386425 8.90564C0.273921 8.95135 0.112198 9.10255 0.048915 9.22562C0.0207892 9.27836 -0.000305176 9.40495 -0.000305176 9.50692C-0.000305176 9.75657 0.108682 9.94294 0.312594 10.0519C0.463771 10.1328 0.484865 10.1328 1.52552 10.1328C2.48883 10.1328 2.59782 10.1258 2.73141 10.066C3.19197 9.85503 3.19197 9.14475 2.73141 8.93377C2.59782 8.874 2.49234 8.86696 1.52904 8.87048C0.917299 8.87048 0.43916 8.88454 0.386425 8.90564Z" fill="white"/>
      <path d="M15.2683 8.93377C15.1769 8.97597 15.0855 9.05684 15.0222 9.15178C14.8147 9.46824 14.9343 9.91129 15.2683 10.066C15.4019 10.1258 15.5109 10.1328 16.4601 10.1328C17.114 10.1328 17.5394 10.1187 17.6027 10.0941C17.7222 10.0484 17.884 9.90074 17.9508 9.77416C17.9789 9.72141 18 9.59834 18 9.49989C18 9.40143 17.9789 9.27836 17.9508 9.22562C17.884 9.09904 17.7222 8.95135 17.6027 8.90564C17.5394 8.88103 17.114 8.86696 16.4601 8.86696C15.5109 8.86696 15.4019 8.874 15.2683 8.93377Z" fill="white"/>
      <path d="M4.09538 13.5584C3.95476 13.6252 2.50979 15.0809 2.46057 15.2075C2.36213 15.4783 2.47815 15.8088 2.72074 15.953C2.89301 16.0549 3.13559 16.069 3.31489 15.9917C3.37818 15.9635 3.76139 15.6049 4.17273 15.1935C4.80556 14.5535 4.92158 14.4199 4.95674 14.2898C5.02705 14.019 4.92158 13.7518 4.67899 13.5901C4.54188 13.4951 4.26765 13.4811 4.09538 13.5584Z" fill="white"/>
      <path d="M13.3425 13.5647C13.2863 13.5928 13.2089 13.6455 13.1702 13.6772C13.005 13.8249 12.9593 14.187 13.0753 14.4156C13.1632 14.5808 14.4957 15.9065 14.6574 15.9873C14.8156 16.0682 15.1531 16.0471 15.2832 15.9487C15.452 15.8221 15.5152 15.7025 15.5328 15.4845C15.5434 15.3263 15.5328 15.2489 15.4766 15.1399C15.3887 14.9676 14.0105 13.5963 13.8769 13.5471C13.7328 13.4908 13.4656 13.5014 13.3425 13.5647Z" fill="white"/>
      <path d="M8.79253 15.4426C8.62729 15.5129 8.49721 15.6325 8.43393 15.7731C8.37416 15.9032 8.36713 16.0193 8.36713 16.9616C8.36713 17.6157 8.38119 18.0411 8.4058 18.1044C8.4515 18.224 8.59916 18.3857 8.72573 18.4525C8.84878 18.5158 9.15113 18.5158 9.27418 18.4525C9.40075 18.3857 9.54841 18.224 9.59411 18.1044C9.61872 18.0411 9.63279 17.6157 9.63279 16.9616C9.63279 15.7661 9.61872 15.7028 9.35505 15.527C9.19684 15.4215 8.93316 15.3828 8.79253 15.4426Z" fill="white"/>
    </svg>
  )
}

function MoonSvg() {
  return (
    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.67169 12.8685C8.0272 12.8685 12.3687 8.52696 12.3687 3.17144C12.3687 2.53572 12.3075 1.91381 12.1904 1.31146C12.1887 1.30266 12.1893 1.29581 12.1908 1.29013C15.3119 2.61144 17.5001 5.70216 17.5001 9.30279C17.5001 14.106 13.6063 17.9998 8.80303 17.9998C5.2024 17.9998 2.11169 15.8116 0.790378 12.6905C0.796054 12.689 0.802901 12.6885 0.811701 12.6902C1.41406 12.8072 2.03596 12.8685 2.67169 12.8685Z" stroke="white" strokeLinejoin="round"/>
    </svg>

  )
}



export const HeaderNew = ({
  data,
  closeMenu,
  appTheme
}: {
  data: any;
  closeMenu?: any;
  appTheme:string
}) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { locale } = useRouter();
  
  const mobSelector = useSelector((state: RootState) => state.app.appReducer.mobileMenuShow);

  const themeSelector:string = useSelector((state: RootState) => state.app.appReducer.appTheme);

  let initial = appTheme === "theme-dark" ? true : false
  const [initTheme, setTheme] = useState<boolean>(initial)

  const menuRef = useRef<any>(null)
  const insideRef = useRef<any>(null)

  // const [langMenyActive, setLangMenuActive] = useState(false);

  const list = data?.data?.attributes?.Navigation?.split(",");

  const [langMenuShow, setLangMenuShow] = React.useState(false);
  const [mobileMenuLangShow, setMobileMenuLangShow] = useState(false);

  const refLangBtn = useRef<HTMLDivElement>(null);
  const refLangGlobe = useRef<HTMLImageElement>(null);
  const refLangGlobeActive = useRef<HTMLImageElement>(null);

  // console.log(router,"AA");
  

  useEffect(()=>{
    
      let theme = initTheme ? "theme-dark" : "theme-light"
      let themeName = initTheme ? "dark" : "light"
      dispatch(toggleAppThemeAction(theme));

      setCookie('theme', theme, {
        maxAge: 60 * 60 * 24 * 7,
        path:"/"
      });

      router.push({
        // pathname,
        ...router,
        query: {
          ...router.query,
          utm_content: themeName
          },
      })
  },[initTheme])

  function toogleLangMenu() {
    setLangMenuShow(!langMenuShow);
  }

  function toggleTheme() {
    closeMenu ? closeMenu() : null;
  }

  function showEmailModal() {
    dispatch(toggleModalEmailShowAction());
    closeMenu ? closeMenu() : null;
  }

  function changeLang(lang: string) {
    dispatch(changeAppLanguageAction(lang));
    toogleLangMenu();
    handlerToggleMenu(false);
  }

  // React.useEffect(() => {
  //   if (langMenuShow) {
  //     document.addEventListener("click", closeLangMenu);
  //   }
  //   // document.addEventListener('click', closeLangMenu);

  //   return () => document.removeEventListener("click", closeLangMenu);
  // }, [langMenuShow]);

  // function closeLangMenu(e: any) {
  //   let tempShow = false;
    
    // const iterator = e.target.classList.values();


    // for (const value of iterator) {
    //   if (
    //     value == refLangBtn?.current?.className ||
    //     value == refLangGlobe?.current?.className ||
    //     value == refLangGlobeActive?.current?.className
    //   ) {
    //     tempShow = true;
    //   }
    // }

  //   if (!tempShow) {
  //     setLangMenuShow(false);
  //     setMobileMenuLangShow(false);
  //   }
  // }

   useEffect(() => {
    const closeWhenDocumentClick = (event:any) => {
      if (!insideRef.current && menuRef.current && !menuRef.current.contains(event.target)) {
        setLangMenuShow(false);
      }
      insideRef.current = false;
    };

    if (langMenuShow) {
      document.addEventListener("mousedown", closeWhenDocumentClick);
    }

    return () => {
      document.removeEventListener("mousedown", closeWhenDocumentClick);
    };
  }, [langMenuShow]);
  
  const navList = [
    {
      title: list ? list[0] : "",
      link: `https://demo.dequity.io/${locale}/properties?utm_content=${initTheme ? "dark" : "light"}`,
      activeColor: false,
    },
    {
      title: list ? list[1] : "",
      link: "/research",
      activeColor: true,
    },
    {
      title: list ? list[2] : "",
      link: "/about",
      activeColor: true,
    },
    {
      title: list ? list[3] : "",
      link: "/learn",
      activeColor: true,
    },
     {
       title: list ? list[4] : "",
       link: "https://blog.dequity.io/",
       activeColor: true,
       target: "_blank"
    },
    //  {
    //     title: list ? list[5] : "",
    //     link: "/faq",
    //     activeColor: true
    // },
  ];
  const langList = new Map([
    ["ar", "Arabic"],
    ["en", "English"],
    ["es", "Spanish"],
    ["pt", "Portuguese"],
    ["ja", "Japanese"],
    ["zh", "Chinese"],
    ["ko", "Korean"],
  ]);


  // React.useEffect(()=>{
  //   console.log(mobSelector);
  // },[mobSelector]);

  function handlerToggleMenu(value : boolean) {
    dispatch(toggleMenu(value));
  }


  function handlerClick() {
   const toStart = document.querySelector('.container-fluid'); 
   smoothScroll(toStart);
   handlerToggleMenu(false);
}

function smoothScroll(elem: any) {
   return new Promise<void>((resolve) => {
     if (!(elem instanceof Element)) {
       throw new TypeError('Argument 1 must be an Element');
     }
     let same = 0; // a counter
     let lastPos: any = null; // last known Y position
     // pass the user defined options along with our default
     const scrollOptions = Object.assign({ behavior: 'smooth' });

     // let's begin
     elem.scrollIntoView(scrollOptions);
     requestAnimationFrame(check);

     // this function will be called every painting frame
     // for the duration of the smooth scroll operation
     function check() {
       // check our current position
       const newPos = elem.getBoundingClientRect().top;

       if (newPos === lastPos) { // same as previous
         if (same++ > 2 || Math.floor(lastPos) == 0) { // if it's more than two frames
           /* @todo: verify it succeeded
           * if(isAtCorrectPosition(elem, options) {
           *   resolve();
           * } else {
           *   reject();
           * }
           * return;
           */
           if (lastPos < 0) {
            smoothScroll(elem);
          }
           return resolve(); // we've come to an halt
         }
       }
       else {
         same = 0; // reset our counter
         lastPos = newPos; // remember our current position
       }
       // check again next painting frame
       requestAnimationFrame(check);
     }
   });
 }
//  console.log(langMenuShow,"langMenuShow");
 function checkActiveBtn(link: string) {
   // var pageActive = ["/property", "/payment"].includes(router.asPath)
   //   ? "/market"
   //   : router.asPath;
   var pageActive = router.asPath;

   return pageActive === link;
 }

  return (
    <>
      <header
        className={
          locale === 'es' ?
          cl(
            style.header,
            style.header_es
          ) :
            style.header
      }
      >
        <Link className={ cl(style.header__logo, locale == "ar" && style.header__logo_ar) } href="/">
            {" "}
            <img src={ initTheme ? LogoDark.src : LogoLight.src } alt="dequity.io logo dark" />
          </Link>
        <div className={style.header__navigation}>
          
          <div
            className={cl(
              style.header__nav,
              langMenuShow && style.header__lang_menu_active
            )}
          >
            {navList?.map((el, i) => {
              return (
                <Link href={el.link} target={el.target} key={i}>
                  <div className={cl(style.header__nav_item,
                     checkActiveBtn(el.link) && style["header__nav_item--active"]
                     )}>{el.title}</div>
                </Link>
              );
            })}

           
          </div>
        </div>

        <div className={style.header__control}>
        <div
              // className={cl(
              //   style.header__nav_item,
              //   !langMenuShow && style.header__lang_menu_active
              // )}
              className={cl(style.header__nav_item, style.header__nav_item_lang)}
              onClick={() => {

                
                
                
                setLangMenuShow(!langMenuShow);
              }}
              // ref={refLangBtn}
            >
              {/* <img onClick={()=>{setLangMenuShow((prev)=>!prev)}} ref={refLangGlobe} className={cl(style.header__nav_item_globe_icon , style.header__nav_item_globe_icon_noactive)}  src={GlobeIcon.src} alt="globe"/>
            <img onClick={()=>{setLangMenuShow((prev)=>!prev)}} ref={refLangGlobeActive} className={cl(style.header__nav_item_globe_icon , style.header__nav_item_globe_icon_active)}  src={GlobeIconActive.src} alt="globe"/> */}
              {/* EN */}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7" cy="7" r="6.5" stroke="#A8B3BC" />
                <path d="M0.777344 7H13.2218" stroke="#A8B3BC" />
                <path
                  d="M6.22266 0.77771C6.22266 0.77771 4.27821 3.11104 4.27821 6.99993C4.27821 10.8888 6.22266 13.2222 6.22266 13.2222"
                  stroke="#A8B3BC"
                />
                <path
                  d="M7.77734 0.77771C7.77734 0.77771 9.72179 3.11104 9.72179 6.99993C9.72179 10.8888 7.77734 13.2222 7.77734 13.2222"
                  stroke="#A8B3BC"
                />
              </svg>
              {router.locale?.toUpperCase()}

              <div

               ref={menuRef}
                className={style.header__lang_menu}
                style={
                  langMenuShow ? { display: "block" } : { display: "none" }
                }
              >
                <Link href={router.pathname} locale={"en"} legacyBehavior>
                  <div
                  ref={insideRef}
                    className={style.header__lang_menu_item}
                    onClick={() => {
                      changeLang("EN");
                    }}
                  >
                    English
                  </div>
                </Link>
                <Link href={router.pathname} locale={"es"} legacyBehavior>
                  <div
                    className={style.header__lang_menu_item}
                    onClick={() => {
                      changeLang("ES");
                    }}
                  >
                    Spanish
                  </div>
                </Link>
                <Link href={router.pathname} locale={"pt"} legacyBehavior>
                  <div
                    className={style.header__lang_menu_item}
                    onClick={() => {
                      changeLang("POR");
                    }}
                  >
                    Portuguese
                  </div>
                </Link>
                <Link href={router.pathname} locale={"ja"} legacyBehavior>
                  <div
                    className={style.header__lang_menu_item}
                    onClick={() => {
                      changeLang("JP");
                    }}
                  >
                    Japanese
                  </div>
                </Link>
                <Link href={router.pathname} locale={"zh"} legacyBehavior>
                  <div
                    className={style.header__lang_menu_item}
                    onClick={() => {
                      changeLang("CH");
                    }}
                  >
                    Chinese
                  </div>
                </Link>
                <Link href={router.pathname} locale={"ar"} legacyBehavior>
                  <div
                    className={style.header__lang_menu_item}
                    onClick={() => {
                      changeLang("AR");
                    }}
                  >
                    Arabic
                  </div>
                </Link>
                <Link href={router.pathname} locale={"ko"} legacyBehavior>
                  <div
                    className={style.header__lang_menu_item}
                    onClick={() => {
                      changeLang("KOR");
                    }}
                  >
                    Korean
                  </div>
                </Link>

                {/* <div className={style.header__lang_menu_item} onClick={() => {changeLang('AR')}}>Arabic</div>
              <div className={style.header__lang_menu_item} onClick={() => {changeLang('EN')}}>English</div>
              <div className={style.header__lang_menu_item} onClick={() => {changeLang('ES')}}>Spanish</div>
              <div className={style.header__lang_menu_item} onClick={() => {changeLang('POR')}}>Portuguese</div>
              <div className={style.header__lang_menu_item} onClick={() => {changeLang('JP')}}>Japanese</div>
              <div className={style.header__lang_menu_item} onClick={() => {changeLang('CH')}}>Chinese</div>
              <div className={style.header__lang_menu_item} onClick={() => {changeLang('KOR')}}>Korean</div> */}
              </div>
            </div>

            <div className={style.header__nav_item}>

             <div className={style.header__theme_switch} onClick={()=> {
                toggleTheme()
                setTheme((bool) => !bool)
              }}>
              <div  className={ themeSelector == "theme-light" ? cl(style.header__theme_switch_light, style.header__theme_switch_icon, style.header__theme_switch_icon_active) : cl(style.header__theme_switch_light, style.header__theme_switch_icon)}>
                {/* <img src={SunSvg.src} /> */}
                { themeSelector == "theme-light" ? <MoonSvg /> : <SunSvg/>}
              </div>
              
             </div>

            

            </div>
        </div>

        <div className="header__invest"> 
        <Link href={`https://demo.dequity.io/${locale}/properties?utm_content=${themeSelector == "theme-light" ? "light" : "dark"}`}>
          <div className={style.header__invest_btn}>
            {/* Invest in your wealth */}
               {data?.data?.attributes?.ModalBtn}
          </div>
        </Link>
        </div>
      </header>

      {/* <div
        className={style.header_mobile_btn}
        style={locale === "ar" ? { left: 0 } : {}}
        onClick={() => {
          setMobileMenuShow((prev) => !prev);
        }}
      >
        <div className={style.header_mobile_btn_btn}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div> */}

      <div
        className={cl(style.header_mobile_menu,
         mobSelector && style.header_mobile_menu_open
         )}
      >
        <Link
          className={style.header_mobile_menu_logo}
          href="/"
          onClick={() => handlerClick()}
        >
           <img src={ initTheme ? LogoDark.src : LogoLight.src } alt="dequity.io logo dark" />
        </Link>
        <div className={style.header_mobile_menu_nav}>
          {navList?.map((el, i) => {
            return (
              <Link
                href={el.link}
                key={i}
                onClick={() => handlerClick()}
              >
                <div className={cl(style.header_mobile_menu_nav_item,
                  checkActiveBtn(el.link) && style["header_mobile_menu_nav_item--active"]
                )}>
                  <div style={{ width: "100%" }}>{el.title}</div>
                </div>
              </Link>
            );
          })}
        </div>
        <div className={style.header_mobile_menu_setting}>
          <div
            className={style.header_mobile_menu_lang}
            onClick={() => setMobileMenuLangShow((prev) => !prev)}
          >
            {/* <img  ref={refLangGlobe} className={cl(style.header__nav_item_globe_icon , style.header__nav_item_globe_icon_noactive)}  src={GlobeIcon.src} alt="globe"/> */}

            <svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="11" cy="11.9727" r="10.5" stroke="#99A6AF"/>
            <path d="M1.22168 11.9727H20.7772" stroke="#99A6AF"/>
            <path d="M9.77832 2.19531C9.77832 2.19531 6.72276 5.86198 6.72276 11.9731C6.72276 18.0842 9.77832 21.7509 9.77832 21.7509" stroke="#99A6AF"/>
            <path d="M12.2217 2.19531C12.2217 2.19531 15.2772 5.86198 15.2772 11.9731C15.2772 18.0842 12.2217 21.7509 12.2217 21.7509" stroke="#99A6AF"/>
            </svg>


            {/* EN */}
            {/* {router.locale?.toUpperCase()} */}
            {langList.get(locale ?? "en")}
          </div>
          <div className={style.header_mobile_menu_theme} onClick={()=> { 
            toggleTheme()
            setTheme((bool) => !bool)
          }}>
            <div className={style.header_mobile_menu_theme_day}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.70118 0.0659916C8.56055 0.150382 8.45156 0.276967 8.40586 0.396519C8.38125 0.459811 8.36719 0.885278 8.36719 1.5393C8.36719 2.73834 8.38125 2.79812 8.65196 2.97745C8.96838 3.1849 9.41136 3.06535 9.56605 2.73131C9.62582 2.59769 9.63285 2.48869 9.63285 1.5393C9.63285 0.885278 9.61879 0.459811 9.59418 0.396519C9.54847 0.276967 9.40081 0.115219 9.27424 0.0484104C9.13713 -0.0219147 8.82775 -0.0148821 8.70118 0.0659916Z"
                  fill="white"
                />
                <path
                  d="M2.7176 2.5484C2.46799 2.6996 2.359 3.0442 2.47502 3.31495C2.54533 3.47669 4.036 4.94649 4.15905 4.97813C4.31374 5.0133 4.60203 4.97462 4.70399 4.89726C4.92899 4.732 5.02392 4.46828 4.95712 4.21159C4.92196 4.08149 4.80594 3.94787 4.17311 3.30791C3.76177 2.89651 3.37856 2.53786 3.31528 2.50973C3.13597 2.43237 2.88636 2.44643 2.7176 2.5484Z"
                  fill="white"
                />
                <path
                  d="M14.6773 2.50975C14.6211 2.53788 14.2379 2.89654 13.8265 3.30794C13.1937 3.9479 13.0777 4.08152 13.0425 4.21162C12.9722 4.48237 13.0777 4.74961 13.3203 4.91135C13.4504 4.99926 13.7035 5.02036 13.8758 4.95706C14.0058 4.90784 15.4614 3.45914 15.5246 3.31498C15.6442 3.04422 15.5317 2.69612 15.2785 2.54843C15.1063 2.44998 14.8496 2.4324 14.6773 2.50975Z"
                  fill="white"
                />
                <path
                  d="M8.27899 4.5138C8.14539 4.53841 7.91335 4.59116 7.76921 4.63335C6.15198 5.08695 4.91093 6.42664 4.54529 8.12147C4.4574 8.53991 4.4574 9.46116 4.54529 9.8796C4.93202 11.6764 6.30315 13.0583 8.08562 13.4486C8.45829 13.5295 9.21769 13.5576 9.59387 13.5013C11.0881 13.2868 12.3361 12.4043 13.0217 11.0751C13.3487 10.4457 13.4928 9.90069 13.5245 9.17986C13.5737 8.0617 13.2432 7.0455 12.5365 6.16644C11.8967 5.36825 10.9404 4.78104 9.9138 4.55248C9.56574 4.47512 8.61298 4.45402 8.27899 4.5138ZM9.53059 5.78317C10.7505 5.99414 11.6928 6.78881 12.083 7.92808C12.4205 8.91614 12.2799 9.97102 11.6998 10.8466C11.3271 11.4021 10.7294 11.8592 10.072 12.0843C9.53762 12.2636 8.9962 12.3128 8.46884 12.2179C7.74812 12.0913 7.15747 11.7889 6.67582 11.2966C6.18713 10.8009 5.90588 10.2418 5.78282 9.53149C5.6879 9.00405 5.73712 8.46255 5.91642 7.92808C6.42972 6.43016 7.97664 5.5089 9.53059 5.78317Z"
                  fill="white"
                />
                <path
                  d="M0.386486 8.40662C0.273982 8.45233 0.112259 8.60353 0.048976 8.7266C0.0208502 8.77934 -0.000244141 8.90593 -0.000244141 9.0079C-0.000244141 9.25755 0.108743 9.44391 0.312655 9.55292C0.463832 9.63379 0.484926 9.63379 1.52558 9.63379C2.48889 9.63379 2.59788 9.62676 2.73147 9.56698C3.19203 9.35601 3.19203 8.64572 2.73147 8.43475C2.59788 8.37497 2.4924 8.36794 1.5291 8.37146C0.91736 8.37146 0.439222 8.38552 0.386486 8.40662Z"
                  fill="white"
                />
                <path
                  d="M15.2683 8.43475C15.1769 8.47694 15.0855 8.55782 15.0222 8.65276C14.8147 8.96922 14.9343 9.41227 15.2683 9.56698C15.4019 9.62676 15.5109 9.63379 16.4601 9.63379C17.114 9.63379 17.5394 9.61972 17.6027 9.59511C17.7222 9.5494 17.884 9.40172 17.9508 9.27513C17.9789 9.22239 18 9.09932 18 9.00086C18 8.90241 17.9789 8.77934 17.9508 8.7266C17.884 8.60001 17.7222 8.45233 17.6027 8.40662C17.5394 8.382 17.114 8.36794 16.4601 8.36794C15.5109 8.36794 15.4019 8.37497 15.2683 8.43475Z"
                  fill="white"
                />
                <path
                  d="M4.09551 13.0584C3.95488 13.1252 2.50991 14.5809 2.46069 14.7075C2.36225 14.9783 2.47827 15.3088 2.72086 15.453C2.89313 15.5549 3.13571 15.569 3.31502 15.4917C3.3783 15.4635 3.76151 15.1049 4.17285 14.6935C4.80568 14.0535 4.9217 13.9199 4.95686 13.7898C5.02717 13.519 4.9217 13.2518 4.67912 13.0901C4.542 12.9951 4.26778 12.9811 4.09551 13.0584Z"
                  fill="white"
                />
                <path
                  d="M13.3426 13.0656C13.2863 13.0938 13.209 13.1465 13.1703 13.1781C13.0051 13.3258 12.9594 13.688 13.0754 13.9166C13.1633 14.0818 14.4957 15.4074 14.6575 15.4883C14.8157 15.5692 15.1532 15.5481 15.2833 15.4496C15.452 15.3231 15.5153 15.2035 15.5329 14.9855C15.5434 14.8273 15.5329 14.7499 15.4766 14.6409C15.3887 14.4686 14.0106 13.0973 13.877 13.048C13.7328 12.9918 13.4656 13.0023 13.3426 13.0656Z"
                  fill="white"
                />
                <path
                  d="M8.79259 14.9431C8.62735 15.0134 8.49727 15.133 8.43399 15.2736C8.37422 15.4037 8.36719 15.5198 8.36719 16.4621C8.36719 17.1162 8.38125 17.5416 8.40586 17.6049C8.45156 17.7245 8.59923 17.8862 8.72579 17.953C8.84884 18.0163 9.15119 18.0163 9.27424 17.953C9.40081 17.8862 9.54847 17.7245 9.59418 17.6049C9.61879 17.5416 9.63285 17.1162 9.63285 16.4621C9.63285 15.2666 9.61879 15.2033 9.35511 15.0275C9.1969 14.922 8.93322 14.8833 8.79259 14.9431Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className={style.header_mobile_menu_theme_night}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.67169 12.3685C8.0272 12.3685 12.3687 8.02696 12.3687 2.67144C12.3687 2.03572 12.3075 1.41381 12.1904 0.811456C12.1887 0.802657 12.1893 0.795808 12.1908 0.790133C15.3119 2.11144 17.5001 5.20216 17.5001 8.80279C17.5001 13.606 13.6063 17.4998 8.80303 17.4998C5.2024 17.4998 2.11169 15.3116 0.790378 12.1905C0.796054 12.189 0.802901 12.1885 0.811701 12.1902C1.41406 12.3072 2.03596 12.3685 2.67169 12.3685Z"
                  stroke="white"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className={style.header_mobile_menu_invest}>
          {/* <div
            className={style.header_mobile_menu_invest_btn}
            onClick={showEmailModal}
          >
            Invest in your wealth
          </div> */}
          <div
            className={style.header_mobile_menu_invest_btn}
          >
            <Link href={`https://demo.dequity.io/${locale}/properties?utm_content=${themeSelector == "theme-light" ? "light" : "dark"}`}>
                Invest in your wealth
            </Link>
          </div>
          
          <div
            className={style.header_mobile_menu_invest_close}
            onClick={() => {
              // setMobileMenuShow((prev) => !prev);
              handlerToggleMenu(false);
            }}
          >
            <img src={CloseIcon.src} alt="close" />
          </div>
        </div>
         <div
            style={mobileMenuLangShow ? { left: 0, right: 0 } : { left: router.locale === "ar" ? 0 :"100%", right:router.locale === "ar" ? "100%" : 0 }}
            className={style.header_mobile_lang}
         >
         <div className={style.header_mobile_lang_title}>Select language</div>

         <div className={style.header_mobile_lang_langs}>
            <Link href={router.pathname} locale={"en"} legacyBehavior>
               <div
               className={style.header_mobile_lang_langs_item}
               onClick={() => {
                  changeLang("EN");
               }}
               >
               English
               </div>
            </Link>
            <Link href={router.pathname} locale={"es"} legacyBehavior>
               <div
               className={style.header_mobile_lang_langs_item}
               onClick={() => {
                  changeLang("ES");
               }}
               >
               Spanish
               </div>
            </Link>
            <Link href={router.pathname} locale={"pt"} legacyBehavior>
               <div
               className={style.header_mobile_lang_langs_item}
               onClick={() => {
                  changeLang("POR");
               }}
               >
               Portuguese
               </div>
            </Link>
            <Link href={router.pathname} locale={"ja"} legacyBehavior>
               <div
               className={style.header_mobile_lang_langs_item}
               onClick={() => {
                  changeLang("JP");
               }}
               >
               Japanese
               </div>
            </Link>
            <Link href={router.pathname} locale={"zh"} legacyBehavior>
               <div
               className={style.header_mobile_lang_langs_item}
               onClick={() => {
                  changeLang("CH");
               }}
               >
               Chinese
               </div>
            </Link>
            <Link href={router.pathname} locale={"ar"} legacyBehavior>
               <div
               className={style.header_mobile_lang_langs_item}
               onClick={() => {
                  changeLang("AR");
               }}
               >
               Arabic
               </div>
            </Link>
            <Link href={router.pathname} locale={"ko"} legacyBehavior>
               <div
               className={style.header_mobile_lang_langs_item}
               onClick={() => {
                  changeLang("KOR");
               }}
               >
               Korean
               </div>
            </Link>
         </div>

         <div className={style.header_mobile_lang_back}>
            <img
               src={BackIcon.src}
               alt="back"
               onClick={() => setMobileMenuLangShow((prev) => !prev)}
            />
         </div>
         </div>

         <div className={style.header_mobile_menu_decor1}/>
      </div>

    </>
  );
};

export default HeaderNew;



