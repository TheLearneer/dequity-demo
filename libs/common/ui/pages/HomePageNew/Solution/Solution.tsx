import React, { useEffect, useState } from "react";
import style from "./Solution.module.scss";
import { useRouter } from "next/router";
import solutionDark from "../../../assets/imgs/homepage/solutionDark.webp";
import solutionLight from "../../../assets/imgs/homepage/solutionLight.webp";
import solutionDarkMob from "../../../assets/imgs/homepage/solutionDarkMob.webp";
import solutionLightMob from "../../../assets/imgs/homepage/solutionLightMob.webp";
import solutionLightEs from "../../../assets/imgs/homepage/spanish/solutionLightEs.webp";
import solutionEs from "../../../assets/imgs/homepage/spanish/solutionEs.webp";

import solutionEsLightMob from "../../../assets/imgs/homepage/spanish/solutionEsLightMob.webp";
import solutionEsMob from "../../../assets/imgs/homepage/spanish/solutionEsMob.webp";
import cl from "classnames";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store/store";

const Solution = ({ data }: { data: any }) => {
  const { locale } = useRouter();
  const theme = useSelector(
    (state: RootState) => state.app.appReducer.appTheme
  );
  const [img, setImg] = useState<any>();
  const [width, setWidth] = useState<any>();
  const [imgMob, setImgMob] = useState<any>();
  useEffect(() => {
    if (theme === "theme-dark") {
      if(locale === "es"){
        setImg(solutionEs.src)
        setImgMob(solutionEsMob.src);
      }else{
         setImg(solutionDark.src);
         setImgMob(solutionDarkMob.src);
      }
     
    } else {   
      if(locale === "es"){
        setImg(solutionLightEs.src)
        setImgMob(solutionEsLightMob.src)
      }else{
        setImg(solutionLight.src);
        setImgMob(solutionLightMob.src)
      }
      
    }
  }, [theme]);

  React.useEffect(() => {
    const handleResize = (event: any) => {
      setWidth(event.target.innerWidth);
    };
    setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

 

  return (
    <>
      <section className={style.solution_wrapper}>
        <div className={style.solution}>
          <div className={style.solution_content}>
            <div className={style.solution_contentWrapper}>
              <div>
                <h3>{data.data.attributes.solution_title}</h3>
              </div>
              <div>
                <p>{data.data.attributes.solution_description}</p>
              </div>
              <div className={style.solution_button}>
                {data.data.attributes.solution_button}
              </div>
            </div>
          </div>
          <div className={style.solution_img_wrapper}>
            {width == null ? (
              ""
            ) : width > 1024 ? (
              <img src={img} alt="img" />
            ) : (
              <img src={imgMob} alt="img" />
            )}
          </div>
        </div>

        <div className={style.solution__decor}></div>
      </section>
    </>
  );
};

export default Solution;
