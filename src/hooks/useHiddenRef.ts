import { useEffect, useRef } from "react";

export const useHiddenRef = <T extends HTMLElement>(
  HiddenClassName: string,
  throttleDelay: number = 250,
  showElementDelay: number = 1000,
): React.RefObject<T> => {

const ref = useRef<T>(null);

useEffect(()=>{
    let prevScroll: number = 0;
    let isThrottled: boolean = false;
    let timeout: ReturnType<typeof setTimeout>;

    const handleScroll = () => {
      if (isThrottled) {
        return;
      }

      isThrottled = true;

      const currentScroll = window.pageYOffset;
      const currentOffset = currentScroll - prevScroll;

      if (!ref.current) throw Error ("Cant hide invalid ref element")

      if (!ref.current?.classList.contains(HiddenClassName) && currentOffset > 200) {
        ref.current?.classList.add(HiddenClassName);
      } else if (ref.current?.classList.contains(HiddenClassName) && currentOffset < 0)  {
        ref.current?.classList.remove(HiddenClassName);
      }

      prevScroll = window.pageYOffset;
      setTimeout(()=> {
        isThrottled = false;
      }, throttleDelay);

      clearTimeout(timeout);
      timeout = setTimeout(()=> {
         prevScroll = window.pageYOffset;
         if (ref.current?.classList.contains(HiddenClassName)){
           ref.current?.classList.remove(HiddenClassName);
         }

      }, showElementDelay);

    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  },[]);

  return ref as React.RefObject<T>

}
