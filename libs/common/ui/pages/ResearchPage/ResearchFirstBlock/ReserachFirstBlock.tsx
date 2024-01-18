import React, { useState } from "react";
import style from "./ResearchFirstBlock.module.scss";
import bg from "../../../assets/imgs/newResearch/bgResearchFirstBlock.webp"
import MobilebgDark from "../../../assets/imgs/newResearch/bgMobileResearchFirstBlockDark.png"
import MobilebgWith from "../../../assets/imgs/newResearch/bgMobileResearchFirstBlockWith.png"
import ResearchClose from "../../../assets/imgs/newResearch/ResearchCloseButton.png"
import ResearchCloseDark from "../../../assets/imgs/newResearch/ResearchCloseDark.png"
import Image from "next/image";
import { toggleMenu, toggleModalEmailShowAction, toggleModalThanksShowAction, requestFAQsMenuFetchAction, toggleAppThemeAction, changeAppLanguageAction, toggleScrollToHowAction, requestFAQsFetchAction, setHomeFetchLoadingAction } from "@/src/store/actions/app";
import { useSelector, useDispatch } from "react-redux";
import cl from "classnames";
import { RootState } from "@/src/store/store";
import {width} from "dom-helpers";



export const ResearchFirstBlock= ({data} : {data : any} ) => {

    const dispatch = useDispatch();

    const locale = data?.data?.attributes?.locale;

    const [windowWidth, setWindowWidth] = React.useState(0);
    const [theme, setTheme] = useState("");
    const themeSelector = useSelector((state: RootState) => state.app.appReducer.appTheme);

    React.useEffect(() => {
        if (themeSelector) {
            setTheme(themeSelector);
        }
    }, [themeSelector]);

    React.useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        // Add event listener to handle window resize
        window.addEventListener("resize", handleResize);
        // Initial width on component mount
        setWindowWidth(window.innerWidth);
        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);


    return (
        <>
            <div className={cl(style.container,
                  style['container--'+ locale]
               )}  >
                {windowWidth > 575 ? (
                    <Image
                        layout="fill"
                        src={bg.src}
                        alt="Background"
                        style={{ opacity: 0.7,objectFit:"cover" }}
                    />

                ) : null}
                {windowWidth <= 575 ? (
                    <Image
                        layout="fill"
                        src={theme === 'theme-dark' ? MobilebgDark.src : MobilebgWith.src}
                        alt="Background"
                        style={{left:0,right:0,top:0,paddingBottom:"90px" }}
                    />
                ) : null}


                <div className={style.ResearchTextStyles__research}> 
                {/* Research */}
                {data.data.attributes.rfb_title}
                 </div>
                <div className={style.ResearchTextStyles__researchtext}>
                    <p className={style.ResearchTextStyles__researchtext__size}> 
                    {/* dEquity publishes in-depth market research   to help clients gain insight into */}
                    {data.data.attributes.rfb_text}
                     <span className={style.ResearchTextStyles__researchtext__textblue}>
                         {/* trends and market developments in the industry */}
                         {" "}
                         {data.data.attributes.rfb_text2}
                         </span>  </p>

                </div>

                <div className={style.ResearchTextStyles__researchtext__textgray}>
                    <p className={style.ResearchTextStyles__researchtext__textgray__graycolor}>
                        {/* Our team of research professionals tracks key trends and potential growth opportunities;
                        reports  are designed to provide a clear understanding to produce timely, data driven
                        market analysis and to inform consumers */}
                        {data.data.attributes.rfb_text_gray}
                    </p>
                </div>
                <div className={style.ResearchTextStyles__decor1}></div>

            </div>

            <div className={style.ResearchTextStyles_wrapper}>

              <div className={style.ResearchTextStyles_line}></div>

              {/*<div*/}
              {/*  className={theme === "theme-dark" ? style.ResearchTextStyles_header_mobile_btn_night :  style.ResearchTextStyles_header_mobile_btn_day}*/}
              {/*  style={locale === "ar" ? { left: 0 } : {}}*/}
              {/*  onClick={() => {*/}
              {/*    dispatch(toggleMenu(true));*/}
              {/*  }}*/}
              {/*>*/}
              {/*  <div className={style.ResearchTextStyles_header_mobile_btn_btn}>*/}
              {/*      <span></span>*/}
              {/*      <span></span>*/}
              {/*      <span></span>*/}
              {/*  </div>*/}
              {/*    /!* <Image*/}
              {/*        src={theme === "theme-dark" ? ResearchCloseDark : ResearchClose}*/}
              {/*        alt="ResearchClose"*/}
              {/*    /> *!/*/}
              {/*</div>*/}
          </div>

        </>
    );
};

export default ResearchFirstBlock;
