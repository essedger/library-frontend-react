import API from "../api";
import { ENDPOINTS } from "../constants";

const headers = { "content-type": "multipart/form-data" };

export const onPosImage = (payload: FormData): Promise<any> =>
  API().post(ENDPOINTS.UPLOAD_IMAGE, payload, { headers: headers });
