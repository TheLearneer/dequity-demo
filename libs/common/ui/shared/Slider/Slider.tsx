// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React, { FC, ReactNode } from "react";
import Slider from "react-slick";
import { JsxElement } from "typescript";
import { Settings as CarouselSettings } from 'react-slick';


export const CustomSlider: FC<{
  className?: string;
  
  children: ReactNode;
  nextArrow: any;
  prevArrow: any;
}> = ({ className, children, nextArrow, prevArrow }) => {
  let settings: {
    dots: boolean;
    swipe:boolean;
    infinite: boolean;
    speed: number;
    slidesToShow: number;
    slidesToScroll: number;
    autoplay: boolean;
    className?: string;
    adaptiveHeight: boolean;
    nextArrow: any;
    prevArrow: any;
  } = {
    dots: false, // can be true if need slider for home page for example
    infinite: true, // infinite slider
    speed: 500, // spped of infinite slider
    slidesToShow: 1, // how many slides show
    autoplay: false, // if need to autoplay
    slidesToScroll: 1 ,
    className, // classname
    swipe:false,
    adaptiveHeight: true, // adaptive height
    nextArrow,
    prevArrow,
  };

  let props: CarouselProps = {
    carouselSettings : settings,
    children: children
  }

  return <Slider {...settings}>{children}</Slider>;
  // return <Slider {...props}></Slider>;
};

export default CustomSlider;
