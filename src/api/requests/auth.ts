import API from "api/api";
import { ENDPOINTS } from "api/constants";

type LoginPayload = {
  email: string;
  password: string;
};
export const onLogin = (payload: LoginPayload): Promise<any> =>
  API().post(ENDPOINTS.LOGIN, payload);
