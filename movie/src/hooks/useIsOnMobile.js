import { useState } from "react";
import { useEffect } from "react";

const getIsSamsung = () => window.innerWidth <= 1080;
const getIsHumbergerIcon = () => window.innerWidth <=1080;
export default function useIsOnSamsung() {
    const [isSamsung, setIsSamsung] = useState(getIsSamsung());

    useEffect(() => {
        const onResize = () => {
            setIsSamsung(getIsSamsung());
        }
        window.addEventListener("resize", onResize);
    
        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);
    
    return isSamsung;
}

export const useIsOnShowHumbergerIcon = () => {
    const [isHumbergerIcon, setIsHumbergerIcon] = useState(getIsHumbergerIcon());

    useEffect(() => {
        const onResize = () => {
            setIsHumbergerIcon(getIsHumbergerIcon());
        }

        window.addEventListener("resize", onResize);
    
        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);
    
    return isHumbergerIcon;
}