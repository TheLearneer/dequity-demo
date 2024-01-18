import React, { useEffect } from "react";
import { useRouter } from "next/router";

import style from "./OurTrustedClients.module.scss";
import cl from "classnames";
import trustBG from "../../../assets/imgs/homepage/trustedBG.webp";
import trustBGWhite from "../../../assets/imgs/homepage/trustedBG_white.webp";
import Image from "next/dist/client/image";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store/store";
// import LogoLight from "../../assets/imgs/logo-light.svg";


export const OurTrustedClients = ({data} : {data : any}) => {

  const themeSelector:string = useSelector((state: RootState) => state.app.appReducer.appTheme);

  const list = data?.data?.attributes?.trusted_clients_list?.split(",");

  let animation_values = data?.data?.attributes?.trusted_clients_list?.split(",");

  const [animationText, setAnimationText] = React.useState(null);

  const [animationIndex, setAnimationIndex] = React.useState(0);

  const { locale } = useRouter();

  useEffect(() => {
    changeTextTitle();
  }, [data]);

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

  let rightTrutedImage = themeSelector =="theme-light" ? trustBGWhite.src : trustBG.src

  return (
    <>

      <div className={style.trusted}>
        {/* <img src={trustBG.src} alt="Handshake" /> */}
        <Image src={rightTrutedImage} fill objectPosition='center' object-fit="contain" objectFit="contain" alt="Handshake"/> {/*  width={639} height={602} layout="fill" objectFit="cover" */}
        <div className={cl(style.trusted_text,
         locale == 'pt' && style.trusted_text_pt,
         locale == 'es' && style.trusted_text_es
         )}>
          {/* Our trusted clients are from */}
          <span className={style.trusted_text_title}> {data?.data?.attributes?.trusted_clients_title}</span>
          <div className={style.trusted_text_country} onAnimationIteration={changeTextTitle}>
            {/* Argentina */}
            {/* {list[0]} */}
            {animationText == null ? data?.data?.attributes?.trusted_clients_list?.split(",")[data?.data?.attributes?.trusted_clients_list?.split(",").length - 1] : animationText}
          </div>
        </div>

        <div className={style.trusted__decor1}></div>
        <div className={style.trusted__decor2}></div>
      </div>

    </>
  );
};



export default OurTrustedClients;
