import React, {useState} from "react";
import style from "./ResearchInvestmentClass.module.scss";
import {useSelector, useDispatch} from "react-redux";
import type {RootState} from "@/src/store/store";
// import MaskGroup from "@/libs/common/ui/assets/imgs/Mask group.png";
//import MaskGroup from "../../../assets/imgs/NewClassResearch.png" //смотрит вправо
import Image from "next/image";
import bgMobDark from "@/libs/common/ui/assets/imgs/newResearch/bgResearchOpportunityDark.webp";
import bgMobWith from "@/libs/common/ui/assets/imgs/newResearch/bgResearchOpportunityWith.webp";
import SkewBGBigWhite from "@/libs/common/ui/assets/imgs/SkewBlockBigResearch2_white.webp";
import SkewBGBig from "@/libs/common/ui/assets/imgs/SkewBlockBigResearch2.webp";
import {useRouter} from "next/router";
import SkewBlock from "../../../widgets/SkewBlock/SkewBlock";


export const ResearchInvestmentClass = ({data}: { data: any }) => {

    const [investmentActive, setInvestmentActive] = useState(false);


    const [skewActive, setSkewActive] = React.useState("style.ResearchInvestmentClass_bg" || null);
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

    const {locale} = useRouter()

    return (
        <>
            {/* <div className={style.ResearchInvestmentClass} onMouseEnter={() => {
                setInvestmentActive(true)
            }} onMouseLeave={() => {
                setInvestmentActive(false)
            }}>
                <div className={ locale !== "ar" ?
                    style.ResearchInvestmentClass_bg_wrapper_big :
                    style.ResearchInvestmentClass_bg_wrapper_big_ar
                }>

                    {widthWindow == null ? "" : widthWindow < 575 ?
                        <Image
                            layout='fill'
                            src={theme === 'theme-dark' ? bgMobDark.src : bgMobWith.src}
                            
                            alt="Background"
                            className={style.ResearchInvestmentClass_bg}
                        /> :
                        <Image
                            src={theme === 'theme-light' ?
                                     SkewBGBigWhite.src :
                                    SkewBGBig.src}

                                //     investmentActive ?
                                //     SkewBGBigWhiteActive.src : SkewBGBigWhite.src :
                                // investmentActive ?
                                //     SkewBGBigActive.src : SkewBGBig.src}
                            alt="Background"
                            layout="fill"
                            className={style.ResearchInvestmentClass_bg}
                        />
                    } */}

                 <SkewBlock size="big" otherStyle>
                     <div className={style.ResearchInvestmentClass__OneClickText__size}>
                        <p className={style.ResearchInvestmentClass__OneClickTitle}>
                            {/* New investment class  */}
                            {data?.data?.attributes?.ric_title}
                        </p>
                    </div>
                    <div className={style.ResearchInvestmentClass__OneClickText__size}>
                        <p className={theme === 'theme-light' ? style.ResearchInvestmentClass__OneClickText : `${style.ResearchInvestmentClass__OneClickText} ${style.ResearchInvestmentClass__OneClickText_themLigth}`}>
                            {/* dEquity brings a new investment class to the market.
                        Investors can now invest in a portion of an entire building.
                        This makes the market more transparent and accessible for everyone. */}
                            {data?.data?.attributes?.ric_text}
                        </p>
                    </div>
                </SkewBlock>
                    
                {/* </div>
            </div> */}
        </>
    );
};

export default ResearchInvestmentClass;

