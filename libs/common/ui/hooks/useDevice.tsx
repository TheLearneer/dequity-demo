import { FC, useEffect, useLayoutEffect } from 'react';

export const useDevice = () => {
  useEffect(() => {
    const isMac = navigator.userAgent.toUpperCase().indexOf('MAC OS X') >= 0;
    
    const calc = document.getElementById("theme")
    if(calc){
      calc.setAttribute('data-web', isMac ? 'mac' : 'win');
    }
  }, []);
  return null;
};
