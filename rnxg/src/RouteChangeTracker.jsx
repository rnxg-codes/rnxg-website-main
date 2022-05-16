import { useEffect} from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const UsePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize("UA-228810443-1");
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
};

export default UsePageTracking;