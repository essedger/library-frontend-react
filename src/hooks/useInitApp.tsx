import { useCallback, useEffect } from "react";

import { useLocation, useNavigate } from "react-router-dom";

// import i18n from "../i18n";
import { localStorageService } from "../services/localStorageService";
import { PATH_NAMES } from "../routes/constants";
import { onGetMe } from "../api/requests/auth";
import { setAuth } from "../store/auth";

import { useAppDispatch, useAppSelector } from "./reduxHooks";

const UseInitApp = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const me = useAppSelector((state) => state.me);
  const dispatch = useAppDispatch();
  //Set initial lang
  // useEffect(() => {
  //   if (process.env.REACT_APP_LANG) {
  //     i18n.changeLanguage(process.env.REACT_APP_LANG);
  //   }
  // }, []);
  const checkPath = useCallback(() => {
    const authData = localStorageService.getAuthData();
    //Authorized users
    if (authData) {
      if (
        location.pathname === PATH_NAMES.auth.login ||
        location.pathname === PATH_NAMES.auth.signup ||
        location.pathname === "/"
      ) {
        navigate(PATH_NAMES.books.base);
      }
      //Not authorized users
    } else if (location.pathname !== PATH_NAMES.auth.signup) {
      navigate(PATH_NAMES.auth.login);
    }
  }, [location.pathname, navigate]);

  useEffect(() => {
    checkPath();
  }, [checkPath]);

  const checkMeData = useCallback(async () => {
    const authData = localStorageService.getAuthData();
    //Authorized users
    if (authData && !me?.me) {
      try {
        const userData = await onGetMe();
        // console.log(userData);
        if (userData?.data?.user) {
          dispatch(setAuth(userData?.data?.user));
        }
      } catch (e) {
        console.log(e);
      }
    }
  }, [dispatch, me]);
  useEffect(() => {
    checkMeData();
  }, [me, checkMeData]);
};

export default UseInitApp;
