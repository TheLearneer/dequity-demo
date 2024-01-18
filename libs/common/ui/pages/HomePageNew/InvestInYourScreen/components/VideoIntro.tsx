import React, { FC, memo, useEffect, useState } from "react";
import animationData from "../resources/buttonData/button_dark_slow.json";
import animationDataWhite from '../resources/buttonData/button_White_slow.json'
import { useLottie } from "lottie-react";
import { Modal } from "react-bootstrap";
import VideoModal from "./VideoModal/VideoModal";
import style from "./VideoIntro.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/src/store/store";

interface IVideoModal {
  url: string;
}

const VideoIntro: FC<IVideoModal> = ({ url }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [widthWindow, setWidthWindow] = useState<number | null>(null);
  let videoCode = url.split("=")[1];


  const theme = useSelector((state:RootState)=> state.app.appReducer.appTheme)


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

  const isTabletOrMob = widthWindow !==null && widthWindow <= 996


  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: theme === "theme-light"? animationDataWhite :  animationData,
    style: {
      width: isTabletOrMob ? 100 : 120,
      height:isTabletOrMob ? 100 : 120,
      cursor: "pointer",
    },
  };

  const handlerClick = () => {
    setOpenModal(true);
  };

  const { View } = useLottie(defaultOptions);

  return (
    <>
      <div onClick={handlerClick}>{View}</div>

      {openModal ? (
        <VideoModal onOpenModal={setOpenModal} topCloseAsset>
          <div>
            <iframe
              width="100%"
              height="90vh"
              className={style.frame}
              src={`https://www.youtube.com/embed/${videoCode}?autoplay=1`}
              allow="autoplay"
              //   allowFullScreen
            ></iframe>
          </div>
        </VideoModal>
      ) : null}
    </>
  );
};

export default memo(VideoIntro);
