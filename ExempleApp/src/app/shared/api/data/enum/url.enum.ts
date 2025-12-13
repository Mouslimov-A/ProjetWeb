import {environment} from '../../../../../environments/environment.development';

export enum APIURIPrivate {
  ME = 'account/me'
}

export enum APIURIPublic {
  ROOT = '',
  MAIN_HELLO_WORLD = 'main/hello-world',
  MAIN_HELLO_WORLD2 = 'main',
  REFRESH = 'account/refresh',
  SIGN_IN = 'account/sign-in',
  SIGN_UP = 'account/signup',
}
export enum ApiURI{
  ME = 'account/me'
}

export const publicRoutes = (): string[] => {
  return Object.values(APIURIPublic).map((path: string) => {
    const baseURL: string = environment.apiURL;
    const cleanPath: string = path.replace(/^\/+/,'');
    return `${baseURL}${cleanPath}`;
  });
};
