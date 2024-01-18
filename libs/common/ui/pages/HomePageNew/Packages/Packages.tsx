import React, { FC, memo, useCallback, useEffect, useMemo, useState } from "react";
import style from "./Packages.module.scss";
import StepRange from "./Components/StepRange/StepRange";
import { packages } from "./constants";
import { MidLogoSVG, TickSVG, CrossSVG } from "../../../assets/svg";
import cl from "classnames";
import Link from "next/link";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store/store";
import { useRouter } from "next/router";

interface IPackages {
  data: any;
}

const Packages: FC<IPackages> = ({ data }) => {
  const [expPackage, setPackage] = useState<{
    value: number;
    name: string;
    fromMoney: number;
    privileges: object[];
  }>(packages[1]);



  const [widthWindow, setWidthWindow] = useState<number | null>(null);
  const [themeKey,setThemeKey] = useState("light")

  const theme = useSelector<RootState>(
    (state) => state.app.appReducer.appTheme
  );
  const { locale } = useRouter();



  useEffect(()=>{
    setThemeKey(theme === "theme-dark" ? "dark" : "light")

  },[theme])


  


useEffect(() => {
    const handleResize = (event: any) => {
      setWidthWindow(event.target.innerWidth);
    };
    setWidthWindow(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);



  const callbackHandleChange = useCallback((e:any)=>{
    handleChange(e)
  },[])

  const handleChange = (e: number | number[]) => {
    const foundedPackage = packages.find((element) => element.value === e);
    if (foundedPackage) {
      setPackage(foundedPackage);
    }
  };


  const isMob = widthWindow !== null && widthWindow < 992


  


  const privilegesInfo = expPackage.privileges.map((element: any,index:number) => {
    // let textJSX = <span> ({year + 1}) {element.value}% {data?.package_cashbackLabel} </span>;
    let textJSX = <span>  {element.value}% {data?.package_cashbackLabel} </span>;

    if (element.name === "referal") {
      textJSX = <span> {data?.package_referalLabel} {element.value}%</span>;
    } else if (element.name === "unit") {
      textJSX = (
        <span> {data?.package_whitelisteLabel} {element.value} {data?.package_whitelistUnit} </span>
      );
    }
    // const toolTip = (
    //   <InfoTooltip
    //     className={style.bottom__info}
    //     contentHTML={data?.package_unitTooltip}
    //   />
    // );

    return (
      <div className={style.privileges_field} key={index + element.value}>
        <div>{element.asset[themeKey]}</div>
        <div
          className={cl(
            style.privileges_field__content,
            locale === "ja" &&  style.privileges_field__content_ja,
            locale === "ar" &&  style.privileges_field__content_ar,
            // element.isActive && style.privileges_field__content_active
          )}
        >
          {textJSX}
        </div>
        {/* {(element.value == "750") ? toolTip : ''}
       <InfoTooltipConnector /> */}
      </div>


    );
  });

  return (
    <div className={style.packages_wrapper}>
      <div className={style.packages}>
        <div className={style.packages__intro}>
          <div className={style.packages__text}>
            <h3>{data?.package_title}</h3>
          </div>
          <div className={style.packages__desc}>
            <p>
              {data?.package_desc}
            </p>
          </div>

         {!isMob ?  <div className={style.packages__slider_wrapper}>
            <div className={style.packages__rangeSlider}>
              <div className={style.packages__rangeSliderTitle}>
                <h4> {data?.package_rangeTitle}</h4>
              </div>
              <div className={style.packages__rangeSliderPrice}>
                <span>${expPackage.fromMoney.toLocaleString("en-US")}</span>
              </div>
            </div>
            <StepRange
              min={25}
              defaultValue={50}
              onChange={(e) => callbackHandleChange(e)}
              locale={locale}
            />
          </div> : null}
        </div>

        <div className={style.packages__plan}>
          <div className={style.packages__plan_head}>
            <div className={style.packages__plan_status_wrapper}>
              <div className={style.packages__plan_logo}>
                <MidLogoSVG />
              </div>

              <div
                className={cl(
                  style.plan_status,
                  expPackage.name ==='Standard' && style.plan_status_standard
                )}
              >
                {expPackage.name}
              </div>
            </div>

            <div className={style.package_plan_statusInfo}>
              {/* <h3>{data?.package_cardStatusLabel}</h3> */}
              {/* <span>
                {" "}
                ${expPackage.fromMoney.toLocaleString("en-US")} {data?.package_cardStatusLabel_orMore}
              </span> */}
            </div>
          </div>

          <div className={style.packages__plan_body}>{privilegesInfo}</div>

      
          <Link
            href={`https://demo.dequity.io/${locale}/properties?utm_content=${
              theme == "theme-light" ? "light" : "dark"
            }&amount=${expPackage?.fromMoney || 1000}`}
            className={style.packages__plan_btn_wrapper}
          >
            <div className={style.packages__plan_btn}>{data?.package_investBtn}</div>
          </Link>
        </div>
        {isMob ?  <div className={cl(style.packages__slider_wrapper,isMob && style.packages__slider_wrapper_mob)}>
            <div className={style.packages__rangeSlider}>
              <div className={style.packages__rangeSliderTitle}>
                <h4> {data?.package_rangeTitle}</h4>
              </div>
              <div className={style.packages__rangeSliderPrice}>
                <span>${expPackage.fromMoney.toLocaleString("en-US")}</span>
              </div>
            </div>
            <StepRange
              min={25}
              defaultValue={50}
              onChange={(e) => callbackHandleChange(e)}
              locale={locale}
            />
          </div> : null}
      </div>

      
    </div>
  );
};

export default memo(Packages);
