import React, { useRef} from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { toggleModalEmailShowAction, toggleModalThanksShowAction, toggleAppThemeAction, changeAppLanguageAction, toggleScrollToHowAction, requestHomeFetchAction, setHomeFetchLoadingAction } from "@/src/store/actions/app";
import Link from "next/link";
import style from "./Accessible.module.scss";
import cl from "classnames";
import apartment1 from "../../../assets/imgs/apartment1.webp";
import apartment2 from "../../../assets/imgs/apartment2.webp";
import apartment3 from "../../../assets/imgs/apartment3.webp";
import ReactSwipe from 'react-swipe';
import { RootState } from "@/src/store/store";

// import listIcon from "../../../assets/imgs/ul-style.svg";
import listIcon from "../../../assets/imgs/homepage/listIcon.svg";
import CustomSlider from "../../../shared/Slider/Slider";


function MapIcon() {
   return(
      <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path opacity="0.35" d="M5.05986 0.484396C4.12719 0.630991 3.35964 0.918319 2.6135 1.39622C1.3414 2.21129 0.457652 3.47787 0.13351 4.94383C0.0356558 5.37775 -0.0010395 6.25146 0.0570614 6.70883C0.225248 8.01353 0.940807 9.60263 2.12423 11.2943C2.65937 12.0566 3.50336 13.1004 4.18223 13.8422C4.56447 14.2556 5.3626 15.0765 5.57359 15.2729C5.75401 15.4371 5.78459 15.4547 5.90691 15.4547C6.03534 15.4547 6.04452 15.4488 6.44205 15.0618C7.92821 13.6047 9.33487 11.8954 10.2186 10.4734C11.0626 9.11593 11.5611 7.90505 11.7292 6.80559C11.8026 6.30716 11.7751 5.42466 11.6681 4.94383C11.1757 2.71265 9.40826 1.018 7.0781 0.543034C6.75702 0.4756 6.62247 0.463874 6.00782 0.45801C5.52467 0.449214 5.22805 0.458009 5.05986 0.484396ZM6.57354 3.59515C6.87628 3.66845 7.35638 3.903 7.59795 4.09944C8.79667 5.06697 8.89452 6.76747 7.81507 7.85521C7.02612 8.64976 5.69897 8.85792 4.68373 8.34484C3.98346 7.99008 3.48196 7.37731 3.30154 6.65899C3.21898 6.31889 3.21898 5.82633 3.30154 5.48623C3.43303 4.96435 3.77552 4.43954 4.21281 4.09064C4.44521 3.90593 4.93448 3.66551 5.22805 3.59222C5.62864 3.49253 6.16378 3.49253 6.57354 3.59515Z" fill="#4D6372"/>
      </svg>
   )
}


