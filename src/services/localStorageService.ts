const AUTH_DATA = "auth_data;";

export const localStorageService = {
  setAuthData: (authInfo: any): void => {
    localStorage.setItem(AUTH_DATA, JSON.stringify(authInfo));
  },
  getAuthData: (): any => {
    const data = localStorage.getItem(AUTH_DATA);
    if (data && data !== "undefined") {
      return JSON.parse(data);
    }
    return null;
  },
  removeAuthData: (): void => {
    localStorage.removeItem(AUTH_DATA);
  },
};
