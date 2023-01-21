import { IAuthInfo } from 'store/auth/interfaces';

const AUTH_DATA = 'ccm:auth_data;';

export const localStorageService = {
  setAuthData: (authInfo: IAuthInfo): void => {
    localStorage.setItem(AUTH_DATA, JSON.stringify(authInfo));
  },
  getAuthData: (): IAuthInfo | null => {
    const data = localStorage.getItem(AUTH_DATA);
    if (data && data !== 'undefined') {
      return JSON.parse(data);
    }
    return null;
  },
  removeAuthData: (): void => {
    localStorage.removeItem(AUTH_DATA);
  },
};
