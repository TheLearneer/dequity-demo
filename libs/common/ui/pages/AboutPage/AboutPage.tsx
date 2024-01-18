import React from "react";
import dynamic from 'next/dynamic';


// import { MemoizedAnimText } from "../../widgets/MemoizedAnimText";
const MemoizedAnimText = dynamic(() => import('../../widgets/MemoizedAnimText/MomoizedAnimText'));
import { useSelector, useDispatch } from "react-redux";
import {toggleModalEmailShowAction, toggleModalThanksShowAction, toggleAppThemeAction, changeAppLanguageAction, toggleScrollToHowAction, requestAboutFetchAction, setHomeFetchLoadingAction} from "@/src/store/actions/app";
import type { RootState } from "@/src/store/store";
import cl from "classnames";
import AboutDequity from "@/libs/common/ui/pages/AboutPage/AboutDequity/AboutDequity";
import AnimationSkew from "./AnimationSkew/AnimationSkew"
import AboutVision from "@/libs/common/ui/pages/AboutPage/AboutVision/AboutVision";
import AboutWhyDequity from "@/libs/common/ui/pages/AboutPage/AboutWhyDequity/AboutWhyDequity";
import Vision from "@/libs/common/ui/pages/AboutPage/Vision/Vision";
import Mission from "@/libs/common/ui/pages/AboutPage/Mission/Mission";
import Map from "@/libs/common/ui/widgets/Map/Map";
import style from "./AboutPage.module.scss";

export const AboutPage = ({AboutData} : {AboutData : any}) => {


  const theme:string = useSelector((state: RootState) => state.app.appReducer.appTheme);

  return (
    <>

      <div className={style.wrapper}>

        <AnimationSkew data={AboutData} theme={theme} />
        <AboutDequity data={AboutData} theme={theme} />
        {/* <AboutVision data={AboutData} /> */}
        <Vision data={AboutData} theme={theme} />
        <Mission data={AboutData} theme={theme} />
        <AboutWhyDequity data={AboutData} />
        <Map forPage="about" data={AboutData} />
      </div>
    </>
  );
};

export default AboutPage;
