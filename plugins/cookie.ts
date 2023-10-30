import { CookieOptions } from 'nuxt/dist/app';

/**
 * Cookie plugin
 * @description
 * Provides methods to handle nuxt cookie
 */
export default defineNuxtPlugin(() => {
    /**
     * Sets Nuxt cookie
     * @description
     * Sets cookie on client and server side
     */
    /**
     * Sets Cookie
     * @param key
     * @param val
     * @param options
     */
    const setMyCookie = (key: string, val = '', options: CookieOptions = {}) => {
        useCookie(key, options).value = val;

        /**
         * Sets cookie on server side
         * @description
         * Sometimes cookies are not immediately set after assigment
         * For example: using useCookie in server middleware context
         * @example
         * // Using in some middleware on server
         * useCookie('authToken').value = 'test'; // assigning cookie to value
         * console.log(useCookie('authToken').value); // undefined
         * @summary
         * To solve this problem we should use useRequestEvent
         * More about this issue: https://github.com/nuxt/nuxt/issues/22631
         */
        if (process.server) {
            let exp = options.expires;

            if (exp && exp.toUTCString) {
                options.expires = exp.toUTCString();
            }

            val = encodeURIComponent(val);

            let updatedCookie = key + '=' + val;

            for (const key in options) {
                updatedCookie += '; ' + key;
                const propValue = options[key];

                if (propValue !== true) {
                    updatedCookie += '=' + propValue ;
                }
            }

            const event = useRequestEvent();

            event.node.req.headers.cookie = event.node.req.headers.cookie
                ? `${updatedCookie}; ${event.node.req.headers.cookie}`
                : updatedCookie;
        }
    };

    return {
        provide: {
            setMyCookie,
        }
    }
});
