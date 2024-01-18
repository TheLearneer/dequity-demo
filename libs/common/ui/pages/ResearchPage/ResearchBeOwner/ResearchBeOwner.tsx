import React, {useState} from "react";
import style from "./ResearchBeOwner.module.scss";
import {useSelector, useDispatch} from "react-redux";
import type {RootState} from "@/src/store/store";
import Image from "next/legacy/image";
import bgMobDark from "@/libs/common/ui/assets/imgs/newResearch/bgMobileResearchBeOwnerDark.webp";
import bgMobWith from "@/libs/common/ui/assets/imgs/newResearch/bgMobileResearchBeOwnerWith.webp";
import SkewBGBigWhite from "@/libs/common/ui/assets/imgs/SkewBlockBigResearch3_white.webp";
import SkewBGBig from "@/libs/common/ui/assets/imgs/SkewBlockBigNewResearch3.webp";
import {useRouter} from "next/router";
import SkewBlock from "../../../widgets/SkewBlock/SkewBlock";


export const ResearchBeOwner = ({data}: { data: any }) => {

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

    const [ownerActive, setOwnerActive] = useState(false);

    const {locale} = useRouter()

    return (
        <>
            {/* <div className={style.ResearchBeOwner} onMouseEnter={() => {
                setOwnerActive(true)
            }} onMouseLeave={() => {
                setOwnerActive(false)
            }}>
                <div className={
                    locale !== "ar" ?
                        style.ResearchBeOwner_bg_wrapper_big :
                        style.ResearchBeOwner_bg_wrapper_big_ar
                }>

                    {widthWindow == null ? "" : widthWindow < 575 ?
                        <Image
                            layout='fill'
                            src={theme === 'theme-dark' ? bgMobDark.src : bgMobWith.src}
                            alt="Background"
                            className={style.ResearchBeOwner_bg}
                        /> :
                        <Image
                            src={theme === 'theme-light' ?
                                  SkewBGBigWhite.src :
                                   SkewBGBig.src}
                                //     ownerActive ?
                                //     SkewBGBigWhiteActive.src : SkewBGBigWhite.src :
                                // ownerActive ?
                                //     SkewBGBigActive.src : SkewBGBig.src}
                            alt="Background"
                            layout="fill"
                            className={style.ResearchBeOwner_bg}
                        />
                    } */}
{/* /////////////////////////////////////////////////////////// */}
                    {/* <Image
                    src={ResearchBeOwnerBg.src}
                    alt="Background"
                    layout="fill"
                    style={{margin:"0 auto",}}
                    className={style.ResearchBeOwner_bg}
                /> */}

                <SkewBlock size="big">

                <div className={style.ResearchBeOwner__BeOwnerText__size}><p
                        className={style.ResearchBeOwner__BeOwnerTitle}>
                        {/* Become an owner today!  */}
                        {data?.data?.attributes?.beOwner_title}
                    </p></div>
                    <div className={style.ResearchBeOwner__BeOwnerText__size}><p
                        className={style.ResearchBeOwner__BeOwnerText}
                        dangerouslySetInnerHTML={{__html: data?.data?.attributes?.beOwner_text1}}>
                        {/* Own real estate minus the hassle. No maintenance fee. No annual fee. No membership fee. No utility bills. No admin fee */}
                        {/* {data?.data?.attributes?.beOwner_text1} */}
                    </p>
                        <div className={style.ResearchBeOwner__BeOwnerText__size}><p
                            className={style.ResearchBeOwner__BeownerLittletxt}>
                            {/* It's your property. Let us take care of the details. Accounts are audited, profit sharing is made transparent, and your yield is transferred to your NFT */}
                            {data?.data?.attributes?.beOwner_text2}
                        </p></div>
                    </div>
                </SkewBlock>
                  
                {/* </div>
            </div> */}
        </>
    );
};

export default ResearchBeOwner;

