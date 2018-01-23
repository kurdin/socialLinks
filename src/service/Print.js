/**
 * Social Links - Print
 *
 * This class handles the print link generation
 *
 * @license MIT
 * @version 2.0.0
 * @author Izzy Skye
 */
export default class ServicePrint {
    static get serviceMap(){
        return {
            name: 'print',
            class: this,
            enabled: false,
            order: 50
        };
    }
    
    /**
     * The svg element for the service
     *
     * @returns {string}
     */
    static get svg(){
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" width="475.1" height="475.1" viewBox="0 0 475.1 475.1" xml:space="preserve" fill="rgb(0, 0, 0)"><style>.s0{fill:rgb(0, 0, 0);}</style><path d="M459 217.1c-10.8-10.8-23.7-16.1-38.7-16.1h-18.3v-73.1c0-7.6-1.9-16-5.7-25.1 -3.8-9.1-8.4-16.4-13.7-21.7L339.2 37.7c-5.3-5.3-12.6-9.9-21.7-13.7 -9.1-3.8-17.5-5.7-25.1-5.7H100.5c-7.6 0-14.1 2.7-19.4 8 -5.3 5.3-8 11.8-8 19.4V201H54.8c-15 0-27.9 5.4-38.7 16.1C5.4 227.9 0 240.8 0 255.8v118.8c0 2.5 0.9 4.6 2.7 6.4 1.8 1.8 4 2.7 6.4 2.7h64v45.7c0 7.6 2.7 14.1 8 19.4 5.3 5.3 11.8 8 19.4 8h274.1c7.6 0 14.1-2.7 19.4-8 5.3-5.3 8-11.8 8-19.4v-45.7h64c2.5 0 4.6-0.9 6.4-2.7 1.8-1.8 2.7-3.9 2.7-6.4V255.8C475.1 240.8 469.7 227.9 459 217.1zM365.4 420.3H109.6v-73.1h255.8V420.3zM365.4 237.5H109.6V54.8h182.7v45.7c0 7.6 2.7 14.1 8 19.4 5.3 5.3 11.8 8 19.4 8h45.7V237.5zM433.1 268.7c-3.6 3.6-7.9 5.4-12.8 5.4 -4.9 0-9.2-1.8-12.8-5.4 -3.6-3.6-5.4-7.9-5.4-12.8s1.8-9.2 5.4-12.8c3.6-3.6 7.9-5.4 12.8-5.4 4.9 0 9.2 1.8 12.8 5.4 3.6 3.6 5.4 7.9 5.4 12.8S436.7 265 433.1 268.7z" fill="rgb(0, 0, 0)"></path></svg>`;
    }
    
    /**
     * The base url for the share
     *
     * @returns {string}
     */
    static get base_url(){
        return '#';
    }
    
    /**
     * The query parameters
     *
     * @param params
     * @returns {{}}
     */
    static shareParams(params){
        return {};
    }
}
