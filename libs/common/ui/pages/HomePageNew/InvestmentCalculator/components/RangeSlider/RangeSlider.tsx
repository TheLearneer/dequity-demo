import {
  FC,
  MouseEventHandler,
  ReactComponentElement,
  ReactElement,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/router";
import { useDebounce } from "../../../../../hooks/useDebounce";
import { ClearWrapper, Value } from "./components";
import styles from "./RangeSlider.module.scss";
import cl from "classnames";

interface IRangeSliderProps {
  defaultValue: number;
  label?: string | null;
  type: "usd" | "percent";
  isClear?: boolean;
  min: number;
  max: number;
  step?: number;
  amountValue: number;
  onChange?: (value: number) => void;
  expFieldComp?: ReactElement<any, any>;
}

const RangeSlider: FC<IRangeSliderProps> = ({
  defaultValue,
  label,
  type,
  isClear,
  min,
  max,
  step = 1,
  amountValue,
  onChange,
  expFieldComp,
}) => {
  const [value, setValue] = useState<number>(defaultValue || min);
  const ref = useRef<HTMLInputElement>(null);
  const [mouseEventHandler, setMouseEvent] = useState<boolean>(false);
  const router = useRouter();
  const [focused, setIsFocused] = useState<boolean>(false);
  const [activeInput, setActiveInput] = useState<boolean>(false);
  const [clickedOnBlock, setClickedOnBlock] = useState<boolean>(false);


  const headRef = useRef(null);

  useEffect(() => {
    setValue(defaultValue === null ? min : defaultValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [defaultValue]);

  // useEffect(() => {
  //   const isClicked = (e: any) => {
  //     if (
  //       activeInput &&
  //       headRef?.current &&
  //       !headRef?.current.contains(e.target)
  //     ) {
  //       setActiveInput(false);
  //     }else{
  //       setActiveInput(true)
  //     }
  //   };

  //   document.addEventListener("click", isClicked);

  //   return () => {
  //     document.removeEventListener("click", isClicked);
  //   };
  // }, []);

  console.log(activeInput, "asdasd");
  const handleInputChange = (target: HTMLInputElement) => {
    const min = Number(target.min);
    const max = Number(target.max);
    const val = Number(target.value);
    let percentage = ((val - min) * 100) / (max - min);
    // const root = document.getElementById('theme');
    // if (root?.dir === 'rtl') {
    //   percentage = max - val;
    // }
    target.style.backgroundSize = percentage + "% 100%";
  };

  useEffect(() => {
    if (!ref.current) return;
    handleInputChange(ref.current);
  }, [value, router.locale]);

  useEffect(() => {
    if (!activeInput && onChange && (amountValue > max || amountValue < min)) {
      onChange(Math.max(Math.min(amountValue, max), min));
    }
  }, [activeInput]);

  const debounceChange = useDebounce((value: number) => {
    if (onChange) onChange(value);
  }, 100);

  const handlerChangeAmount = (value: number | string) => {
    value = +value

    if(isNaN(value)){
      return
    }

    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div
      className={styles.range}
      onMouseEnter={() => setMouseEvent(true)}
      onMouseLeave={() => setMouseEvent(false)}
    >
      <div className={styles.range__head_wrapper}>
        <div
          className={cl(
            styles.range__headFrame,
            mouseEventHandler && styles.range__headFrame_active,
            activeInput && styles.range__headFrame_activeInput
          )}
        >
          <div className={styles.range__head} ref={headRef} onClick={()=> {
            setActiveInput(true)
            setMouseEvent(false)
          } }>
            <p className={styles.range__label}>{label}</p>
            {/* {isClear ? (
              <ClearWrapper
                clear={() => {
                  setValue(defaultValue);
                  debounceChange(defaultValue);
                }}
                type={type}
                value={value}
              />
            ) : ( */}

           
              {activeInput ? (
                
                <input
                  
                  type="text"
                  maxLength={6}
                  className={styles.handleSetValueInput}
                  value={amountValue}
                  min={min}
                  max={max}
                  autoFocus
                  onChange={(e) => handlerChangeAmount(e.target.value)}
                  // onFocus={()=>setActiveInput(true)}
                  onBlur={()=> setActiveInput(false)}
                />
              ) : (
                <Value type={type} value={amountValue} />
              )}


                <div className={styles["custom-border"]} />

            {/* )} */}
          </div>
        </div>

        <div className={styles.line} />

        <div className={styles.range__exp_fieldFrame}>
          <div className={styles.range__exp_field}>{expFieldComp}</div>
        </div>
      </div>

      <div className={styles["range-input-wrapper"]}>
        <input
          ref={ref}
          className={cl(
            styles["range-input"],
            mouseEventHandler && styles["range-input__active"],
            router.locale === "ar" && styles["range-input_ar"]
          )}
          type="range"
          // dir='rtl'
          min={min}
          max={max}
          value={value}
          step={step}
          onChange={(e) => {
            handleInputChange(e.target);
            setValue(+e.target.value);
            debounceChange(+e.target.value);
          }}
        />
      </div>

      <div className={styles.range__numbersWrapper}>
        <div className={styles.range__numbers}>
          <span>${min.toLocaleString("es-US")}</span>
          <span>${max.toLocaleString("es-US")}</span>
        </div>
      </div>
    </div>
  );
};

export default memo(RangeSlider);
