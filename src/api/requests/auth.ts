import { ILogin } from "../../types/entities/auth";
import API from "../api";
import { ENDPOINTS } from "../constants";

export const onLogin = (payload: ILogin): Promise<any> =>
  API().post(ENDPOINTS.LOGIN, payload);
export const onRegister = (payload: ILogin): Promise<any> =>
  API().post(ENDPOINTS.LOGIN, payload);
