import React from "react";

import ResearchFirstBlock from "@/libs/common/ui/pages/ResearchPage/ResearchFirstBlock/ReserachFirstBlock";
import RealEstateIncome from "./RealEstateIncome/RealEstateIncome";
import PerformanceRealEstate from "./PerformanceRealEstate/PerformanceRealEstate";
import ResearchOneClick
    from "@/libs/common/ui/pages/ResearchPage/ResearchOneClick/ResearchOne-click";
import ResearchInvestmentClass
    from "@/libs/common/ui/pages/ResearchPage/ResearchInvestmentClass/ResearchInvestmentClass";
import ResearchBeOwner from "@/libs/common/ui/pages/ResearchPage/ResearchBeOwner/ResearchBeOwner";
import WhyInvestInPrivate from "./WhyInvestInPrivate/WhyInvestInPrivate";
import ImmediateRent from "./ImmediateRent/ImmediateRent";
import MiamiRealEstate from "./MiamiRealEstate/MiamiRealEstate";
import TargetInvestors from "./TargetInvestors/TargetInvestors";
import ResearchPortfolio from "@/libs/common/ui/pages/ResearchPage/ResearchPortfolio/ResearchPortfolio";
import ResearchOpportunity from "@/libs/common/ui/pages/ResearchPage/ResearchOpportunity/ResearchOpportunity";
import Map from "./Map/Map";
import style from "./ResearchPage.module.scss"
import bg from "@/libs/common/ui/assets/imgs/newResearch/BG.png";
import background from "@/libs/common/ui/assets/imgs/newResearch/background.png";
import {toggleMenu} from "@/src/store/actions/app";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/src/store/store";
import MobileMenuIcon from "../../widgets/MobileMenuIcon/MobileMenuIcon";
import NewInvestmentClass from "@/libs/common/ui/pages/ResearchPage/Map/Map";




export const ResearchPage = ({data} : {data : any} ) => {

  const [widthWindow, setWidthWindow] = React.useState<number | null>(null);
  const dispatch = useDispatch();

  const currentLang = useSelector((state: RootState) => state.app.appReducer.appLanguage);
  // const MarketplaceData : any = useSelector((state: RootState) => state.app.appReducer.MarketplaceData);

  const [fetchLanguage, setFetchLanguage] = React.useState("en");

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
    // dispatch(requestMarketplaceFetchAction({lang: fetchLanguage}));
  },[fetchLanguage]);


    // console.log("STRAPI DATA", {data});

    // data.data.attributes
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
    
   
   
    return (
      <>
          <div className={style.ResearchTextStyles}>
            <MobileMenuIcon />
            <ResearchFirstBlock data={data} />
            <RealEstateIncome data={data} />
            <ResearchOneClick data={data} /> 
            <PerformanceRealEstate data={data} />
            <ResearchInvestmentClass data={data} /> 
            <WhyInvestInPrivate data={data} />
            <ResearchBeOwner data={data} />
            <ImmediateRent data={data} />
            <ResearchPortfolio data={data} /> 
            <MiamiRealEstate data={data} />
            <ResearchOpportunity data={data} /> 
            <TargetInvestors data={data} />
            <Map data={data} />
          </div>

      </>
    );
};

export default ResearchPage;
