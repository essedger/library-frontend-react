import { useCallback, useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";

// import i18n from "../i18n";
import { localStorageService } from "../services/localStorageService";
import { PATH_NAMES } from "../routes/constants";

const UseInitApp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  //set initial lang
  // useEffect(() => {
  //   if (process.env.REACT_APP_LANG) {
  //     i18n.changeLanguage(process.env.REACT_APP_LANG);
  //   }
  // }, []);
  const checkPath = useCallback(() => {
    const authData = localStorageService.getAuthData();

    if (authData) {
      if (
        location.pathname === PATH_NAMES.auth.login ||
        location.pathname === PATH_NAMES.auth.signup ||
        location.pathname === "/"
      ) {
        navigate(PATH_NAMES.books.base);
      }
    } else {
      navigate(PATH_NAMES.auth.login);
    }
  }, [location.pathname, navigate]);

  useEffect(() => {
    checkPath();
  }, [checkPath]);
};

export default UseInitApp;
