const AUTH_DATA = "auth_data";

export const localStorageService = {
  setAuthData: (token: string): void => {
    localStorage.setItem(AUTH_DATA, token);
  },
  getAuthData: (): any => {
    const data = localStorage.getItem(AUTH_DATA);
    if (data && data !== "undefined") {
      return data;
    }
    return null;
  },
  removeAuthData: (): void => {
    localStorage.removeItem(AUTH_DATA);
  },
};
