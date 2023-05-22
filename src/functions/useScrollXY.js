import {useState, useEffect } from 'react';

export default function useScrollY(){

    const [scrollY, setScrollY]= useState(window.scrollY)
    const [scrollX, setScrollX]= useState(window.scrollX)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleScroll = () => {
        setScrollY(window.scrollY)
        setScrollX(window.scrollX)
    };
      
    return { scrollY, scrollX };

}