import { useEffect, useRef, useCallback } from 'react';

export const debounce = (callback: (props?: any) => any, delay: number) => {
  let isDebounced: any = null;
  return (...args: any) => {
    clearTimeout(isDebounced);
    isDebounced = setTimeout(() => callback(...args), delay);
  };
};

export function useDebounce(callback: (props?: any) => void, delay: number) {
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(
    debounce((...args) => callbackRef.current(...args), delay),
    [delay],
  );
}
