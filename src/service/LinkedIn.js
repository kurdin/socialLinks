/**
 * Social Links - LinkedIn
 *
 * This class handles the linkedIn link generation
 *
 * @license MIT
 * @version 2.0.0
 * @author Izzy Skye
 */
export default class ServiceLinkedIn {
    static get serviceMap(){
        return {
            name: 'linkedin',
            class: this,
            enabled: true,
            order: 20
        };
    }
    
    /**
     * The svg element for the service
     *
     * @returns {string}
     */
    static get svg(){
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" width="438.5" height="438.5" viewBox="0 0 438.5 438.5" xml:space="preserve" fill="rgb(0, 0, 0)"><style>.s0{fill:rgb(0, 0, 0);}</style><rect x="5.4" y="145.9" width="94.2" height="282.9" fill="rgb(0, 0, 0)"></rect><path d="M408.8 171.7c-19.8-21.6-46-32.4-78.5-32.4 -12 0-22.9 1.5-32.7 4.4 -9.8 3-18.1 7.1-24.8 12.4 -6.8 5.3-12.1 10.3-16.1 14.8 -3.8 4.3-7.5 9.4-11.1 15.1v-40.2h-93.9l0.3 13.7c0.2 9.1 0.3 37.3 0.3 84.5 0 47.2-0.2 108.8-0.6 184.7h93.9V270.9c0-9.7 1-17.4 3.1-23.1 4-9.7 10-17.8 18.1-24.4 8.1-6.6 18.1-9.9 30.1-9.9 16.4 0 28.4 5.7 36.1 17 7.7 11.3 11.6 27 11.6 47V428.8h93.9V266.7C438.5 225 428.6 193.3 408.8 171.7zM53.1 9.7c-15.8 0-28.6 4.6-38.4 13.8C4.9 32.8 0 44.4 0 58.5c0 13.9 4.8 25.5 14.3 34.8 9.5 9.3 22.1 14 37.7 14h0.6c16 0 28.9-4.7 38.7-14 9.8-9.3 14.6-20.9 14.4-34.8 -0.2-14.1-5-25.7-14.6-35C81.6 14.3 68.9 9.7 53.1 9.7z" fill="rgb(0, 0, 0)"></path></svg>`;
    }
    
    /**
     * The base url for the share
     *
     * @returns {string}
     */
    static get base_url(){
        return 'https://www.linkedin.com/shareArticle';
    }
    
    /**
     * The query parameters
     *
     * @param params
     * @returns {{mini: string, url: string, title: string}}
     */
    static shareParams(params){
        return {
            mini: 'true',
            url: params.url,
            title: params.title
        };
    }
}
