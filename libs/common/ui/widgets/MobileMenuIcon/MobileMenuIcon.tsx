import React ,{useState,useEffect} from "react";
import style from "./MobileMenuIcon.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "@/src/store/actions/app";
import { useRouter } from "next/router";
import { MenuSVG, MenuWhiteSVG } from "../../assets/svg";
import { RootState } from "@/src/store/store";

export default function MobileMenuIcon() {
  const { locale } = useRouter();
  const dispatch = useDispatch();

  const [icon,setIcon] = useState<any>()

  const theme = useSelector<RootState>(
    (state) => state.app.appReducer.appTheme
  );

useEffect(() => {

  if(theme === "theme-light"){
    setIcon(<MenuWhiteSVG />)
  }else{
    setIcon(<MenuSVG />)
  }

}, [theme])

  return (
    <div
      className={style.btn_icon_wrapper}
      style={locale === "ar" ? { left: 10, transform: "scale(-1,1)" } : {}}
      onClick={(e) => {
        e.stopPropagation()
        dispatch(toggleMenu(true));
      }}
    >
      {icon}
    </div>
  );
}
