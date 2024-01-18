import React from "react";
import style from "./AboutImage.module.scss";
import cl from "classnames"

export default function AboutImage({
  backSVG,
  ElementSVG,
  oneElem = false,
  dark=false
}: {
  backSVG: any;
  ElementSVG?: any;
  oneElem?: boolean;
  dark?:boolean
}) {
  return (
    <div className={style.images_wrapper}>
      {oneElem ? (
        <div>{backSVG}</div>
      ) : (
        <>
          <div>{backSVG}</div>
          <div className={cl(style.images_element,dark ? style.images_element_dark : style.images_element_light)}>{ElementSVG}</div>
        </>
      )}
    </div>
  );
}
