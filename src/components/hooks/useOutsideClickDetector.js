import { useEffect } from 'react';

export function useOutsideClickDetector(ref1, isShow=false, handleClick=() => {}, ref2) {
  useEffect(() => {

    function handleClickOutside(event) {
      if (ref1.current && !ref1.current.contains(event.target) && isShow && !ref2?.current.contains(event.target)) {
        handleClick();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref1, isShow, ref2]);
}