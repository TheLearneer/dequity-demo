import React from "react";
import {HeaderNew, FooterNew, Footer, Header, ModalEmail } from "@common/ui";
import Head from "next/head";
import { FC, ReactNode, useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/src/store/store";
import { useRouter } from 'next/router';
import cl from "classnames";
import { toggleAppThemeAction } from "../store/actions/app";


export const Layout: FC<{ children: ReactNode, dataHeader : any, dataFooter : any, dataModal : any,cachedTheme:string}> = ({ children , dataHeader, dataFooter, dataModal,cachedTheme }) => {

  const router = useRouter();
  const dispatch = useDispatch()
  
  const appTheme = useSelector<RootState>(state => state.app.appReducer.appTheme)
  const [theme,setTheme] = useState(cachedTheme)
  const [firstRender,setFirstRender] = useState(true)
  const paddingBody = React.useRef<HTMLDivElement>(null);

  useEffect(()=>{
    const script = document.createElement("script");
    script.innerHTML = "var _paq = window._paq = window._paq || [];_paq.push(['trackPageView']);_paq.push(['enableLinkTracking']);(function() {var u='//matomo.dequity.io/';_paq.push(['setTrackerUrl', u+'matomo.php']);_paq.push(['setSiteId', '1']);var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);})();";
    document.head.appendChild(script);
    scrollWidth(); 
    dispatch(toggleAppThemeAction(cachedTheme))
  },[])

  useEffect(()=>{
    if(firstRender){
      setFirstRender(false)
    }else{
      setTheme(appTheme as string)
    }


  },[appTheme])

  //Compensate for the width of the scroll
  function scrollWidth () { 
   const body: any = document.querySelector('body');
   if (paddingBody.current !== null && body !== 0) {
      const paddingSave = body.dataset.scroll ? body.dataset.scroll : body.offsetWidth - body.clientWidth;
      if (paddingSave > 0) {
         paddingBody.current.style.paddingRight = `${paddingSave}px`;
         body.style.overflow = 'overlay';
         body.dataset.scroll = paddingSave;
      }
    } 
  }



  return (

    

    <div dir={router.locale == "ar" ? "rtl" : "ltr"} className={ cl(appTheme as string, router.locale == "ar" ? "theme-ar": "") } id={"theme"} ref={paddingBody}>

      <div className="container-fluid p-0 m-0 w-100">
      <Head>

        {/*<!--  Google Analytics --> */}
				{/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-MK2YDLVJBY"></script>
				<script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MK2YDLVJBY', {
              page_path: window.location.pathname,
            });
          `
        }} /> */}
				{/*<!--  End Google Analytics --> */}

        <meta property="og:image" content="/dequity.jpg" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <meta name="viewport" content="height=device-height, 
                      width=device-width, initial-scale=1.0, 
                      minimum-scale=1.0, maximum-scale=1.0, 
                      user-scalable=no, target-densitydpi=device-dpi"/>
        <link rel="icon" href="/favicon.ico" />

        {/* <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        /> */}
        {/* <meta name="description" content="Explore dEquity, the best online multi-national blockchain marketplace.
        Invest in U.S. real estate rental properties in 5 minutes. 
        The investing experience you've been waiting for." /> */}
        <meta name="author" content="dEquity" />
        {/* <meta name="keywords" content="Dequity, Tokenizes the world, Real estate Web3 NFT, Real estate token, Real estate coin, Real estate NFT, Real estate tokenization, Tokenization, Real estate stablecoin, Fractional real estate, Fractional ownership, Income-producing real estate, Cash flow real estate, Cash flow, Passive income,Income, Wealth"/> */}

        {/* <title>dEquity | The Future of Real Estate Investing</title> */}

        {/* <link rel="canonical" hrefLang="en" href="https://dequity.io" />
        <link rel="alternate" hrefLang="es" href="https://dequity.io/es" />
        <link rel="alternate" hrefLang="pt" href="https://dequity.io/pt" />
        <link rel="alternate" hrefLang="ar" href="https://dequity.io/ar" />
        <link rel="alternate" hrefLang="ja" href="https://dequity.io/ja" />
        <link rel="alternate" hrefLang="zh" href="https://dequity.io/zh" /> 
        <link rel="alternate" hrefLang="ko" href="https://dequity.io/ko" />  */}

      </Head>
                {/* {router.pathname == "/" || router.pathname == "/research" || router.pathname == "/learn" || router.pathname == "/about" ?  */}
                  <HeaderNew data={dataHeader} appTheme={theme}/> 
                  {/* :  */}
                  {/* <Header data={dataHeader}/> */}
               {/* } */}
               {/* <Header data={dataHeader}/> */}
                
                <ModalEmail data={dataModal} dataTheme={cachedTheme} />
                <main>{children}</main>

                {/* {router.pathname == "/" || router.pathname == "/research" || router.pathname == "/learn" || router.pathname == "/about" ?  */}
                  <FooterNew data={dataFooter}/> 
                  {/* :  */}
                  {/* <Footer data={dataFooter}/> */}
               {/* } */}
               {/* <Footer data={dataFooter}/> */}
                

      {/* <main>{children}</main> */}
      </div>
     </div>
  );
};


export default Layout;
