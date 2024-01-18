import React from "react";
import style from "./quoteWrapper.module.scss";
import { QuoteBlockSVG } from "../../assets/svg";

interface IQuoteWrapper {
  autor: string;
  quote: any;
}

export default function QuoteWrapper(props: IQuoteWrapper) {
  const { autor, quote } = props;
  return (
    <div className={style.quoteWrapper}>
      <div>
      <div className={style.quoteBack}>
        <QuoteBlockSVG />
      </div>
      <div className={style.quote}>{quote}</div>
      <div className={style.autor}>{autor}</div>
      </div>
    </div>
  );
}