export const Accessible = ({data} : {data : any}) => {

   const themeSelector:string = useSelector((state: RootState) => state.app.appReducer.appTheme);

   const dispatch = useDispatch();
   const handleToggleModal = () => dispatch(toggleModalEmailShowAction());
   const { locale } = useRouter();

   // const [slideArr, setSliderArr] = useState([{Yield : "14.3%"}, {Yield : "15.3%"}, {Yield : "16.3%"}]);
   const slideArr = [{Yield : "14.3%", key: 0}, {Yield : "15.3%", key: 1}, {Yield : "16.3%", key: 2}];


   const refTest = useRef<any>(null);
   const toSea = data?.data?.attributes?.accessible_card_street?.split(",");

   let sliderArr = [{
      Yield: "10.3%", 
      img: 1, 
      location: "gs",
      address: 33259,
   },{
      Yield: "11.2%", 
      img: 2, 
      location: "gs",
      address: 33139,
   },{
      
      Yield: "11.5%", 
      img: 3, 
      location: "gs",
      address: 33137,
   }
   ].map(slideProps=>{

      let sliderImage =   slideProps.img == 1 ? apartment1.src :slideProps.img == 2 ? apartment2.src : apartment3.src
      return (
         <>
             <div className={style.slider__item}> {/*//slideProps?.active ? {opacity : 1, height: "auto"} : {opacity : 0, height: 0} */}
               <div className={style.slider__img}><img src={sliderImage} alt="apartment" /></div>
               <div className={style.slider__content}>
                  <div className={style.slider__location}>
                     <MapIcon/>
                     {/* Miami, FL */}
                     {data?.data?.attributes?.accessible_card_address} {slideProps.address}
                     </div>
                  <div className={style.slider__toSea}>
                     {/* 100 Ocean Drive */}
                     {toSea[(slideProps.img)-1]}
                  </div>
                  <div className={style.slider__conditions}>
                     <div className={cl(style.title,
                     locale === 'ar' && style.title_ar
                  )} >
                        {/* 14.3%  */}
                        {/* {data?.data?.attributes?.accessible_card_number1_title} */}
                        {slideProps.Yield}
                        <span className={cl(style.text,
                     locale === 'ar' && style.text_ar
                  )} >
                           {/* Yield */}
                           {data?.data?.attributes?.accessible_card_number1_text}
                           
                           <InfoIcon/>
                        </span>
                     </div>
                     <div className={cl(style.title,
                     locale === 'ar' && style.title_ar
                  )} >
                        {/* $100  */}
                        {data?.data?.attributes?.accessible_card_number2_title}
                        <span className={cl(style.text,
                     locale === 'ar' && style.text_ar
                  )} >
                           {/* Estimated Price */}
                           {data?.data?.attributes?.accessible_card_number2_text}
                           <InfoIcon/>

                        </span>
                     </div>
                  </div>
               </div>
               <Link  href={`https://demo.dequity.io/${locale}/properties?utm_content=${themeSelector == "theme-light" ? "light" : "dark"}`} className={style.slider__btn}>
                  {data?.data?.attributes?.accessible_card_btn}
                  {/* <span className={style.slider__btn_pc}>Go to payment</span>   
                  <span className={style.slider__btn_mob}>Go to market</span>    */}
               </Link>
            </div>
         </> 
         
      )
   })
   function InfoIcon() {
      return (
         <>

         {themeSelector == "theme-light" ? 
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g opacity="0.25">
               <path d="M5.21653 0.0358162C4 0.192854 2.83504 0.736629 1.92792 1.57339C0.859068 2.56015 0.17697 3.90318 0.0246118 5.32356C-0.00820393 5.61654 -0.00820393 6.38064 0.0246118 6.67362C0.301201 9.22843 2.24905 11.3707 4.76179 11.884C5.54234 12.0411 6.51275 12.0411 7.26282 11.8793C8.68561 11.5723 9.93964 10.766 10.8163 9.59642C11.4468 8.75497 11.8359 7.79164 11.9648 6.74863C12.0117 6.36892 12.0117 5.63061 11.9648 5.24856C11.8617 4.40946 11.5711 3.57739 11.1374 2.87189C10.1717 1.29916 8.56373 0.258482 6.74949 0.0334721C6.38617 -0.0110617 5.57281 -0.00871754 5.21653 0.0358162ZM6.84559 0.921794C8.87782 1.26634 10.5139 2.78751 11.0015 4.78213C11.196 5.57904 11.196 6.41814 11.0015 7.21505C10.746 8.25573 10.1412 9.23546 9.32786 9.91987C8.71374 10.4355 7.97773 10.8129 7.21594 11.0004C6.42836 11.1926 5.57984 11.1926 4.78289 11.0004C4.0797 10.8269 3.36009 10.4754 2.79285 10.0207C1.91386 9.31984 1.26458 8.30495 0.997363 7.21505C0.802813 6.41814 0.802813 5.57904 0.997363 4.78213C1.22239 3.86568 1.68415 3.04767 2.36625 2.36561C3.25461 1.47729 4.34456 0.975703 5.64782 0.856166C5.90565 0.832727 6.51743 0.865541 6.84559 0.921794Z" fill="#4D6372"/>
               <path d="M5.75664 3.17189C5.34645 3.32424 5.21518 3.75551 5.48474 4.06255C5.83868 4.4657 6.57469 4.27819 6.64501 3.76723C6.67548 3.55159 6.53016 3.31252 6.30279 3.19532C6.19262 3.14142 5.87853 3.12735 5.75664 3.17189Z" fill="#4D6372"/>
               <path d="M5.69671 5.02991C5.61936 5.05335 5.53732 5.10023 5.48106 5.15414L5.38965 5.24086V6.86515V8.48945L5.49044 8.58789C5.62405 8.72149 5.79281 8.77305 6.05534 8.75899C6.33193 8.74493 6.54757 8.63008 6.61086 8.46366C6.62258 8.43319 6.63196 7.71832 6.63196 6.87453C6.63196 5.18695 6.63665 5.23617 6.48897 5.12367C6.31786 4.99475 5.95924 4.95256 5.69671 5.02991Z" fill="#4D6372"/>
               </g>
            </svg>
             : 
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
               <g opacity="0.25">
               <path d="M5.21653 0.0355716C4 0.19261 2.83504 0.736385 1.92792 1.57314C0.859068 2.55991 0.17697 3.90294 0.0246118 5.32332C-0.00820393 5.6163 -0.00820393 6.3804 0.0246118 6.67338C0.301201 9.22819 2.24905 11.3705 4.76179 11.8838C5.54234 12.0408 6.51275 12.0408 7.26282 11.8791C8.68561 11.572 9.93964 10.7658 10.8163 9.59617C11.4468 8.75473 11.8359 7.7914 11.9648 6.74838C12.0117 6.36868 12.0117 5.63036 11.9648 5.24831C11.8617 4.40921 11.5711 3.57714 11.1374 2.87164C10.1717 1.29891 8.56373 0.258238 6.74949 0.0332277C6.38617 -0.0113056 5.57281 -0.00896173 5.21653 0.0355716ZM6.84559 0.92155C8.87782 1.2661 10.5139 2.78726 11.0015 4.78189C11.196 5.5788 11.196 6.4179 11.0015 7.21481C10.746 8.25548 10.1412 9.23522 9.32786 9.91962C8.71374 10.4353 7.97773 10.8126 7.21594 11.0001C6.42836 11.1923 5.57984 11.1923 4.78289 11.0001C4.0797 10.8267 3.36009 10.4751 2.79285 10.0204C1.91386 9.3196 1.26458 8.3047 0.997363 7.21481C0.802813 6.4179 0.802813 5.5788 0.997363 4.78189C1.22239 3.86544 1.68415 3.04743 2.36625 2.36537C3.25461 1.47704 4.34457 0.975459 5.64782 0.855922C5.90566 0.832484 6.51743 0.865298 6.84559 0.92155Z" fill="#FCFDFD"/>
               <path d="M5.75689 3.17115C5.34669 3.3235 5.21543 3.75477 5.48499 4.06182C5.83893 4.46496 6.57494 4.27745 6.64526 3.76649C6.67573 3.55086 6.5304 3.31178 6.30303 3.19459C6.19287 3.14068 5.87877 3.12662 5.75689 3.17115Z" fill="#FCFDFD"/>
               <path d="M5.69695 5.02942C5.6196 5.05286 5.53756 5.09974 5.48131 5.15365L5.38989 5.24037V6.86466V8.48896L5.49068 8.5874C5.62429 8.721 5.79306 8.77256 6.05558 8.7585C6.33217 8.74444 6.54782 8.62959 6.61111 8.46318C6.62283 8.43271 6.6322 7.71783 6.6322 6.87404C6.6322 5.18646 6.63689 5.23568 6.48922 5.12318C6.31811 4.99427 5.95948 4.95208 5.69695 5.02942Z" fill="#FCFDFD"/>
               </g>
            </svg>
         }

         
         </>
         
      )
   }

   // function SliderItem({slideProps} : {slideProps : any}) {
   //    let sliderImage =   slideProps.img == 1 ? apartment1.src :slideProps.img == 2 ? apartment2.src : apartment3.src
   //    return (
   //       <>
   //           <div className={style.slider__item}> {/*//slideProps?.active ? {opacity : 1, height: "auto"} : {opacity : 0, height: 0} */}
   //             <div className={style.slider__img}><img src={sliderImage} alt="apartment" /></div>
   //             <div className={style.slider__content}>
   //                <div className={style.slider__location}>
   //                   <MapIcon/>
   //                   {/* Miami, FL */}
   //                   {data?.data?.attributes?.accessible_card_address} {slideProps.address}
   //                   </div>
   //                <div className={style.slider__toSea}>
   //                   {/* 100 Ocean Drive */}
   //                   {toSea[(slideProps.img)-1]}
   //                </div>
   //                <div className={style.slider__conditions}>
   //                   <div>
   //                      {/* 14.3%  */}
   //                      {/* {data?.data?.attributes?.accessible_card_number1_title} */}
   //                      {slideProps.Yield}
   //                      <span>
   //                         {/* Yield */}
   //                         {data?.data?.attributes?.accessible_card_number1_text}
                           
   //                         <InfoIcon/>
   //                      </span>
   //                   </div>
   //                   <div>
   //                      {/* $100  */}
   //                      {data?.data?.attributes?.accessible_card_number2_title}
   //                      <span>
   //                         {/* Estimated Price */}
   //                         {data?.data?.attributes?.accessible_card_number2_text}
   //                         <InfoIcon/>

   //                      </span>
   //                   </div>
   //                </div>
   //             </div>
   //             <Link href="/market" className={style.slider__btn}>
   //                {data?.data?.attributes?.accessible_card_btn}
   //                {/* <span className={style.slider__btn_pc}>Go to payment</span>   
   //                <span className={style.slider__btn_mob}>Go to market</span>    */}
   //             </Link>
   //          </div>
   //       </> 
         
   //    )
   // }

   const PrevArrow = ({onClick}:any) =>{
      return <span onClick={onClick} className={cl(style.slider__arrow, style.slider__arrow_prev,locale === "pt" && style.slider__arrow_pt)}  />
   }


   const NextArrow = ({onClick}:any) => {
      return  <span onClick={onClick} className={cl(style.slider__arrow, style.slider__arrow_next,locale === "pt" && style.slider__arrow_pt)} />
   }

   
   
   return (
      <>
         <div className={style.accessible}>
            {/* <div className={cl(style.accessible__slider, style.slider)}> */}
               <div className={style.slider__list}>

                  
                  
                  <CustomSlider

                  className={style.sliderWrapper}
                  key={locale}
                  nextArrow={<NextArrow />}
                  prevArrow={<PrevArrow />}
                  >
                   {sliderArr}
                     
                  </CustomSlider>
                  
                  
               </div>
               
              
            {/* </div> */}
            <div className={style.accessible__content}>
               <div className={style.accessible__title}>
                  {/* Real estate */}
                  {/* investments have finally become accessible! */}
                  {data?.data?.attributes?.accessible_title} <br />
                  {data?.data?.attributes?.accessible_subtitle}
               </div>
               <ul className={cl(
                  style.accessible__list,
                  locale === 'ar' && style.accessible__list_ar
                  )}>
                  <li className={cl(style.accessible__item, locale === 'ar' && style.accessible__item_ar)} dangerouslySetInnerHTML={{__html: "<img src="+listIcon.src+" />" + data?.data?.attributes?.accessible_list1}}>
                     {/* Now, investors can collectively own the <br /> entire building or unit */}
                  </li>
                  <li className={cl(style.accessible__item, locale === 'ar' && style.accessible__item_ar)} dangerouslySetInnerHTML={{__html: "<img src="+listIcon.src+" />" + data?.data?.attributes?.accessible_list2}}>
                     {/* Invest in cash flow rental properties, <br />
                     receive weekly proceeds deposit to your wallet */}
                  </li>
                  <li className={cl(style.accessible__item, locale === 'ar' && style.accessible__item_ar)} dangerouslySetInnerHTML={{__html: "<img src="+listIcon.src+" />" + data?.data?.attributes?.accessible_list3}}>
                     {/* Miami is one of the largest US markets where rent increases the fastest YoY */}
                  </li>
               </ul>

               <Link  href={`https://demo.dequity.io/${locale}/properties?utm_content=${themeSelector == "theme-light" ? "light" : "dark"}`}>

                  <span className={cl(style.accessible__link,
                     locale === 'ar' && style.accessible__link_ar
                  )}>
                  {/* Own a piece of rental property today  */}
                  {data?.data?.attributes?.accessible_btn}

                  <svg width="32" height="19" viewBox="0 0 32 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M2 9.29004H27.592" stroke="#0D6EFD" strokeWidth="3" strokeLinecap="round"/>
                     <path d="M22.9482 2.1582L30.5 9.29039L22.9482 16.8421" stroke="#0D6EFD" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
               </span>
               </Link>
               
            </div>
            <div className={style.accessible__decor1}></div>
         </div>
      </>
   );
};



export default Accessible;
