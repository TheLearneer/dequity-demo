import React, { useState } from "react";
import { Breadcrumbs, Button, Counter } from "../../components";
import { Tooltip } from "../../shared";
import styles from "./RealtyPayment.module.scss";
import cl from 'classnames';
import Link from 'next/link'
import style from "@/libs/common/ui/pages/HomePageNew/InvestInYourScreen/InvestInYourScreen.module.scss";
import {toggleMenu} from "@/src/store/actions/app";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/src/store/store";
import MobileMenuIcon from "../MobileMenuIcon/MobileMenuIcon";
import { PropGraphLightSVG, PropGraphSVG } from "../../assets/svg";

export const RealtyPayment = ({propertyData} : {propertyData : any}) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const theme = useSelector((state: RootState)=> state.app.appReducer.appTheme)
  const currentLang = useSelector((state: RootState) => state.app.appReducer.appLanguage);
  // const MarketplaceData : any = useSelector((state: RootState) => state.app.appReducer.MarketplaceData);

  const [fetchLanguage, setFetchLanguage] = React.useState("en");
  const [graph,setGraph] = useState<any>()

  React.useEffect(()=>{

    if(currentLang == "EN") {
      setFetchLanguage("en");
    } else if ( currentLang == "AR") {
      setFetchLanguage("ar");
    } else if ( currentLang == "ES") {
      setFetchLanguage("es");
    } else if ( currentLang == "POR") {
      setFetchLanguage("pt");
    }  else if ( currentLang == "VIE") {
      setFetchLanguage("vi");
    }  else if ( currentLang == "JP") {
      setFetchLanguage("ja");
    }  else if ( currentLang == "CH") {
      setFetchLanguage("zh");
    }   else if ( currentLang == "KOR") {
      setFetchLanguage("ko");
    }

  },[currentLang]);

  React.useEffect(()=>{
    if(theme === "theme-light"){
      setGraph(<PropGraphLightSVG />)
    }else{
      setGraph(<PropGraphSVG />)
    }
  },[theme]);

  const counterHandler = (method: 'incr' | 'decr') => {
    if (count <= 1 && method === 'decr') return;
    if (method === 'incr') {
      setCount(c => c + 1)
    } else {
      setCount(c => c - 1)
    }
  }

  const breadcrumbsItems = [
    {
      // title: 'Properties',
      title: propertyData.data?.attributes.breadcrumb_1,
      link: '/'
    },
    '100 Ocean Drive'
  ]
  return (
    <div className={styles.payment}>
      <Breadcrumbs items={breadcrumbsItems} />

      <div className={styles.payment__property}>
        <p>100 Ocean Drive, Miami, FL 33259</p>
        <p>
          {/* Ticker */}
          {propertyData.data?.attributes.RealtyPayment_ticker}
          : { }           
          <span>EXR</span>
        </p>
      </div>

      <MobileMenuIcon />
      <div className={styles.payment__preliminary}>


        <div>
         {graph} 
        </div>

      </div>
      <ul className={styles.payment__info}>

        <li className={styles.payment__infoItem}>
          <p>
            {/* Price per unit */}
            {propertyData.data?.attributes.RealtyPayment_PricePerUnit}
          </p>

          <div className={styles.payment__infoItemWrapper}>
          <p className={styles.payment__infoNum}>10.2 &nbsp; <span className={styles.payment__infoNum_percent}> %</span></p>
          </div>
         
        </li>
        <li className={styles.payment__infoItem}>
          <p>
            {/* Units quantity */}
            {propertyData.data?.attributes.RealtyPayment_unitsQuantity}
          </p>
          <Counter count={count} counterHandler={counterHandler} />
        </li>
        <li className={cl(styles.payment__infoItem,styles.payment__infoItem_total)}>
          <p>
            {/* Estimated Price */}
            {propertyData.data?.attributes.RealtyPayment_estimatedPrice}
          </p>
        
          <div className={styles.payment__infoItemWrapper}>
         
             <p className={styles.payment__infoNum}>{(100.00 * count)}.00 &nbsp; <span className={styles.payment__infoNum_dollar}>$</span></p>
          </div>
         
        </li>
      </ul>
      <Link href="/payment">
        <Button className={styles.payment__btn} type="regular" width="wide">
            {/* Go to Payment */}
            {propertyData.data?.attributes.btn}
        </Button>
      </Link>
      <div className={styles.agency}>
        {/* <AgentInfo {...mockAgentData} /> */}
        <div className={styles.container}>
         
        </div>
      </div>

    </div>
  );
};

export default RealtyPayment;
