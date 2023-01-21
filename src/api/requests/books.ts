import API from '../api';
import { ENDPOINTS } from '../constants';

export const onGetBooks = (): Promise<any> => API().get(ENDPOINTS.BOOKS);
