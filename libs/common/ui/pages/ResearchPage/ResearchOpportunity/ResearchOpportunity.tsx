import React, {useState} from "react";
import style from "./ResearchOpportunity.module.scss";
import {useSelector} from "react-redux";
import type {RootState} from "@/src/store/store";
import Image from "next/image";
import bgMobDark from "@/libs/common/ui/assets/imgs/newResearch/bgMobileResearchOpportunityDark.webp";
import bgMobWith from "@/libs/common/ui/assets/imgs/newResearch/bgResearchOpportunityWith.webp";
import SkewBGBigWhite from "@/libs/common/ui/assets/imgs/SkewBlockBigResearch5_white.webp";
import SkewBGBig from "@/libs/common/ui/assets/imgs/SkewBlockBigNewResearch5.webp";
import {useRouter} from "next/router";
import SkewBlock from "../../../widgets/SkewBlock/SkewBlock";

export const ResearchOpportunity = ({data}: { data: any }) => {
    const [widthWindow, setWidthWindow] = React.useState<number | null>(null);
    const [theme, setTheme] = useState("");

    const themeSelector = useSelector((state: RootState) => state.app.appReducer.appTheme);

    React.useEffect(() => {
        if (themeSelector) {
            setTheme(themeSelector);
        }
    }, [themeSelector]);

    React.useEffect(() => {
        const handleResize = (event: any) => {
            setWidthWindow(event.target.innerWidth);
        };
        setWidthWindow(window.innerWidth)
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [opportunityActive, setOpportunityActive] = useState(false);

    const {locale} = useRouter()

    return (
        <>
            {/* <div className={style.ResearchOpportunity} onMouseEnter={() => {
                setOpportunityActive(true)
            }} onMouseLeave={() => {
                setOpportunityActive(false)
            }}> */}
                {/* <div className={
                    locale !== "ar" ?
                        style.ResearchOpportunity_bg_wrapper_big :
                        style.ResearchOpportunity_bg_wrapper_big_ar
                }>

                    {widthWindow == null ? "" : widthWindow < 575 ?
                        <Image
                            layout='fill'
                            src={theme === 'theme-dark' ? bgMobDark.src : bgMobWith.src}
                            alt="Background"
                            className={style.ResearchOpportunity_bg}
                        /> :
                        <Image
                            src={theme === 'theme-light' ?
                                   SkewBGBigWhite.src :
                                     SkewBGBig.src}

                                //     opportunityActive ?
                                //     SkewBGBigWhiteActive.src : SkewBGBigWhite.src :
                                // opportunityActive ?
                                //     SkewBGBigActive.src : SkewBGBig.src}
                            alt="Background"
                            layout="fill"
                            className={style.ResearchOpportunity_bg}
                        />
                    }

                 
                </div>   */}
                
                <SkewBlock size={"big"}>
                <div className={style.ResearchOpportunity1}><p className={style.ResearchOpportunity__OneClickTitle}>
                        {/* Equality of opportunity  */}
                        {data?.data?.attributes?.oppor_title}
                    </p></div>
                    <div className={style.ResearchOpportunity__OneClickText__size}><p
                        className={theme === 'theme-light' ? style.ResearchOpportunity__OneClickText : `${style.ResearchOpportunity__OneClickText} ${style.ResearchOpportunity__OneClickText_themLigth}`}>
                        {/* Real estate investment must be fast, transparent and accessible to everyone. Bridging the industry with blockchain technology will pave the way for retail investors to access borderless investment worldwide with higher potential liquidity through the secondary market */}
                        {data?.data?.attributes?.oppor_text}
                    </p></div>

                </SkewBlock>
               
            {/* </div> */}
        </>
    );
};

export default ResearchOpportunity;

