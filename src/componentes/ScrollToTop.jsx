import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // O usa "auto" si prefieres que sea inmediato
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
