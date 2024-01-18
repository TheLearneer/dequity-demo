import React, { FC, ReactHTMLElement } from 'react';

import { useEffect } from 'react';
import style from "./VideoModal.module.scss"
import { CrossSVG } from '@/libs/common/ui/assets/svg';


interface IVideoModal {

    onOpenModal:(arg:boolean)=> void,
    children:any,
    topCloseAsset?:boolean
}

const VideoModal:FC<IVideoModal> = ({ onOpenModal, children, topCloseAsset=false }) => {

  useEffect(()=>{
    let body = document.getElementsByTagName("body")[0]
    body.style.overflow = "hidden"
    return () =>{
      body.style.overflow = "visible"
    }
  },[]) 

  const onClose = () => {
    onOpenModal(false);
  };


  return (
    <>
      <div className={style['modalWrapper']} onClick={onClose}>
        {
          topCloseAsset  ?   <div className={style['close-wrapper']}>
          <span><CrossSVG /></span>
        </div> : ""
        }
        <div className={style['modal']} >
            <div className={style[`custom-modal-body`]}>
              <div className={style[`custom-modal-dash`]}>{children}</div>
            </div>
        </div>
      </div>
    </>
  );
};

export default VideoModal;
