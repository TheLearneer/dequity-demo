import React from "react";
import { useEffect,  useState } from "react";
import { useRouter } from "next/router";
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

import style from "./Map.module.scss";
import cl from "classnames";

// import ArrowRightIcon from "../../../assets/imgs/Group 21.png";
import ArrowRightIcon from "../../assets/imgs/Group 21.png";
import { MapRamka } from "../../assets/svg";
import { MapRamkaMob } from "../../assets/svg";
import Link from "next/link";
import { RootState } from "@/src/store/store";

export const NewInvestmentClass = ({
  data,
  forPage,
}: {
  data: any;
  forPage: string;
}) => {
  const dispatch = useDispatch();
  const { locale } = useRouter();

  const [widthWindow, setWidthWindow] = useState<number | null>(null);

  const themeSelector = useSelector((state:RootState)=> state.app.appReducer.appTheme)

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


  const handleToggleModal = () => dispatch(toggleModalEmailShowAction());
  const isForeignLangs = () =>
    locale === "ar" || locale === "zh" || locale === "ko";
  return (
    <>
      <div className={style.wrapper}>
        <div className={style.map}>
          <div className={style.map__content}>
            <div className={style.map__ramka}>
            {widthWindow == null ? "" : widthWindow < 991 ?  <MapRamkaMob /> : <MapRamka /> }
            </div>
            <div className={cl(style.map__title,locale === "es" && style.map__title_es)}>
              {/* We believe that democracy is the strongest when everyone has ownership */}
              {data?.data?.attributes?.map_title}
              <div className={style.map__avtor}>
                {data?.data?.attributes?.map_avtor}
              </div>
            </div>
           {forPage !== "about"  &&(<a
              style={{ justifySelf: "center" }}
              className={cl(
                style.map__link,
                locale === "ar" && style.map__link_ar
              )}
              onClick={handleToggleModal}
            >
              {/* Join real estate investing (R)evolution */}
              {data?.data?.attributes?.map_subtitle}
              <span className={style.map__link_arrow}></span>
            </a>)}
            {forPage === "about"  && (
              <div>
                <Link href={`https://demo.dequity.io/${locale}/properties?utm_content=${themeSelector == "theme-light" ? "light" : "dark"}`} className={cl(style.map__btn)}>
                  {/* Build your future */}
                  {data?.data?.attributes?.map_btn}
                  <img
                    className={cl(
                      style.map__btn_img,
                      locale === "ar" && style.map__btn_img_ar
                    )}
                    src={ArrowRightIcon.src}
                    alt="Arrow"
                  />
                </Link>
              </div>
            )}
          </div>
        </div>
        <div
          className={cl(
            style.decor,
            style.decor1,
            locale === "ar" && style.decor1_ar
          )}
        />
        <div
          className={cl(
            style.decor,
            style.decor2,
            isForeignLangs() && style.decor2_foreign_langs
          )}
        />
        <div className={cl(style.decor, style.decor3)} />
        <div
          className={cl(
            style.decor,
            style.decor4,
            isForeignLangs() && style.decor4_foreign_langs
          )}
        />
      </div>
    </>
  );
};

export default NewInvestmentClass;
