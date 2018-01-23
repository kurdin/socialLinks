/**
 * Social Links - Facebook
 *
 * This class handles the facebook link generation
 *
 * @license MIT
 * @version 2.0.0
 * @author Izzy Skye
 */
export default class ServiceFacebook {
    static get serviceMap(){
        return {
            name: 'facebook',
            class: this,
            enabled: true,
            order: 0
        };
    }
    
    /**
     * The svg element for the service
     *
     * @returns {string}
     */
    static get svg(){
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" width="470.5" height="470.5" viewBox="0 0 470.5 470.5" xml:space="preserve" fill="rgb(0, 0, 0)"><style>.s0{fill:rgb(0, 0, 0);}</style><path d="M271.5 154.2v-40.5c0-6.1 0.3-10.8 0.8-14.1 0.6-3.3 1.9-6.6 3.9-9.9 2-3.2 5.2-5.5 9.7-6.7 4.5-1.2 10.4-1.9 17.9-1.9h40.5V0h-64.8c-37.5 0-64.4 8.9-80.8 26.7 -16.4 17.8-24.6 44-24.6 78.7v48.8h-48.5v81.1h48.5v235.3h97.4V235.3h64.8l8.6-81.1H271.5z" fill="rgb(0, 0, 0)"></path></svg>`;
    }
    
    /**
     * The base url for the share
     *
     * @returns {string}
     */
    static get base_url(){
        return 'https://facebook.com/sharer/sharer.php';
    }
    
    /**
     * The query parameters
     *
     * @param params
     * @returns {{u: string}}
     */
    static shareParams(params){
        return {
            u: params.url
        };
    }
}
