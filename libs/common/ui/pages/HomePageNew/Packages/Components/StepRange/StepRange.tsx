import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import style from './StepRange.module.scss'
import React, { memo } from "react";
import { useDebounce } from "@/libs/common/ui/hooks/useDebounce";

interface IStepRange {
 defaultValue:number | number[],
 min?:number
 onChange:(e:number | number[]) => void
 locale?:string | undefined
}

const StepRange = (props: IStepRange) => {
  const {defaultValue ,min = 25,onChange, locale = "en"} = props;



  const marks = { 25: "Standard", 50: "Premier", 75: "Business",100: "First Class" }

  const debounceChange = useDebounce((value: number) => {
    if (onChange) onChange(value);
  }, 200);

  

  return (
    <>
      <div className={style["container-range-slider"]} >
        <Slider  min={min} reverse={locale === "ar"}  defaultValue={defaultValue} onChange={debounceChange} marks={marks} step={null} />
      </div>
    </>
  );
};

export default memo(StepRange);
