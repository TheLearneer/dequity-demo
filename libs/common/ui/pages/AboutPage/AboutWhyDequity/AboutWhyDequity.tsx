import React from "react";
import { useRouter } from "next/router";
import style from "./AboutWhyDequity.module.scss";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "@/src/store/store";

// import AboutDollar from "../../../assets/imgs/AboutPage/AboutDollar.png";
import AboutPaper from "../../../assets/imgs/AboutPage/AboutPaper.svg";
import AboutDollar from "../../../assets/imgs/AboutPage/AboutDollar.svg";
import AboutHouse from "../../../assets/imgs/AboutPage/AboutHouse.svg";
import AboutStcok from "../../../assets/imgs/AboutPage/AboutStock.svg";
import AboutSupport from "../../../assets/imgs/AboutPage/AboutSupport.svg";
import AboutBook from "../../../assets/imgs/AboutPage/AboutBook.svg";

// import AboutPageBackgrounBlocks from "../../../assets/imgs/AboutPage/BackgroundAboutPageBlocks.png";
import cl from "classnames";

export const AboutWhyDequity = ({ data }: { data: any }) => {
  
  const { locale } = useRouter();



  const list = [
    { imgSrc: AboutPaper.src, text: data?.data?.attributes?.section7_item1 },
    { imgSrc: AboutDollar.src, text: data?.data?.attributes?.section7_item2 },
    { imgSrc: AboutStcok.src, text: data?.data?.attributes?.section7_item3 },
    { imgSrc: AboutHouse.src, text: data?.data?.attributes?.section7_item4 },
    { imgSrc: AboutSupport.src, text: data?.data?.attributes?.section7_item5 },
    { imgSrc: AboutBook.src, text: data?.data?.attributes?.section7_item6 },
  ];


  return (
    <div className={style.wrapper}>
      <div className={style.AboutWhyDequity}>
        <h2 className={style.AboutWhyDequity__title}>
          {/* Why dEquity? */}
          {data?.data?.attributes?.section7_title}
        </h2>
        <div className={style.AboutWhyDequity__text}>
          {/* dEquity offers to save time and money by fundamentally changing the mechanics and logistics of the investing experience to make your journey as successful as possible */}
          {data?.data?.attributes?.section7_text}
        </div>
        <div className={style.AboutWhyDequity__list}>
          {list.map((item, i) => (
            <div
              key={i}
              className={cl(
                style.AboutWhyDequity__item,
                style["AboutWhyDequity__item--" + locale]
              )}
            >
              <div className={cl(style.AboutWhyDequity__item_text, style['AboutWhyDequity__item_text--' + locale])}>
                {item.text}
              </div>
              <div
                className={cl(
                  style.AboutWhyDequity__item_img,
                  locale === "ar" && style.AboutWhyDequity__item_img_ar
                )}
              >
                <img src={item.imgSrc} alt="decor" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={style.decor}></div>
    </div>
  );
};

export default AboutWhyDequity;
