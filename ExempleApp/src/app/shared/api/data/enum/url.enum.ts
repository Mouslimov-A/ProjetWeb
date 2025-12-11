import {environment} from '../../../../../environments/environment.development';

export enum APIURIPrivate {
  ME = 'account/me'
}

export enum APIURIPublic {
  ROOT = '',
  MAIN_HELLO_WORLD = 'main/hello-world',
  MAIN_HELLO_WORLD2 = 'main',
  REFRESH = 'account/refresh'
}

export const publicRoutes = (): string[] => {
  return Object.values(APIURIPublic).map((path: string) => {
    const baseURL: string = environment.apiURL;
    const cleanPath: string = path.replace(/^\/+/,'');
    return `${baseURL}${cleanPath}`;
  });
};
