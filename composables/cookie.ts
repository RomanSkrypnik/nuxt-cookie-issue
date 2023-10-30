import {CookieOptions} from 'nuxt/dist/app';

export const useTestCookie = (options?: CookieOptions) => useCookie('test-cookie', options);
