import React, {useEffect,useState} from "react";
import style from "./Card.module.scss";
import cl from "classnames";
// import card from "../../../assets/imgs/homepage/Card.svg";
import card from "../../../assets/imgs/homepage/Card.webp";
// import cardWhite from "../../../assets/imgs/homepage/Card_white.svg";
import cardWhite from "../../../assets/imgs/homepage/Card_white.webp";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store/store";
import { CardMobSVG, CardSVG, CardWhiteMobSVG, CardWhiteSVG } from "../../../assets/svg";
import { useRouter } from "next/router";

export const Accessible = ({ data }: { data: any }) => {

  const themeSelector:string = useSelector((state: RootState) => state.app.appReducer.appTheme);
  const [rightImg,setRightImg] = useState<any>()

  const {locale} = useRouter()

  useEffect(()=>{
    if(themeSelector === "theme-dark"){
      setRightImg(card.src)
    }else{
      setRightImg(cardWhite.src)
    }

  },[themeSelector])
  // let rightImg = themeSelector === "theme-dark" ?  card.src : cardWhite.src
  return (
    <>
      <section className={cl(style.card,locale === "ar" && style.card_ar)}>
        <div className={style.card__img}> 
             <img src={rightImg} alt="card" />
        </div>
        <div className={style.card__content}>
          <h2 className={style.card__title}>
            {/* The card is designed for those who invest */}
            {data?.data?.attributes?.card_title}
          </h2>
          <p className={style.card__text}>
            {/* dEquity® launches a financial solution so you can invest and have your capital handy */}
            {data?.data?.attributes?.card_text}
          </p>
          <span className={style.card__soon}>
            {/* Coming soon 2023 */}
            {data?.data?.attributes?.card_btn}
          </span>
        </div>
        <div className={style.card__decor1}></div>
        <div className={style.card__decor2}></div>
        <div className={style.card__decor3}></div>
      </section>
    </>
  );
};

export default Accessible;
